import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import sarthak from '../assets/Trainers/sarthak_rohilla.webp'
import abhishek from '../assets/Trainers/abhishek_pathak.webp'
import arshi from '../assets/Trainers/arshi_goyal.webp'
import aryan from '../assets/Trainers/aryan_deb.webp'
import rahil from '../assets/Trainers/rahil_shah.webp'
import shashank from '../assets/Trainers/shashank_shekhar.webp'
import srilaxmi from '../assets/Trainers/srilaxmi_madhu_sudhan.webp'


const trainers = [
    {
      name: "Sarthak Rohilla",
      title: "Product Specialist",
      company: "Ex Cognizant",
      img: sarthak,
    },
    {
        name:"SriLaxmi Madhu Sudhan",
        title: "Assistant Brand Manager",
        company: "Redbus",
        img: srilaxmi
    },
    {
        name:"Shashank Shekhar",
        title: "Growth Marketer",
        company: "Masai",
        img: shashank
    },
    {
      name: "Abhishek Pathak",
      title: "Growth & Digital Experience",
      company: "Ex CRED",
      img: abhishek,
    },
    {
      name: "Ashi Goyal",
      title: "Marketing Manager",
      company: "Ex Rapido",
      img: arshi,
    },
    {
      name: "Rahil Shah",
      title: "Co-founder",
      company: "creator.co",
      img: rahil,
    },
    {
      name: "Aryan Deb",
      title: "Senior Associate - Marketing",
      company: "smallcase",
      img: aryan,
    },
  ];

const Trainers = () => {
  return (
    <div className="bg-[#004D40] md:py-16 py-10 md:px-12 px-4">
      <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-2">
        Meet Your Trainers
      </h2>
      <p className="text-white text-lg text-center mb-10 max-w-xl mx-auto">
        You will be mentored by practitioners who are masters of their trade
      </p>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className="pb-10"
      >
        {trainers.map((trainer, idx) => (
          <SwiperSlide key={idx}>
            <div className=" rounded-b-xl overflow-hidden shadow-md">
              <div className="h-auto ">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#048E6C] text-center -mt-2 pb-6">
                <div className="bg-white inline-block px-3  py-1 rounded-full text-sm font-semibold mb-2">
                  {trainer.company}
                </div>
                <h3 className="text-white text-sm font-bold">{trainer.name}</h3>
                <p className="text-white font-bold text-lg ">{trainer.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 md:mt-12 mt-6 ">
        <button className="prev-btn md:w-16 md:h-16 w-10 h-10 border border-white rounded-full flex items-center justify-center text-white cursor-pointer transition">
          ←
        </button>
        <button className="next-btn md:w-16 md:h-16 w-10 h-10 border border-white rounded-full flex items-center justify-center text-white cursor-pointer transition">
          →
        </button>
      </div>
    </div>
  )
}

export default Trainers