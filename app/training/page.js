import React from "react";

const page = () => {
  return (
    <div className="my-10 justify-center space-y-16">
      <button className="px-12 mx-auto flex font-bold text-xl py-4 rounded-xl bg-primary">
        Free Training
      </button>
      <p className="text-center text-[30px] max-w-5xl mx-auto">
        How to leave your 9-5 gig, learn to manage models, and earn
        $10k-$30k/month within 60 days as a onlyfans manager. Gain the knowledge
        and tools you need to succeed in this business model from the comfort of
        your own home. Start building your dream career today through Manageher.
      </p>
      <img
        className="h-[500px] w-full object-cover rounded-xl"
        src="assets/video.jpg"
        alt=""
      />
      <button className="px-8 flex mx-auto justify-center font-bold text-xl py-4 w-[500px] rounded-xl bg-primary">
        Learn More
      </button>
    </div>
  );
};

export default page;
