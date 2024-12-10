import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NGOCard from './NGOCard';
import VetCard from './VetCard';

const Carousel = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{props.isNGO==true? <NGOCard/>: <VetCard/>}</SwiperSlide>
      <SwiperSlide>{props.isNGO==true? <NGOCard/>: <VetCard/>}</SwiperSlide>
      <SwiperSlide>{props.isNGO==true? <NGOCard/>: <VetCard/>}</SwiperSlide>
      <SwiperSlide>{props.isNGO==true? <NGOCard/>: <VetCard/>}</SwiperSlide>
      ...
    </Swiper>
  )
}

export default Carousel