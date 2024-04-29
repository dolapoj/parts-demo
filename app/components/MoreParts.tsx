import React from "react";

type StyleProperties = {
  [key: string]: string | number;
};

const MoreParts = ({ props, color, text }: any) => {
  const style: StyleProperties = {
    backgroundColor: color,
    color: text
  };

  return (
    <section style={style} className="py-12 text-white bg-blue-950">
      <div className="mx-20">
        <h5 className="text-center font-semibold">{props}</h5>
        <div className="grid grid-cols-4 gap-4 mt-12 justify-around text-center">
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer">Product Name</p>
          <p className="cursor-pointer text-green-500 underline">Show More</p>
        </div>
      </div>
    </section>
  );
};

export default MoreParts;
