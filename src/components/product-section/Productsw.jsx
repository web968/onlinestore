import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./style.css"


export default function Productsw() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
          .then(response => setProducts(response.data))
          .catch(error => console.error("API error:", error));
      }, []);

    return (
        <>
            <div id="products">
               <div className="container">
               <Swiper
                    modules={[Pagination]}
                    // pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 11 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className="swiper">
                            <img
                                src={product.image || "https://via.placeholder.com/150"}
                                alt={product.product_name || "No Name"}
                                className="w-100"
                            />
                            <h3 >{product.title || "Noma'lum mahsulot"}</h3>
                            <p className="text-gray-600">{product.price || "Noma'lum narx"}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
               </div>
            </div>
        </>
    )
}


