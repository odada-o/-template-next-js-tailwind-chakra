import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';

export default function ListSwiper() {
  return (
    <div className='pl-5'>
      <Swiper 
        slidesPerView={1.2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        modules={[Navigation, Pagination]} 
        className="mySwiper">
        <SwiperSlide>
          <Image src="/images/pattern/main/media-1.avif" alt="" width={1300} height={1300} className='aspect-[1/1.5]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/pattern/main/media-2.avif" alt="" width={1300} height={1300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/pattern/main/media-3.avif" alt="" width={1300} height={1300} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
