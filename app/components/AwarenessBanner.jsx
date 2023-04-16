import React from "react";
import FAQ from "./FAQ";

const AwarenessBanner = () => {
  return (
    <div className="grid my-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div
          className="md:col-span-7 max-w-[645px] space-y-10 md:ml-[-10px]"
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
          <div className="flex flex-col md:flex-row items-center gap-5">
            <button className="px-8 font-bold text-xl py-4 rounded-xl bg-primary">
              Join ManageHers
            </button>
            <div className="flex ml-4">
              <img
                className="w-[60px] h-[60px]  rounded-full object-cover border border-primary/80"
                src="/assets/btn_img1.png"
                alt=""
              />
              <img
                className="w-[60px] h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
                src="/assets/btn_img2.png"
                alt=""
              />
              <img
                className="w-[60px] h-[60px] ml-[-15px] rounded-full object-cover border border-primary/80"
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
                <p>1,700 people like you have purchased this product!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 mt-10 md:mt-0">
          <div className="bg-secondary-light mx-auto md:ml-auto w-full md:w-[350px] h-[500px]"></div>
        </div>
      </div>

      {/* awareness cards here */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-14 md:my-28">
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
      {/* Consideration */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-14 md:my-28">
        <div className="md:col-span-7 space-y-4 md:pr-14 py-3">
          <h1 className="text-3xl font-bold">Who is this course for?</h1>
          <p className="text-lg">
            Our comprehensive course covers a wide range of topics, from
            beginner to advanced, so no matter what level you’re at, you’ll be
            able to find lessons that are tailored to your needs. And with the
            ability to progress at your own pace, you can focus on the areas you
            want to improve. So whether you’re just starting out or you’ve been
            trying for a while and want to take your agency to the next level,
            this course is perfect for you!.
          </p>
          <div className="flex gap-3 items-center">
            <img src="/assets/tick.svg" alt="" />
            <p>
              Newcomers looking to learn one of the fastest growing and
              profitable business models out now.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/assets/tick.svg" alt="" />
            <p>
              Newcomers looking to learn one of the fastest growing and
              profitable business models out now.
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
      {/* Decision  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-14 md:my-28">
        <div className="md:col-span-8 md:pr-14 py-3 space-y-3 md:self-center">
          <h1 className="text-xl text-primary font-bold">Become a Manager</h1>
          <h1 className="text-3xl font-bold">
            Ready to take your skills to the next level?
          </h1>

          <p className="text-lg">
            So if you're ready to take your OnlyFans Management game to the next
            level, enroll in our management course today. With our guidance and
            expertise, you'll be well on your way to achieving your financial
            and career goals on the platform. Don’t miss out on this amazing
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
      <div className="bg-black w-full lg:w-[730px] mx-auto my-14 md:my-28">
        <FAQ title="Is this course suitable for beginners?">
          <p>
            Yes, our course is suitable for all levels. We have lessons ranging
            from beginner to advanced, so no matter what your current level of
            proficiency is, you'll be able to find lessons that are tailored to
            your needs.
          </p>
        </FAQ>
        <FAQ title="How long does the course take to complete?">
          <p>Content for section 2</p>
        </FAQ>
        <FAQ title="Section 3">
          <p>Content for section 3</p>
        </FAQ>
      </div>
      {/* footer */}
      <img
        src="
      assets/footer.gif"
        className="w-[650px] mx-auto"
        alt=""
      />
      <p className="text-center text-xl mb-5">Copyright @ 2023</p>
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
