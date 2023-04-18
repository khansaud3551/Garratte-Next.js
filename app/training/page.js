"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (formData) => {
    console.log("Form data:", formData);
  };

  return (
    <div className="my-10 justify-center space-y-16">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-12 mx-auto flex font-bold text-xl py-4 rounded-xl bg-primary"
      >
        Free Training
      </button>
      <p className="text-center maven-font text-[30px] max-w-5xl mx-auto">
        How to leave your 9-5 gig, learn to manage models, and earn
        $10k-$30k/month within 60 days as a onlyfans manager. Gain the knowledge
        and tools you need to succeed in this business model from the comfort of
        your own home. Start building your dream career today through Manageher.
      </p>
      <img
        className="h-[250px] md:h-[500px] w-full object-cover rounded-xl"
        src="assets/video.jpg"
        alt=""
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-8 flex mx-auto justify-center font-bold text-xl py-4 w-[80%] md:w-[500px] rounded-xl bg-primary"
      >
        Learn More
      </button>
      <AnimatedModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        handleModalClose={handleModalClose}
      >
        <Image
          src="/assets/logo.gif"
          className="mx-auto mt-[-44px] w-[100px] md:w-[200px]"
          alt="Logo"
          width={200}
          height={200}
        />
        <p className="text-center maven-font  md:text-[25px] max-w-5xl mx-auto">
          How to leave your 9-5 gig, learn to manage models, and earn
          $10k-$30k/month within 60 days as a onlyfans manager. Gain the
          knowledge and tools you need to succeed in this business model from
          the comfort of your own home. Start building your dream career today
          through Manageher.
        </p>
        <div className="w-full md:w-[70%] mx-auto space-y-5 mt-4 md:mt-12">
          <input
            className="p-3 md:p-6 md:text-xl focus:outline-none w-full bg-white text-black rounded-xl"
            type="text"
            name="name"
            placeholder="Your Full Name Here..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="p-3 md:p-6 md:text-xl focus:outline-none w-full bg-white text-black rounded-xl"
            type="text"
            name="email"
            placeholder="Your Email Address Here..."
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="p-3 md:p-6 md:text-xl focus:outline-none w-full bg-white text-black rounded-xl"
            type="text"
            name="phoneNumber"
            placeholder="Your Phone Number Here..."
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 mt-4 md:mt-12 flex mx-auto justify-center font-bold md:text-xl py-4 w-[80%] md:w-[350px] rounded-xl bg-primary"
        >
          Learn More
        </button>

        <p className="text-lg modal_text text-center mt-4 md:mt-8">
          Your information is 100% save with us and will never be shared with
          anyone
        </p>
      </AnimatedModal>
    </div>
  );
};

export default page;

const AnimatedModal = ({
  isOpen,
  onRequestClose,
  children,
  handleModalClose,
}) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translate3d(0,0,0)" : "translate3d(0,-50%,0)",
    config: { duration: 200 },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed overflow-scroll pt-36 md:pt-0 pb-6 mt:pb-0 md:my-0 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      className="bg-[#09001A] relative  border-primary border-[5px] md:px-20 py-10 w-[97%] md:w-[70%] p-6 rounded shadow-md outline-none"
      ariaHideApp={false}
      appElement={
        typeof document !== "undefined" && document.getElementById("__next")
      }
    >
      <button
        onClick={handleModalClose}
        className="absolute bg-primary p-1 rounded-full top-0 right-0 mt-4 mr-4 md:mt-8 md:mr-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <animated.div style={animation}>{children}</animated.div>
    </Modal>
  );
};
