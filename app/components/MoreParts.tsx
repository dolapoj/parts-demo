import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

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

type StyleProperties = {
  [key: string]: string | number;
};

const MoreParts = ({ props, color, text, backgroundImage }: any) => {
  // const style: StyleProperties = {
  //   backgroundColor: color,
  //   color: text,
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundBlendMode: "overlay", // Ensures the color and image blend together
  //   opacity: 0.9, // Adjust the opacity level as needed
  // };
  const style: StyleProperties = {
    backgroundColor: color,
    color: text,
    position: 'relative',
    overflow: 'hidden',
  };

  const overlayStyle: StyleProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.1, // Adjust the opacity of the background image
    pointerEvents: 'none',
  };

  const [ allMakes, setAllMakes ] = useState<Car[]>();

  useEffect(() => {
    const fetchMakes = async (): Promise<void> => {
      const endpoint = "https://freetestapi.com/api/v1/cars";
      try {
        const response: AxiosResponse<Car[]> = await axios.get<Car[]>(endpoint);
        setAllMakes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMakes();
  }, [])

  return (
    <section style={style} className="py-20 text-white">
      <div style={overlayStyle}></div>
      <div className="sm:mx-20">
        <h5 className="text-center font-semibold">{props}</h5>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-5 sm:gap-4 mt-12 justify-around text-center">
          {allMakes?.map(car => (
            <p className="cursor-pointer hover:font-bold">{car.model}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreParts;
