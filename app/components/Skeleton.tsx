import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-row justify-center items-center text-2xl">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
};

export default Skeleton;
