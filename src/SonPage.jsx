/*import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./SonPage.css";

const SonPage = ({ order }) => {
  console.log(order);

  return (
    <div className="sonpage">
      <h2 className="lezzet">lezzetin yolda </h2>
      <h1 className="siparis">SİPARİŞ ALINDI</h1>
      <hr className="cizgi" />
      <div className="bilgi">
        <p>Position: Absolute Acı Pizza</p>
        <p>
          Boyut: <strong>{order.boyut}</strong>
        </p>
        <p>
          Hamur: <strong>{order.hamurTipi}</strong>
        </p>
        <p>
          Ek Malzemeler: <strong>{order.toppings.join(" , ")}</strong>
        </p>
      </div>

      <div className="sonuc">
        <div className="yazilar">
          <p>Sipariş Toplamı</p>
          <p>Seçimler{order.toppings.length * 5} ₺</p>
          <p>Toplam {order.totalPrice}₺</p>
        </div>
      </div>
    </div>
  );
};

export default SonPage; 
*/

import "./SonPage.css";
const SonPage = ({ order }) => {
  console.log(order);
  return (
    <div className="onay-kısmı">
      <h2 className="lezzet-metini">lezzetin yolda </h2>
      <br />
      <h1 className="siparis-metini">SİPARİŞ ALINDI</h1>
      <hr className="çizgi" />
      <p className="pizza-metini">Position: Absolute Acı Pizza</p>
      <div className="detays">
        <p className="boyut-metini">
          Boyut: <strong>{order.boyut}</strong>
        </p>
        <p className="hamur-metini">
          Hamur: <strong>{order.hamurTipi}</strong>
        </p>
        <p className="ek-metini">
          Ek Malzemeler: <strong>{order.toppings.join(" , ")}</strong>
        </p>
      </div>

      <div className="son-detays">
        <div className="detays-css">
          <p className="kutu-sipariş">Sipariş Toplamı</p>
          <p className="kutu-seçimler">
            Seçimler{" "}
            <span className="span-seçimler">
              {order.toppings.length * 5}.00₺
            </span>
          </p>
          <p className="kutu-toplam">
            Toplam <span className="span-toplam">{order.totalPrice}₺</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SonPage;
