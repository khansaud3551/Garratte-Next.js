import React from "react";
import FAQ from "./FAQ";
import VerticalSlider from "./VerticalSlider";
import Link from "next/link";

const AwarenessBanner = () => {
  return (
    <div className="grid my-5 md:mt-[-20px]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
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
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <Link href="/training">
              <button className="px-8 py-4 text-xl font-bold maven-font rounded-xl bg-primary">
                Join ManageHer
              </button>
            </Link>
            <div className="flex mt-3 md:mt-0 md:ml-4">
              <img
                className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] md:w-[60px] md:h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
                src="/assets/btn_img1.png"
                alt=""
              />
              <img
                className="w-[50px] min-w-[50px] min-h-[50px] h-[50px] md:w-[60px] md:h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
                src="/assets/btn_img2.png"
                alt=""
              />
              <img
                className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] md:w-[60px] md:h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
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
        <div className="mt-10 md:col-span-5 md:mt-0">
          <div className=" md:ml-auto w-full md:w-[380px] h-[500px]">
            <VerticalSlider />
          </div>
        </div>
      </div>

      {/* awareness cards here */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 my-14 md:my-28">
        <AwarenessCard
          title="Comprehensive Knowledge and Strategy"
          description="Our course covers all aspects of starting and managing a successful OnlyFans agency. Students learn to identify and recruit talent, create an online presence, and develop effective outreach strategies. We combine theoretical knowledge with real-world case studies for a well-rounded education."
          icon="/assets/tick.svg"
        />
        <AwarenessCard
          title="Personalized Mentorship and Support"
          description="We offer one-on-one mentorship from experienced professionals, providing valuable feedback and insights to help students succeed. Our online community through discord fosters networking, collaboration, and ongoing learning among students and alumni."
          icon="/assets/tick.svg"
        />
        <AwarenessCard
          title="Hands-on Experience and Skill Development"
          description="Our course emphasizes hands-on experience through practical assignments, ensuring students understand the theory and have the skills to start their own OnlyFans agency. Students create a complete agency blueprint, including a business plan, marketing strategy, and talent management system"
          icon="/assets/tick.svg"
        />
      </div>
    </div>
  );
};

//Card component
const AwarenessCard = ({ title, description, icon }) => {
  return (
    <div className="col-span-12 border md:col-span-6 lg:col-span-4 border-primary rounded-xl">
      <div className="p-8 space-y-3">
        <img className="mb-5" src={icon} alt="" />
        <div>
          {/* <h3 className="text-2xl font-bold">Expert </h3>
          <h3 className="text-2xl font-bold">Instruction</h3> */}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-lg ">
          {description}
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
