"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import FromPopup from "../components/FromPopup";

const reviews = [
  {
    name: "Brian",
    review:
      "I recently took ManageHer and I can honestly say it was a game changer. Before the course, I was struggling to grow my audience and increase my earnings on the platform. But after implementing the strategies and tips I learned from the course, I saw a significant increase in my models subscribers and income.",
  },
  {
    name: "Todd",
    review:
      "I had the pleasure of completing the ManageHer program and am thrilled with the results. Through the program, I gained practical skills and strategies that have helped me become a more effective manager and leader. I highly recommend this program to anyone looking to improve their management skills and achieve greater success in their career.",
  },
  {
    name: "Ethan",
    review:
      "After finishing the  ManageHer program, my business generated 10k+ months. The program taught me how to manage my team and my models better. To anyone who wants to improve their onlyfans management skills I would 100% buy this course.",
  },
];

const punchlineText = `
How to leave your 9-5 gig, learn to manage models, and earn
$10k-$30k/month within 60 days as a onlyfans manager. Gain the knowledge
and tools you need to succeed in this business model from the comfort of
your own home. Start building your dream career today through Manageher.
`;

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  console.log("isModalOpen" + isModalOpen);

  return (
    <div className="justify-center my-10 space-y-16">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex px-12 py-4 mx-auto text-xl font-bold rounded-xl bg-primary"
      >
        Free Training
      </button>
      <p className="text-center maven-font text-[30px] max-w-5xl mx-auto">
        {punchlineText}
      </p>
      {/* <img
        className="h-[250px] md:h-[500px] w-full object-cover rounded-xl"
        src="assets/video.jpg"
        alt=""
      /> */}

      <iframe
        src="https://drive.google.com/file/d/1wO7yj07BXgkRv6HPO6XNQ4xUD0i2bee1/preview"
        className="w-full h-[300px] md:h-[700px] rounded-2xl"
        allow="autoplay"
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-8 flex mx-auto justify-center font-bold text-xl py-4 w-[80%] md:w-[500px] rounded-xl bg-primary"
      >
        Learn More
      </button>

      <div className="border_divider w-[300px] md:w-[520px] h-[1px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 my-14 md:my-28">
        {reviews.map((client_review, index) => (
          <ClientReview
            img={`assets/client_${index + 1}.png`}
            name={client_review.name}
            review={client_review.review}
          />
        ))}
      </div>
      <FromPopup
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </div>
  );
};

export default page;

const ClientReview = ({ img, review, name }) => {
  return (
    <>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="flex flex-col h-full px-8 py-2 space-y-3 md:p-8">
          <div className="flex gap-2 mb-2">
            <img src="assets/icon-star.svg" alt="" />
            <img src="assets/icon-star.svg" alt="" />
            <img src="assets/icon-star.svg" alt="" />
            <img src="assets/icon-star.svg" alt="" />
            <img src="assets/icon-star.svg" alt="" />
          </div>
          <p className="flex-grow">{review}</p>
          <div className="flex flex-col items-center">
            <img
              className="bg-[#A5B4FC] my-2 object-cover rounded-full w-[100px] h-[100px]"
              src={img}
              alt=""
            />
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
