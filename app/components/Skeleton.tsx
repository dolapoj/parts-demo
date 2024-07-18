import React from "react";

const Skeleton = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-8 my-10 leading-relaxed">
      <div className="skeleton flex flex-col sm:flex-row justify-between gap-2 items-center mb-8">
        <div className="skeleton">
          <p className="skeleton pl-4">
            <span className="skeleton font-semibold"></span>
          </p>
        </div>
        <div className="skeleton flex justify-start gap-4 items-center">
          <p className="skeleton"></p>
          <button className="skeleton btn  btn-sm"></button>
          <button className="skeleton btn  btn-sm"></button>
        </div>
      </div>

      <section className=" flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className={`skeleton w-full md:w-72 flex-shrink-0 p-4 md:block`}>
          {/* Content for the fixed aside */}
          <div className="skeleton  p-4 text-white">
            <span className="skeleton"></span>
            <div className="skeleton  mt-0 "></div>
            <div className="skeleton grid grid-cols-5 gap-2 relative mt-0 text-xs">
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
              <p className="skeleton"></p>
            </div>
          </div>
          <div className="skeleton p-4 mt-4 ">
            <span className="skeleton "></span>
            <div className="skeleton mt-0"></div>
            <div className="skeleton grid grid-cols-5 gap-2 relative mt-0 text-xs">
              <p className="skeleton"></p>
            </div>
          </div>
          <div className="skeleton  p-4 mt-4 ">
            <span className="skeleton"></span>
            <div className="skeleton  mt-0 "></div>
            <div className="skeleton text-xs">
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
            </div>
          </div>
          <div className="skeleton  p-4 mt-4 ">
            <span className="skeleton "></span>
            <div className="skeleton  mt-0 "></div>
            <div className="skeleton text-xs">
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
            </div>
          </div>
          <div className="skeleton  p-4 mt-4">
            <span className="skeleton "></span>
            <div className="skeleton  mt-0 "></div>
            <div className="skeleton text-xs">
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
              <p className="skeleton mb-2"></p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="skeleton ml-24 flex-1 p-4">
          {/* Content for the main section */}
          <div className="skeleton flex flex-col justify-center mx-4 mb-8 md:mx-12">
            <div className=" flex flex-col sm:flex-row justify-between px-4 py-8 sm:px-12">
              <div className=" flex justify-center sm:block">
                <img className="skeleton" />

                <p className="  text-xs"></p>
              </div>
              <div className="skeleton flex-1">
                <div className=" flex flex-col sm:flex-row justify-evenly leading-relaxed">
                  <div className=" max-w-80">
                    <h5 className=" font-bold"></h5>
                    <h6 className=" font-bold"></h6>
                    <h6 className="skeleton text-sm mt-1">
                      <strong className=""></strong>{" "}
                    </h6>
                    <h6 className="skeleton text-sm mt-1">
                      <strong className="skeleton"></strong>{" "}
                    </h6>
                    <h6 className="skeleton text-sm mt-1">
                      <span className="skeleton font-semibold"></span>
                    </h6>
                    <p className="skeleton text-xs pt-1"></p>
                  </div>
                  <div className="skeleton p-4 rounded-xl mt-4 sm:mt-0">
                    <h6 className="skeleton text-sm">
                      <span className="skeleton"></span>
                    </h6>
                    <div className="skeleton mt-0 "></div>
                    <div className="skeleton flex justify-between gap-2 items-center mb-2">
                      <h6 className="skeleton"></h6>
                      {/* <input className="w-12 h-4" /> */}
                      <h4 className="skeleton"></h4>
                    </div>
                    <select className="skeleton ">
                      <option className="skeleton"></option>
                      <option>2019</option>
                      <option value="Fleet Manager">2020</option>
                    </select>
                    <button className="skeleton text-sm px-4 py-2 font-semibold w-full  mt-2"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="skeleton mb-4">
              <div className="skeleton flex flex-col justify-center mx-4 md:mx-12">
                <div className="skeleton p-2 rounded-t-lg text-sm font-semibold"></div>
                <div className="skeleton text-xs p-2 font-bold"></div>
                <div className="skeleton rounded-b-lg  text-xs p-2"></div>
              </div>
            </div>
            <hr className="skeleton" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skeleton;
