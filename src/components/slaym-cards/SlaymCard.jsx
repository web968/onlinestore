import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./card.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cards1 } from "../../util/constant";
export default function SlaymCard() {

    return (
        <>
            <div id="card-slaym">
                <div className="container">
                    {/* Sarlavha va Tavsif */}
                    <div className="text">
                        <h1 className="title">{cards1[0].titleh1}</h1>
                        <p className="description">{cards1[0].titlep}</p>
                    </div>
                    {/* Grid va Swiper */}
                    <div className="cards">
                        <Swiper modules={[Navigation, Pagination]}
                            slidesPerView={4}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            navigation>
                            {cards1.slice(1).map((card) => (
                                <SwiperSlide key={card.id}>
                                    <div key={card.id} className="card">
                                        <img src={card.image} alt={card.title} className="w-100" />
                                  <div className="card-body">

                                        <h2>{card.title}</h2>
                                        <p>{card.price}  <strike>{card.price2}</strike></p>
                                        <span>{card.type}</span>
                                        <br />
                                        <button>{card.button}</button>
                                  </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Swiper (768px dan kichik bo‘lsa) */}
                        {/* <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
          >
            {cards1.slice(1).map((card) => (
              <SwiperSlide key={card.id}>
                <div className="card">
                  <img src={card.image} alt={card.title} className="w-100" />
                  <h2>{card.title}</h2>
                  <p>{card.price}</p>
                  <strike>{card.price2}</strike>
                  <span>{card.type}</span>
                  <button>{card.button}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}