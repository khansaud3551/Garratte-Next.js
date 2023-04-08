import React from "react";

const AwarenessBanner = () => {
  return (
    <div className="grid">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div
          className="col-span-7 max-w-[645px] space-y-10"
          style={{ lineHeight: "initial" }}
        >
          <h1 className="text-5xl md:text-[70px] font-bold ">
            Learn how to build your OnlyFans Agency!
          </h1>
          <p className="text-[25px]">
            Enroll in Our Comprehensive OnlyFans Management Course which you
            will learn to create a 6 figure agency working from anywhere in the
            world.
          </p>
          <button className="px-5 font-bold py-3 rounded-lg bg-primary">
            Join ManageHer
          </button>
        </div>
        <div className="col-span-5 mt-10 md:mt-0">
          <div className="bg-secondary-light mx-auto md:ml-auto w-full md:w-[350px] h-[500px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AwarenessBanner;
