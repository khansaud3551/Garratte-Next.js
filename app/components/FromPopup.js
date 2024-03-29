"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const FromPopup = ({ isModalOpen, handleModalClose }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [dots, setDots] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sending) {
      const timer = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
      }, 300);
      return () => clearInterval(timer);
    }
  }, [sending]);

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const res = await fetch("api/formhandle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setSending(false);

    if (data.error) {
      console.error(data.message);
      setError(data.message);
      setMessage("");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      console.log(data.message);
      setMessage(data.message);
      setError("");
    }
  };

  const punchlineText = `
  How to leave your 9-5 gig, learn to manage models, and earn
  $10k-$30k/month within 60 days as a onlyfans manager. Gain the knowledge
  and tools you need to succeed in this business model from the comfort of
  your own home. Start building your dream career today through Manageher.
  `;

  return (
    <>
      <AnimatedModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        handleModalClose={handleModalClose}
      >
        <Image
          src="/assets/logo.gif"
          className="mx-auto mt-[-44px] w-[100px] md:w-[180px]"
          alt="Logo"
          width={180}
          height={180}
        />
        <p className="text-center maven-font  md:text-[25px] max-w-5xl mx-auto">
          {punchlineText}
        </p>
        <form
          onSubmit={handleModalSubmit}
          className="w-full md:w-[70%] mx-auto space-y-5 mt-4 md:mt-6"
        >
          <input
            required
            className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
            type="text"
            name="name"
            placeholder="Your Full Name Here..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            required
            className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
            type="email"
            name="email"
            placeholder="Your Email Address Here..."
            value={formData.email}
            onChange={handleChange}
          />
          {/* <input
      className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
      type="number"
      required
      name="phoneNumber"
      placeholder="Your Phone Number Here..."
      value={formData.phoneNumber}
      onChange={handleChange}
    /> */}
          {sending && (
            <p className="mt-8 text-2xl font-bold text-center">
              Sending you an email{dots}
            </p>
          )}
          {message && (
            <p className="mt-8 text-2xl font-bold text-center ">{message}</p>
          )}
          {error && (
            <p className="mt-8 text-2xl text-red-600 font-bold text-center">
              {error}
            </p>
          )}
          <div>
            <button
              type="submit"
              disabled={message}
              className="px-8 disabled:bg-secondary-light mt-4 md:mt-11 flex mx-auto justify-center font-bold md:text-xl py-4 w-[80%] md:w-[350px] rounded-xl bg-primary"
            >
              Learn More
            </button>
          </div>
          <p className="mt-4 text-lg text-center modal_text md:mt-8">
            Your information is 100% secure with us and will never be shared
            with anyone
          </p>
        </form>
      </AnimatedModal>
    </>
  );
};

export default FromPopup;

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
      className="bg-[#09001A] relative h-[90vh]  border-primary border-[5px] md:px-20 py-10 w-[97%] md:w-[80%] p-6 rounded shadow-md outline-none"
      ariaHideApp={false}
      appElement={
        typeof document !== "undefined" && document.getElementById("__next")
      }
    >
      <button
        onClick={handleModalClose}
        className="absolute top-0 right-0 z-10 p-1 mt-4 mr-4 rounded-full bg-primary md:mt-8 md:mr-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
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
