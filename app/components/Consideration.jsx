import React from "react";

const Consideration = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 my-14 md:my-28">
      <div className="py-3 space-y-4 text-lg md:col-span-7 md:pr-14">
        <h1 className="text-3xl font-semibold">Who is this course for?</h1>
        <p className="text-lg">
          Our comprehensive course covers a wide range of topics, from beginner
          to advanced, so no matter what level you’re at, you’ll be able to find
          lessons that are tailored to your needs. And with the ability to
          progress at your own pace, you can focus on the areas you want to
          improve. So whether you’re just starting out or you’ve been trying for
          a while and want to take your agency to the next level, this course is
          perfect for you!.
        </p>
        <div className="flex items-center gap-3">
          <img src="/assets/tick.svg" alt="" />
          <p>
            Newcomers looking to learn one of the fastest growing and profitable
            business models out now.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src="/assets/tick.svg" alt="" />
          <p>
            Managers that need the extra push and knowledge to take their agency
            to the next level.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src="/assets/tick.svg" alt="" />
          <p>
            Managers that are experienced but still feel like they are missing
            the pieces of the puzzle to scale their agency at a consistent rate.
          </p>
        </div>
      </div>
      <div className="h-full md:col-span-5">
        <img
          className="object-cover mx-auto w-full rounded-xl h-[400px] md:h-[500px]"
          src="assets/consideration.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Consideration;
