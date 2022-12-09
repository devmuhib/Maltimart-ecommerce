import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import "swiper/css/bundle";
import 'swiper/css/autoplay';
import Card from './Card';
import React from 'react';

function Slider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                freeMode={true}
                // pagination={{
                //     clickable: true,
                //     // el: '.swiper-pagination'
                // }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {data?.map((item, index) => (
                    <SwiperSlide><Card item={item} key={index}/></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;