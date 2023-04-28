import React from "react";
import FAQ from "./FAQ";
import VerticalSlider from "./VerticalSlider";
import Link from "next/link";

const AwarenessBanner = () => {
  return (
    <div className="grid my-5 md:mt-[-20px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div
          className="md:col-span-7 pt-0 md:pt-12 max-w-[645px] space-y-10 md:ml-[-10px]"
          style={{ lineHeight: "initial" }}
        >
          <h1 className="maven-font text-5xl md:text-[70px] font-bold ">
            Learn how to build your OnlyFans Agency!
          </h1>
          <p className="text-[25px] maven-font">
            Enroll in Our Comprehensive OnlyFans Management Course which you
            will learn to create a 6 figure agency working from anywhere in the
            world.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Link href="/training">
              <button className="px-8 maven-font font-bold text-xl py-4 rounded-xl bg-primary">
                Join ManageHer
              </button>
            </Link>
            <div className="flex mt-3 md:mt-0 md:ml-4">
              <img
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]  rounded-full object-cover border border-primary/80"
                src="/assets/btn_img1.png"
                alt=""
              />
              <img
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
                src="/assets/btn_img2.png"
                alt=""
              />
              <img
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
                src="/assets/btn_img3.png"
                alt=""
              />
              <div className="max-w-[200px] ml-3 space-y-3">
                <div className="flex">
                  <img src="assets/fullstar.svg" alt="" />
                  <img src="assets/fullstar.svg" alt="" />
                  <img src="assets/fullstar.svg" alt="" />
                  <img src="assets/fullstar.svg" alt="" />
                  <img src="assets/halfstar.svg" alt="" />
                </div>
                <p className="inter-font">
                  87 people like you have purchased this product!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 mt-10 md:mt-0">
          <div className=" md:ml-auto w-full md:w-[380px] h-[500px]">
            <VerticalSlider />
          </div>
        </div>
      </div>

      {/* awareness cards here */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 my-14 md:my-28">
        <AwarenessCard
          title="Expert Instruction"
          description="This course is taught by a 3 year experienced Onlyfans Manager which will provide tips, tricks and techniques. With bonus incentives to jumpstart your agency!"
          icon="/assets/tick.svg"
        />
        <AwarenessCard
          title="Expert Instruction"
          description="This course is taught by a 3 year experienced Onlyfans Manager which will provide tips, tricks and techniques. With bonus incentives to jumpstart your agency!"
          icon="/assets/tick.svg"
        />
        <AwarenessCard
          title="Expert Instruction"
          description="This course is taught by a 3 year experienced Onlyfans Manager which will provide tips, tricks and techniques. With bonus incentives to jumpstart your agency!"
          icon="/assets/tick.svg"
        />
      </div>
    </div>
  );
};

//Card component
const AwarenessCard = ({ title, description, icon }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 border-primary border rounded-xl">
      <div className="p-8 space-y-3">
        <img className="mb-5" src="/assets/tick.svg" alt="" />
        <div>
          <h3 className="text-2xl font-bold">Expert </h3>
          <h3 className="text-2xl font-bold">Instruction</h3>
        </div>
        <p className="text-lg ">
          This course is taught by a 3 year experienced Onlyfans Manager which
          will provide tips, tricks and techniques. With bonus incentives to
          jumpstart your agency!
        </p>
      </div>
    </div>
  );
};

export default AwarenessBanner;

{
  /* <div key={review.id} className="p-4 bg-black shadow-md rounded h-[350px] ">
  <div className="flex gap-6">
    <img
      className="w-[50px] min-w-[50px] h-[50px]  rounded-full object-cover border border-primary/80"
      src={review.img}
      alt=""
    />
    <div>
      <h2 className="text-lg font-semibold">{review.name}</h2>

      <p className="mt-2">{review.review}</p>
    </div>
  </div>
</div>; */
}
