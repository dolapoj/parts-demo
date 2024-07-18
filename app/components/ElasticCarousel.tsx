import React, { Suspense } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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

const ElasticCarousel: React.FC<PartsDisplayProps> = ({ parts }) => {
  const settings = {
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
      <Suspense fallback={<p>Loading...</p>}>
        <div className="mt-20">
          <Slider {...settings}>
            {parts?.map((product, index) => (
              <div key={index} className="p-2">
                <div className="card bg-white flex flex-col justify-between gap-4 sm:w-52 md:w-56 2xl:w-72 border-2 border-gray-200 rounded-xl shadow-lg h-80">
                  <figure className="relative w-full h-40">
                    <Image
                      src={product?.image}
                      alt={`${product.make} ${product.model}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </figure>
                  <div className="card-body bg-gray-100 rounded-b-xl p-4 flex flex-col items-start">
                    <p className="font-semibold text-gray-800">{product.make}</p>
                    <p className="text-sm text-gray-600">{product.model}</p>
                    <p className="text-sm text-gray-600">{product.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Suspense>
    </div>
  );
};

export default ElasticCarousel;
