import React from "react";

const Consideration = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-14 md:my-28">
      <div className="md:col-span-7 space-y-4 md:pr-14 py-3">
        <h1 className="text-3xl font-bold">Who is this course for?</h1>
        <p className="text-lg">
          Our comprehensive course covers a wide range of topics, from beginner
          to advanced, so no matter what level you’re at, you’ll be able to find
          lessons that are tailored to your needs. And with the ability to
          progress at your own pace, you can focus on the areas you want to
          improve. So whether you’re just starting out or you’ve been trying for
          a while and want to take your agency to the next level, this course is
          perfect for you!.
        </p>
        <div className="flex gap-3 items-center">
          <img src="/assets/tick.svg" alt="" />
          <p>
            Newcomers looking to learn one of the fastest growing and profitable
            business models out now.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <img src="/assets/tick.svg" alt="" />
          <p>
            Newcomers looking to learn one of the fastest growing and profitable
            business models out now.
          </p>
        </div>
      </div>
      <div className="md:col-span-5 ">
        <img
          className="rounded-xl h-full"
          src="assets/img_content.jpg
    "
          alt=""
        />
      </div>
    </div>
  );
};

export default Consideration;
