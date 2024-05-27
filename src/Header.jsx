import { useLocation } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./Header.css";
import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header-content">
      <img className="header-content-img" src={logo} alt={logo}></img>
      {location.pathname === "/FormPage" && (
        <Nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ana Sayfa
              </Link>
              <span> -</span>
            </li>
            <li className="nav-item">
              <Link to="/FormPage" className="nav-link">
                Sipariş Oluştur
              </Link>
              <span> -</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SonPage">
                Seçenekler
              </Link>
            </li>
          </ul>
        </Nav>
      )}
    </div>
  );
}
