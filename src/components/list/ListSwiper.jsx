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

const slidesData = [
    { src: '/images/pattern/main/media-1.avif', alt: 'Media 1' },
    { src: '/images/pattern/main/media-2.avif', alt: 'Media 2' },
    { src: '/images/pattern/main/media-3.avif', alt: 'Media 3' },
    { src: '/images/pattern/main/media-1.avif', alt: 'Media 1' },
    { src: '/images/pattern/main/media-2.avif', alt: 'Media 2' },
    { src: '/images/pattern/main/media-3.avif', alt: 'Media 3' },
  ];

export default function ListSwiper() {
  return (
    <div className='container'>
      <Swiper 
        slidesPerView={1.2}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // md
          768: {
            slidesPerView: 2.4,
          },
          // lg
          1024: {
            slidesPerView: 3,
          },
          // xl
          1280: {
            slidesPerView: 4,
          },
        }}
        navigation={true} 
        modules={[Navigation, Pagination]} 
        className="mySwiper">
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.src} alt={slide.alt} width={1300} height={1300} className='aspect-[1/1.5] object-cover rounded-lg' priority={true} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next, Prev 버튼 */}
      <style jsx global>{`
        /* 기본적으로 숨김 */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        /* lg 이상에서만 표시 */
        @media (min-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
