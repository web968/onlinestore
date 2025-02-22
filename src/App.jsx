import React from "react";
import { FaYoutube, FaTelegram, FaPhone } from "react-icons/fa";

export default function App() {
  return (
    <>
      <nav id="navbar">
        {/* Navbar-top */}
        <div className="nav-top">
          <div className="container">
          <div className="nav-content d-flex align-items-center justify-content-between">
            <div className="left">
              <ul className="d-flex align-items-center">
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
            <div className="right d-flex align-items-center">
              <a href="tel:+998942534099">
                <FaPhone className="call"/>
                <span>+998942534099</span>
              </a>
              <div className="social-icons">
              <a href="https://youtube.com" target="_blank">
                <FaYoutube className="youtube"/>
              </a>
              <a href="https://t.me" target="_blank">
                <FaTelegram className="telegram"/>
              </a>
              </div>
            </div>
          </div>
          </div>
          {/* Navbar-main */}
          <div className="nav-main"></div>
        </div>
      </nav>{" "}
      {/* <navbar> emas, <nav> ishlatildi */}
    </>
  );
}