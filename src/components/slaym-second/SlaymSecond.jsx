import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./cardsecond.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cardstwo } from "../../util/constant";
export default function SlaymSecondCard() {

  return (
    <>
      <div id="card-slaym2">
        <div className="shakl"></div>
        <div className="container">
          {/* Sarlavha va Tavsif */}
          <div className="text">
            <h1 className="title">{cardstwo[0].titleh1}</h1>
            <p className="description">{cardstwo[0].titlep}</p>
          </div>
          {/* Grid va Swiper */}
          <div className="cards">
            <Swiper modules={[Navigation, Pagination]}
              className="swiper"
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              // pagination={{ clickable: true }}
              navigation>
              {cardstwo.slice(1).map((card) => (
                <SwiperSlide key={card.id}>
                  <div key={card.id} className="card">
                    <img src={card.image} alt={card.title} className="w-100" />
                    <div className="card-body">
                      <h2>{card.title}</h2>
                      <p>{card.price}  <strike>{card.price2}</strike></p>
                      <span>{card.type}</span>
                      <br />
                      <a href="#">{card.button}</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}