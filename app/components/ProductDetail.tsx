"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Ratings from "./Ratings";
import { usePathname, useSearchParams } from "next/navigation";

interface SearchResults {
  [key: string]: any;
}

const useProductData = (productId: string | undefined) => {
  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null
  );

  useEffect(() => {
    if (productId) {
      const storedData = localStorage.getItem("searchProduct");
      if (storedData) {
        setSearchResults(JSON.parse(storedData));
      }
    }
  }, [productId]);

  return searchResults;
};

const ProductDetail = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const productId = searchParams.get("productId");
  const searchResults = useProductData(productId || undefined);
  console.log(searchResults?.results.parts);

  //Side effect to monitor and log the URL
  useEffect(() => {
    if (productId) {
      console.log(`URL: ${pathname}?productId=${productId}`);
    }
  }, [pathname, productId]);

  return (
    <div className="px-12 my-10 leading-relaxed">
      <div className="flex justify-between gap-2 items-center mb-8">
        <div>
          <p className="pl-4">
            Results For:{" "}
            <span className="text-blue-700 font-semibold">
              {searchResults?.facets.makes[0].name}
            </span>
          </p>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <p>Showing: 1 of 10 Pages</p>
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
          {
            searchResults?.results.parts.map((part: any) => {
              return(
                <div className="bg-white flex flex-col justify-center mx-12 mb-8">
                <div className="flex flex-wrap justify-between px-12 py-8">
                  <div className="">
                    <Image
                      src={part.image_url as string}
                      alt="type"
                      width={140}
                      height={140}
                    />
                    <Ratings />
                    <p className="text-blue-500 text-xs">(100 Reviews)</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-evenly leading-relaxed">
                      <div className="max-w-80">
                        <h5 className="text-green-900 font-bold">
                          {part?.part_label}
                        </h5>
                        <h6 className="text-blue-800 font-bold">
                          {part?.mfg_name}
                        </h6>
                        <h6 className="text-sm mt-1">
                          <strong>Part Number:</strong> {part?.part_number}{" "}
                        </h6>
                        <h6 className="text-sm mt-1">
                          <strong>Brand:</strong> {part?.mfg_code}{" "}
                        </h6>
                        <h6 className="text-sm mt-1">
                          <span className="font-semibold">Notes:</span> Detailed Note{" "}
                        </h6>
                        <p className="text-xs pt-1">
                          Ideal replacement - this third brake light assembly was
                          specifically designed to look and function like the
                          original light on specific vehicles
                        </p>
                      </div>
                      <div className="bg-green-700 p-4 text-white rounded-xl">
                        <h6 className="text-sm">{part?.pricing.sellprice} {part?.pricing.currency}</h6>
                        <div className="divider mt-0 divider-warning"></div>
                        <div className="flex justify-between gap-2 items-center mb-2">
                          <h6>Quantity</h6>
                          <input className="w-12 h-4" />
                        </div>
                        <select className="block rounded-md">
                          <option>Select Year</option>
                          <option value="Individual">2019</option>
                          <option value="Fleet Manager">2020</option>
                        </select>
                        <button className="bg-yellow-500 text-black px-4 font-semibold w-full rounded-md mt-2">
                          {" "}
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-col justify-center mx-12">
                    <div className="bg-green-700 text-white p-2 rounded-t-lg text-sm font-semibold">
                      This Part Fits:
                    </div>
                    <div className="border-solid border-2 border-indigo-4200 text-xs p-2 font-bold">
                      Vehicle
                    </div>
                    <div className="rounded-b-lg border-solid border-2 border-indigo-4200 text-xs p-2">
                      {searchResults?.facets.engines[0].name}
                    </div>
                  </div>
                </div>
                <hr className="text-green-900" />
              </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;