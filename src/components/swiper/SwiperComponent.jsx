import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperImg from '../../../public/swiper-img.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SwiperComponent.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const SwiperComponent = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-text">
                        <p className='swiper-title'>Best Deal Online on smart watches</p>
                        <p className='swiper-intro'>LATEST NIKE SHOES</p>
                        <p className='swiper-discount'>UP to 80% OFF</p>
                    </div>
                    <div className="swiper-img">
                        <img src={swiperImg} alt="swiper-img" className='swiper-img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-text">
                        <p className='swiper-title'>Best Deal Online on smart watches</p>
                        <p className='swiper-intro'>LATEST NIKE SHOES</p>
                        <p className='swiper-discount'>UP to 80% OFF</p>
                    </div>
                    <div className="swiper-img">
                        <img src={swiperImg} alt="swiper-img" className='swiper-img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-text">
                        <p className='swiper-title'>Best Deal Online on smart watches</p>
                        <p className='swiper-intro'>LATEST NIKE SHOES</p>
                        <p className='swiper-discount'>UP to 80% OFF</p>
                    </div>
                    <div className="swiper-img">
                        <img src={swiperImg} alt="swiper-img" className='swiper-img' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperComponent
