import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormPage.css";
import { useHistory } from "react-router-dom";

const initialForms = {
  isim: "",
  boyut: "",
  hamurTipi: "",
  toppings: [],
  extraNotes: "",
  adet: 1,
};

const FormPage = ({ setOrder }) => {
  const [formData, setFormData] = useState(initialForms);

  const [submitting, setSubmitting] = useState(false);
  const [counter, setCounter] = useState(1);
  const history = useHistory();
  const pizzaBasePrice = 85.5;
  const extraToppingPrice = 5;
  const pizzaBoyut = ["S", "M", "L"];
  const pizzaToppings = [
    { id: 1, name: "Mantar" },
    { id: 2, name: "Sucuk" },
    { id: 3, name: "Sosis" },
    { id: 4, name: "Zeytin" },
    { id: 5, name: "Biber" },
    { id: 6, name: "Mısır" },
    { id: 7, name: "Patlıcan" },
    { id: 8, name: "Hamsi" },
    { id: 9, name: "Beyaz Peynir" },
    { id: 10, name: "Kaşar" },
    { id: 11, name: "Peynir" },
    { id: 12, name: "Kabak" },
    { id: 13, name: "Baharat" },
    { id: 14, name: "Ananas" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => {
      let newToppings = checked
        ? [...prevFormData.toppings, value]
        : prevFormData.toppings.filter((topping) => topping !== value);
      return {
        ...prevFormData,
        toppings: newToppings,
      };
    });
  };

  const handleCounterChange = (increment) => {
    setCounter((prevCounter) => {
      const newCounter = increment ? prevCounter + 1 : prevCounter - 1;
      return newCounter > 0 ? newCounter : 1;
    });
  };

  const handleSubmit = (e) => {
    const finallyOrder = {
      ...formData,
      counter,
      totalPrice,
    };
    e.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", finallyOrder)
      .then((response) => {
        console.log(response);
        setOrder(finallyOrder);
        history.push(`/SonPage/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Sipariş Gönderim Hatası:", error);
      });
  };

  const isFormValid = () => {
    const { isim, boyut, hamurTipi, toppings } = formData;
    return (
      isim.length >= 3 &&
      boyut &&
      hamurTipi &&
      toppings.length >= 4 &&
      !submitting
    );
  };

  const totalToppingPrice = formData.toppings.length * extraToppingPrice;
  const totalPrice = (pizzaBasePrice + totalToppingPrice) * counter;

  useEffect(() => {
    fetchCounter();
  }, [counter]);

  function fetchCounter() {
    formData.adet = counter;
  }

  return (
    <main>
      <section className="pizza-section">
        <div className="pizza-form-header">
          <img src="Assets\mile2-aseets\pictures\form-banner.png" alt="" />
          <div className="baslik-yazilar">
            <h2>Position Absolute Acı Pizza </h2>
            <div className="pizza-info">
              <h3>
                {pizzaBasePrice}₺ <span className="dort">4.9</span>{" "}
                <span className="ikiyuz">(200)</span>
              </h3>
            </div>
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>
        <div className="formAlani">
          <form onSubmit={handleSubmit}>
            <label className="isimAlani">
              İsim <span style={{ color: "red" }}>*</span>
              <input
                placeholder="Lütfen isminizi giriniz"
                type="text"
                name="isim"
                value={formData.isim}
                onChange={handleInputChange}
                required
                maxLength={20}
                minLength={3}
              />
            </label>
            <br />
            <div className="options">
              <div className="pizzaboyut-container">
                <span className="label-text">
                  Boyut Seç:<span style={{ color: "red" }}>*</span>
                </span>
                <div className="radio-buttons">
                  {pizzaBoyut.map((size) => (
                    <label tabIndex={0} key={size} className="radio-container">
                      <input
                        type="radio"
                        name="boyut"
                        value={size}
                        onChange={handleInputChange}
                        required
                        checked={formData.boyut === size}
                        disabled={submitting}
                      />
                      <span className="custom-radio">
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <label className="pizzahamur-container">
                <span className="label-text">
                  Hamur Tipi:<span className="required">*</span>
                </span>
                <select
                  name="hamurTipi"
                  value={formData.hamurTipi}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                >
                  <option
                    className="option-c"
                    disabled
                    selected="true"
                    value=""
                  >
                    Hamur Tipi Seçiniz
                  </option>
                  <option value="ince">İnce</option>
                  <option value="standart">Standart</option>
                  <option value="kalin">Kalın</option>
                </select>
              </label>
            </div>
            <br />
            <div className="toppings-form">
              <label className="top-text">Ek Malzemeler</label>
              <p className="toppings-info">
                En fazla 10 malzeme seçebilirsiniz 5TL
              </p>
              <div className="toppings">
                {pizzaToppings.map((topping) => (
                  <label
                    tabIndex={0}
                    key={topping.id}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const checkbox = e.target.querySelector(
                          "input[type='checkbox']"
                        );
                        checkbox.checked = !checkbox.checked;
                        checkbox.dispatchEvent(
                          new Event("change", { bubbles: true })
                        );
                      }
                    }}
                  >
                    <input
                      type="checkbox"
                      name="toppings"
                      value={topping.name}
                      onChange={handleCheckboxChange}
                      checked={formData.toppings.includes(topping.name)}
                      disabled={submitting}
                    />
                    <span className="checkmark"></span>
                    {topping.name}
                  </label>
                ))}
              </div>
            </div>
            <br />
            <label>
              Ek Notlar:
              <textarea
                name="extraNotes"
                value={formData.extraNotes}
                onChange={handleInputChange}
                disabled={submitting}
              ></textarea>
            </label>
            <hr />
            <div className="order-summary">
              <div className="counter">
                <button
                  type="button"
                  onClick={() => handleCounterChange(false)}
                >
                  -
                </button>
                <div className="counter-value">{counter}</div>
                <button
                  type="button"
                  onClick={() => handleCounterChange(true)}
                  value={formData.adet}
                >
                  +
                </button>
              </div>
              <div className="son-de">
                <div className="deta">
                  <p className="kutu-si">Sipariş Toplamı</p>
                  <p className="kutu-seçim">
                    Seçimler{" "}
                    <span className="span-seçim">{totalToppingPrice}.00₺</span>
                  </p>
                  <p className="kutu-top">
                    Toplam <span className="span-top">{totalPrice}₺</span>
                  </p>
                  <button
                    className="sip-but"
                    type="submit"
                    disabled={!isFormValid()}
                  >
                    Sipariş Ver !
                  </button>
                  <img src="src\assets\discord.svg" alt="" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormPage;
