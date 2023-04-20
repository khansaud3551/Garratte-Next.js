"use client";
// VerticalSlider.jsx
import React, { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    img: "assets/btn_img1.png",
    review:
      "I had no idea how to manage Only Fans until i took the Manage Her course. It gave me all he tools and knowledge i needed to succeed!",
  },
  {
    id: 2,
    name: "Tyler K",
    img: "assets/btn_img3.png",
    review:
      "I had no idea how to manage Only Fans until i took the Manage Her course. It gave me all he tools and knowledge i needed to succeed!",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "assets/btn_img2.png",
    review:
      "I had no idea how to manage Only Fans until i took the Manage Her course. It gave me all he tools and knowledge i needed to succeed!",
  },

  {
    id: 3,
    name: "Mike Johnson",
    img: "assets/btn_img3.png",
    review:
      "I had no idea how to manage Only Fans until i took the Manage Her course. It gave me all he tools and knowledge i needed to succeed!",
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
    className="flex items-center justify-center h-[290px] p-4 text-xl  bg-[#36393F]"
  >
    <div className="flex  justify-center px-4 py-3">
      <img
        src={review.img}
        alt={`${review.name}'s profile`}
        className="w-[50px] min-w-[50px] mr-5 object-cover h-[50px] mb-2 rounded-full"
      />
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-red-600">
          {review.name}
        </h3>
        <p>{review.review}</p>
      </div>
    </div>
  </div>
);

// {
//   reviews.map((review, index) => (
//     <div
//       key={review.id}
//       className={`p-4 bg-black shadow-md rounded absolute w-full h-full transition-all duration-3000 ease-linear animate-scrolling`}
//       style={{
//         animationDelay: `${scrollingDelay(index)}ms`,
//         animationDuration: `${reviews.length * 3000}ms`,
//       }}
//     >
//       <h2 className="text-lg font-semibold">{review.name}</h2>
//       <p className="mt-2">{review.review}</p>
//     </div>
//   ));
// }
