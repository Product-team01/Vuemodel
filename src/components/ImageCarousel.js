// src/components/ImageCarousel.js

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './ImageCarousel.css';

SwiperCore.use([Navigation, Pagination]);

const ImageCarousel = () => {
  const images = [
    "https://d1r1e7xjkfj7nz.cloudfront.net/3D_input_guide15.png",
    "https://d1r1e7xjkfj7nz.cloudfront.net/3D_input_guide16.png",
    "https://d1r1e7xjkfj7nz.cloudfront.net/3D_input_guide17.png",
    "https://d1r1e7xjkfj7nz.cloudfront.net/3D_input_guide18.png",
    "https://d1r1e7xjkfj7nz.cloudfront.net/3D_input_guide19.png",
    "https://d1r1e7xjkfj7nz.cloudfront.net/3D_input_guide20.png"
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`3D input guide ${index + 1}`} style={{ maxWidth: '100%' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
