import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./Slider.css"; // Custom styling file
import { slides } from "../../util/constant";
import "./style.css"


export default function Header() {
    return (
        <>
            <div id="header">
                <div className="container">
                    <Swiper navigation modules={[Navigation, Autoplay]}
                        loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="custom-swiper">
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="slide">
                                <div className="slide-content">
                                    <img src={slide.image} alt="Slide" className="img-fluid" />
                                    <div className="text-container">
                                        <h2> <span>{slide.tittle1}</span> <br /> {slide.title}</h2>
                                        <p>{slide.tittle2}</p>
                                        <button>{slide.button}</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

