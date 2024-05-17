import Image from "next/image";
import React from "react";
import Ratings from "../components/Ratings";

const ProductDetailPage = () => {
  return (
    <>
      <div className="px-12 my-20 bg-emerald-100 leading-relaxed">
        <div className="flex justify-between gap-2 items-center mb-8">
          <div>
            <p className="pl-4">Results For: {}</p>
          </div>
          <div className="flex justify-start gap-4 items-center">
            <p>Showing: 1 of 1000 Products</p>
            <button className="btn btn-primary btn-sm">Previous</button>
            <button className="btn btn-accent btn-sm">Next</button>
          </div>
        </div>

        {/* SIDEBAR */}
        <section className="flex">
          {/* Fixed Aside */}
          <aside className="w-72 flex-shrink-0 p-4">
            {/* Content for the fixed aside */}
            <div className="bg-blue-800 p-4 text-white">
              <span className="text-yellow">Select Year</span>
              <div className="divider mt-0 divider-warning"></div>
              <div className="grid grid-cols-5 gap-2 relative mt-0 text-xs">
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
              </div>
            </div>
            <div className="bg-blue-800 p-4 mt-4 text-white">
              <span className="text-yellow">Select Make</span>
              <div className="divider mt-0 divider-warning"></div>
              <div className="grid grid-cols-5 gap-2 relative mt-0 text-xs">
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
                <p>Acura</p>
              </div>
            </div>
            <div className="bg-blue-800 p-4 mt-4 text-white">
              <span className="text-yellow">Select Part</span>
              <div className="divider mt-0 divider-warning"></div>
              <div className="text-xs">
                <p className="mb-2">Brake Pad Set</p>
                <p className="mb-2">Brake Pad Set</p>
                <p className="mb-2">Brake Pad Set</p>
                <p className="mb-2">Brake Pad Set</p>
                <p className="mb-2">Brake Pad Set</p>
              </div>
            </div>
            <div className="bg-blue-800 p-4 mt-4 text-white">
              <span className="text-yellow">Select Category</span>
              <div className="divider mt-0 divider-warning"></div>
              <div className="text-xs">
                <p className="mb-2">Body Electrical</p>
                <p className="mb-2">Body Electrical</p>
                <p className="mb-2">Body Electrical</p>
                <p className="mb-2">Body Electrical</p>
                <p className="mb-2">Body Electrical</p>
              </div>
            </div>
            <div className="bg-blue-800 p-4 mt-4 text-white">
              <span className="text-yellow">Select Brand</span>
              <div className="divider mt-0 divider-warning"></div>
              <div className="text-xs">
                <p className="mb-2">Dorman</p>
                <p className="mb-2">Dorman</p>
                <p className="mb-2">Dorman</p>
                <p className="mb-2">Dorman</p>
                <p className="mb-2">Dorman</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-4">
            {/* Content for the main section */}
            <div className="bg-white flex flex-col justify-center mx-12">
              <div className="flex flex-wrap justify-between px-12 py-8">
                <div className="">
                  <Image
                    src="/images/pad.png"
                    alt="filter type"
                    width={140}
                    height={140}
                  />
                  <Ratings />
                  <p className="text-blue-500 text-xs">(100 Reviews)</p>
                </div>
                <div className="flex-1">
                  <div className="flex justify-evenly leading-relaxed">
                    <div className="max-w-80">
                      <h5 className="text-green-900 font-bold">2001-2006 Toyota Camry</h5>
                      <h6 className="text-blue-800 font-bold">Product Detailed Name Brand Name & Number</h6>
                      <h6 className="text-sm mt-1"><strong>Part Number:</strong> 923-247 </h6>
                      <h6 className="text-sm mt-1"><strong>Brand:</strong> Dorman </h6>
                      <h6 className="text-sm mt-1"><strong>Notes:</strong> Detailed Note </h6>
                      <p className="text-xs pt-1">Ideal replacement - this third brake light assembly was specifically designed to look and function like the original light on specific vehicles</p>
                    </div>
                    <div>Wagwan</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center mx-12">
                  <div className="bg-green-700 text-white p-2 rounded-t-lg text-sm font-semibold">
                    This Part Fits:
                  </div>
                  <div className="border-solid border-2 border-indigo-4200 text-xs p-2 font-bold">
                    Vehicle
                  </div>
                  <div className="rounded-b-lg border-solid border-2 border-indigo-4200 text-xs p-2">
                    2004-2008 Ford F150
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetailPage;
