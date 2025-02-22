import React from "react";
import { FaPhone, FaTelegram, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
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
    </>
  );
}
