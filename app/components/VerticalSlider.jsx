"use client";
// VerticalSlider.jsx
import React, { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Mike Reeves",
    img: "assets/btn_img1.png",
    review:
      "ManageHer's course was a game-changer! Comprehensive curriculum and hands-on assignments gave me the confidence to launch my agency with ease. Highly recommended!",
  },
  {
    id: 2,
    name: "Tyler Kelly",
    img: "assets/btn_img3.png",
    review:
      "I had no idea how to manage Only Fans until i took the ManageHer course. It gave me all he tools and knowledge i needed to succeed!",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "assets/btn_img5.png",
    review:
      "The personalized mentorship and online community at ManageHer made all the difference! Experienced professionals provided invaluable insights, making starting my agency a breeze.",
  },

  {
    id: 3,
    name: "John Stevens",
    img: "assets/btn_img4.png",
    review:
      "Thanks to ManageHer, I've successfully started my OnlyFans agency! In-depth knowledge, practical experience, and personalized support gave me all the tools I needed. Don't hesitate, just go for it!",
  },
];

// const reviews = [
//   { content: "This is an amazing product!" },
//   { content: "I love it! Highly recommended." },
//   { content: "One of the best purchases I made." },
//   { content: "Great product and service!" },
// ];

const VerticalSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollTop = 0;
    const speed = 2;

    const scroll = () => {
      scrollTop += speed;
      container.scrollTop = scrollTop;
      if (scrollTop >= container.scrollHeight / 2) {
        scrollTop = 0;
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(scroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden">
      <div className="w-full h-auto space-y-4">
        {reviews.map(renderReview)}
        {/* Duplicate reviews to create continuous scrolling effect */}
        {reviews.map((review, index) =>
          renderReview(review, `duplicate-${index}`)
        )}
      </div>
    </div>
  );
};

export default VerticalSlider;

const renderReview = (review, index) => (
  <div
    key={index}
    className="flex items-center justify-center p-4 text-xl bg-[#36393F]"
  >
    <div className="flex justify-center px-4 py-3 space-y-4">
      <img
        src={review.img}
        alt={`${review.name}'s profile`}
        className="w-[50px] min-w-[50px] mr-5 object-cover h-[50px] mb-2 rounded-full"
      />
      <div>
        <h3 className="mb-3 text-2xl font-semibold text-red-600">
          {review.name}
        </h3>
        <p>{review.review}</p>
      </div>
    </div>
  </div>
);
