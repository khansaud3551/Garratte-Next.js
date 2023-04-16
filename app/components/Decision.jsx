import React from "react";

const Decision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-14 md:my-28">
      <div className="md:col-span-8 md:pr-14 py-3 space-y-3 md:self-center">
        <h1 className="text-xl text-primary font-bold">Become a Manager</h1>
        <h1 className="text-3xl font-bold">
          Ready to take your skills to the next level?
        </h1>

        <p className="text-lg">
          So if you're ready to take your OnlyFans Management game to the next
          level, enroll in our management course today. With our guidance and
          expertise, you'll be well on your way to achieving your financial and
          career goals on the platform. Don’t miss out on this amazing
          opportunity to improve your skills at a discounted rate. Sign up now
          and start your journey!
        </p>
      </div>
      <div className="md:col-span-4 ">
        <div className="mx-auto md:ml-auto rounded-xl max-w-[380px] space-y-6 border-primary border-t-[3px]">
          <div className="mx-auto flex flex-col items-center space-y-10 pt-10">
            <h1 className="text-3xl font-medium">ONE PAYMENT ONLY!</h1>

            <div className="space-y-3 text-xl">
              <div className="flex gap-3">
                <img src="/assets/tick.svg" alt="" />
                <p className="text-lg">Support</p>
              </div>
              <div className="flex gap-3">
                <img src="/assets/tick.svg" alt="" />
                <p className="text-lg">Updates</p>
              </div>
              <div className="flex gap-3">
                <img src="/assets/tick.svg" alt="" />
                <p className="text-lg">Lifetime access</p>
              </div>
              <div className="flex gap-3">
                <img src="/assets/tick.svg" alt="" />
                <p className="text-lg">Expert instruction</p>
              </div>
              <div className="flex gap-3">
                <img src="/assets/tick.svg" alt="" />
                <p className="text-lg">Interactive exercises</p>
              </div>
            </div>

            <div className="space-y-1 ">
              <h3 className="line-through text-primary text-base">$1500</h3>
              <h1 className="text-5xl font-bold">$999</h1>
            </div>
          </div>

          <button className="bg-primary p-10 w-full text-white rounded-xl rounded-t-none font-semibold text-lg">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Decision;
