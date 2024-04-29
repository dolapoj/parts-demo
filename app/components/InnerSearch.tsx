import React from "react";

const InnerSearch = () => {
  return (
    <section className="bg-cyan-700 mx-12 py-6">
      <h5 className="font-semibold text-white pt-6 px-6 sm:text-2xl sm:px-12">
        Search from over 10 Million Auto Parts
      </h5>
      <form>
        <div className="mt-4 flex justify-start gap-4 px-6 sm:px-12">
          <select
            className="block rounded-md"
            //     {...register("role")}
            //     value={selectedValue}
            //     onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              Select Make
            </option>
            <option value="Individual">Toyota</option>
            <option value="Fleet Manager">Lexus</option>
          </select>
          <select
            className="block rounded-md"
            //     {...register("role")}
            //     value={selectedValue}
            //     onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              Select Model
            </option>
            <option value="Individual">Avensis</option>
            <option value="Fleet Manager">Corolla</option>
          </select>
          <select
            className="block rounded-md"
            //     {...register("role")}
            //     value={selectedValue}
            //     onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              Select Year
            </option>
            <option value="Individual">2019</option>
            <option value="Fleet Manager">2020</option>
          </select>
          <button className="btn bg-green-500 text-white px-3 py-0 border-none font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            SELECT YOUR VEHICLE
          </button>
        </div>
      </form>
      <p className="italic text-white text-sm pt-6 px-6  sm:px-12">Filter your results by entering your Make, Model and Year to ensure you find the parts that fit your vehicle</p>
    </section>
  );
};

export default InnerSearch;
