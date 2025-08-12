import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import one from '../assets/Learners/1.webp'
import two from '../assets/Learners/2.webp'
import three from '../assets/Learners/3.webp'
import four from '../assets/Learners/4.webp'
import five from '../assets/Learners/5.webp'
import six from '../assets/Learners/6.webp'



const portfolios = [
  { img: one },
  { img: two },
  { img: three },
  { img: four },
  { img: five },
  { img: six },
  
];

const Learners = () => {
  return (
    <div className="bg-white md:py-16 py-10 md:px-12 px-4">
    <h2 className="text-[#263238] text-2xl md:text-4xl font-bold text-center mb-2">
      Portfolio of Our Learners
    </h2>
    <p className="text-[#263238] text-lg font-semibold text-center mb-10 max-w-3xl mx-auto">
      Our mentees work on industry relevant portfolio projects that gets them hired
    </p>

    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: ".portfolio-prev",
        nextEl: ".portfolio-next",
      }}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1.2 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-10"
    >
      {portfolios.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={item.img}
              alt={`Portfolio ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="flex justify-center gap-4 md:mt-12 mt-6">
      <button className="portfolio-prev md:w-16 md:h-16 w-10 h-10 border border-[#004D40] rounded-full flex items-center justify-center text-[#004D40] cursor-pointer transition ">
        ←
      </button>
      <button className="portfolio-next md:w-16 md:h-16 w-10 h-10 border border-[#004D40] rounded-full flex items-center justify-center text-[#004D40] cursor-pointer transition ">
        →
      </button>
    </div>
  </div>
  )
}

export default Learners