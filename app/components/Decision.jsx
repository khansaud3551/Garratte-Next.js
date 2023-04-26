import React from "react";
import Link from "next/link";

const Decision = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 my-14 md:my-28">
      <div className="py-3 space-y-3 md:col-span-8 md:pr-14 md:self-center">
        <h1 className="text-2xl font-semibold text-primary">
          Become a Manager
        </h1>
        <h1 className="text-3xl font-semibold">
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
        <div className="card_shadow mx-auto md:ml-auto rounded-xl max-w-[380px] space-y-6 border-primary border-t-[3px]">
          <div className="flex flex-col items-center pt-10 mx-auto space-y-10">
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
              <h3 className="text-base line-through text-primary">$1500</h3>
              <h1 className="text-5xl font-bold">$999</h1>
            </div>
          </div>
          <div className="px-2">
            <Link href="https://sso.teachable.com/secure/1564605/checkout/4691443/manageher">
              <button className="w-full p-10 text-lg font-semibold text-white rounded-t-none bg-primary rounded-xl">
                Enroll now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decision;
