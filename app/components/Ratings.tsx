import React from "react";

const Ratings = () => {
  return (
    <>
      <div className="rating flex justify-center">
        <input type="radio" name="rating-1" className="mask mask-star w-4" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star w-4"
        />
        <input type="radio" name="rating-1" className="mask mask-star w-4" />
        <input type="radio" name="rating-1" className="mask mask-star w-4" />
        <input type="radio" name="rating-1" className="mask mask-star w-4" />
      </div>
    </>
  );
};

export default Ratings;
