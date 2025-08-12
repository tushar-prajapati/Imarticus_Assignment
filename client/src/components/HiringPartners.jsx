import React from 'react'
import one from '../assets/HiringPartners/1.webp';
import two from '../assets/HiringPartners/2.webp';
import three from '../assets/HiringPartners/3.webp';
import four from '../assets/HiringPartners/4.webp';
import five from '../assets/HiringPartners/5.webp';
import six from '../assets/HiringPartners/6.webp';
import seven from '../assets/HiringPartners/7.webp';
import eight from '../assets/HiringPartners/8.webp';
import nine from '../assets/HiringPartners/9.webp';
import ten from '../assets/HiringPartners/10.webp';
import eleven from '../assets/HiringPartners/11.webp';
import twelve from '../assets/HiringPartners/12.webp';
import thirteen from '../assets/HiringPartners/13.webp';
import fourteen from '../assets/HiringPartners/14.webp';
import fifteen from '../assets/HiringPartners/15.webp';
import sixteen from '../assets/HiringPartners/16.webp';
import seventeen from '../assets/HiringPartners/17.webp';
import eighteen from '../assets/HiringPartners/18.webp';
import nineteen from '../assets/HiringPartners/19.webp';
import twenty from '../assets/HiringPartners/20.webp';
import twentyone from '../assets/HiringPartners/21.webp';
import twentytwo from '../assets/HiringPartners/22.webp';
import twentythree from '../assets/HiringPartners/23.webp';
import twentyfour from '../assets/HiringPartners/24.webp';

const HiringPartners = () => {
    const partners = [
        one, two, three, four, five, six,
        seven, eight, nine, ten, eleven, twelve,
        thirteen, fourteen, fifteen, sixteen, seventeen, eighteen,
        nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour
      ];
  return (
    <div className="py-16 bg-gray-200 flex flex-col items-center">
    <div className="py-4 flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-700 md:text-5xl">1000+ Hiring Parners</h1>
    </div>
    <div className="mt-8">
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
    {partners.map((src, i) => (
      <div
        key={i}
        className="flex justify-center items-center bg-white  rounded-lg shadow-sm hover:shadow-md transition"
      >
        <img
          src={src}
          alt={`Partner ${i + 1}`}
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div>
    ))}
  </div>
    </div>

  </div>
  )
}

export default HiringPartners