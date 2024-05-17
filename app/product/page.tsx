import React from "react";

const ProductDetailPage = () => {
  return (
    <>
      <div className="px-20 my-4">
        <div className="flex justify-between gap-2 items-center">
          <div>
            <p>Results For: {}</p>
          </div>
          <div className="flex justify-start gap-4 items-center">
            <p>Showing: 1 of 1000 Products</p>
            <button className="btn btn-primary btn-sm">Previous</button>
            <button className="btn btn-accent btn-sm">Next</button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <div>Na here we dey</div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="bg-green-600 text-white p-2">
              <p>Select Year</p>
              <div className="divider w-full mt-0"></div>
              <div className="grid grid-cols-5">
                <p className="mt-0">2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
                <p>2020</p>
              </div>
            </div>
            <div className="bg-green-600 mt-4">
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
