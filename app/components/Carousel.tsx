import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Filter from "../../images/filter.png";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="w-3/4 m-auto pb-20">
      <div className="mt-20">
        <Slider {...settings}>
          <div className="   text-white rounded-xl">
            <div className="card bg-white flex flex-col justify-between gap-14 w-52 md:w-60 2xl:w-72 border-8 border-white">
              <figure className="mt-10">
                <Image src={Filter} alt="Shoes" className="w-40" />
              </figure>
              <div className="card-body bg-black rounded-xl">
                <div className="">
                  <p className="font-semibold">Product Name </p>
                  <p className="text-sm">Product Benefits</p>
                  <p className="text-sm">Product Specs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="   text-white rounded-xl">
            <div className="card bg-white flex flex-col justify-between gap-14 w-56 md:w-60 2xl:w-72 border-8 border-white">
              <figure className="mt-10">
                <Image src={Filter} alt="Shoes" className="w-40" />
              </figure>
              <div className="card-body bg-black rounded-xl">
                <div className="">
                  <p className="font-semibold">Product Name </p>
                  <p className="text-sm">Product Benefits</p>
                  <p className="text-sm">Product Specs</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
