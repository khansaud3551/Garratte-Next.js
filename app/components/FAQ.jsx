"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className="accordion-title bg-primary rounded-lg"
        onClick={toggleAccordion}
      >
        {title}
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className="accordion-icon"
        />
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default FAQ;
