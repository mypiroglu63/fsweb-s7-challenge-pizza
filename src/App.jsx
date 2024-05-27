import MainPage from "./MainPage";
import FormPage from "./FormPage";
import SonPage from "./SonPage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [order, setOrder] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
    adet: 1,
  });
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/FormPage">
            <FormPage setOrder={setOrder} />
          </Route>
          <Route path="/SonPage">
            <SonPage order={order} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
