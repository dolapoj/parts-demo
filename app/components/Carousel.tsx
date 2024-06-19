import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";

interface Car {
  client_id: number;
  make: string;
  year: number;
  model: string;
  image: string;
}

interface PartsDisplayProps {
  parts: Car[];
}

const Carousel: React.FC<PartsDisplayProps> = ({ parts }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-3/4 m-auto pb-20">
      <div className="mt-20">
        <Slider {...settings}>
          {parts?.map((product, index) => (
            <div key={index} className="text-white rounded-xl">
              <div className="card bg-white flex flex-col justify-between gap-14 sm:w-52 md:w-56 2xl:w-72 border-8 h-80 border-white">
                <figure className="relative mt-10">
                  <Image
                    src={product?.image as any}
                    alt="Parts"
                    className="relative min-h-20 min-w-24"
                    width={40}
                    height={40}
                  />
                </figure>
                <div className="card-body bg-black rounded-xl max-h-28 p-4">
                    <p className="font-semibold">{product.make} </p>
                    <p className="text-sm">{product.model}</p>
                    <p className="text-sm">{product.year}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
