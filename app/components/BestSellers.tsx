import React from "react";
import Ratings from "./Ratings";
import Image from "next/image";

const BestSellers = () => {
  return (
    <section className="py-12 sm:px-12">
      <div className="mx-8">
        <h4 className="font-semibold mx-16">BEST SELLERS</h4>
        <div className="grid grid-cols-4 gap-4 mt-12">
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure>
              <Image src='/images/pad.png' alt="Shoes" quality={100} className="w-28" width={28} height={28} />
            </figure>
            <div className="card-body text-center">
              <div className="">
                <span className="font-semibold">Toyota Corolla </span><br />
                <span className="text-sm">Brake Pad and Discs</span>
                <Ratings />
                <p className="text-sm">$23.56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
