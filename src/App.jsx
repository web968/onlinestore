import React, { useState } from "react";
import { FaPhone, FaShoppingCart, FaTelegram, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { navItems as initialNavItems } from "./util/constant";
import Header from "./components/header/Header";
import Productsw from "./components/product-section/Productsw";

export default function App() {
  const [navItems, setNavItems] = useState(initialNavItems);


  return (
    <>
      <div id="top">
        <div className="container">
          <div className="left">
            <ul>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="call">
              <a href="tel:+998 94 253 40 99">
                <FaPhone />
                <span>+998 94 253 40 99</span>
              </a>
            </div>
            <div className="media">
              <a href="https://youtube.com" target="_blank">
                <FaYoutube className="youtube" />
              </a>
              <a href="https://t.me/abdulatifProjects" target="_blank">
                <FaTelegram className="telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div id="navbar">
        <div className="container">
          <div className="nav-content d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src="/images/Logo.png" alt="COSMODROM" className="img-fluid" />
            </div>
            {navItems.map((item, index) => (
              <div key={index} className="content">
                <img src={item.image} alt="Marker" className="img-fluid" />
                <a href="">{item.text}</a>
              </div>
            ))}
            <div className="right d-flex align-items-center">
              <a className="tel" href="tel:+998 94 253 40 99">
                <FaPhone />
                <span>+998 94 253 40 99</span>
              </a>
              <button className="basket">
                <a href="#">
                  <FaShoppingCart className="shop-basket" />
                  <span><button>1299 штук</button> На сумму 100 369 Р</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="nabbor"></div>
      {/* Header */}
      <Header/>
      <Productsw/>
    </>
  );
}
