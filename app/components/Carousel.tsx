import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import Filter from "../../images/filter.png";
import axios, { AxiosResponse } from "axios";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [allProduct, setAllProduct] = useState<Car[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(allProduct)

  useEffect(() => {
    const fetchCars = async (count = 6): Promise<void> => {
      const endpoint = "https://freetestapi.com/api/v1/cars";
      try {
        let selectedCars: Car[] = [];
        const response: AxiosResponse<Car[]> = await axios.get<Car[]>(endpoint);
        selectedCars = response.data;
        // console.log(selectedCars)
        count = Math.min(count, selectedCars.length);
        const shuffledCars = selectedCars.sort(() => Math.random() - 0.5);
        const randomSubset = shuffledCars.slice(0, count);
        setAllProduct(randomSubset);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="w-3/4 m-auto pb-20">
      {isLoaded && (
        <div className="mt-20">
          <Slider {...settings}>
            {allProduct?.map((product) => (
              <div className="   text-white rounded-xl">
                <div className="card bg-white flex flex-col justify-between gap-14 w-52 md:w-60 2xl:w-72 border-8 border-white">
                  <figure className="mt-10">
                    <Image src={product.image as string} alt="Shoes" className="w-40" width={40} height={40} />
                  </figure>
                  <div className="card-body bg-black rounded-xl">
                    <div className="">
                      <p className="font-semibold">{product.make} </p>
                      <p className="text-sm">
                        {product.model}
                      </p>
                      <p className="text-sm">{product.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Carousel;
