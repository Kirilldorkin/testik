import React, { useState } from "react";

const InnerAccordionItem = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`inner-accordion-item ${isOpen ? "open" : ""}`}>
      <div className="inner-accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <p className="medium-text" style={{ color: isOpen ? "#FFD12E" : "" }}>{text}</p>
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="40"
              viewBox="0 0 38 40"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.71107 24.9892L6.04883 23.4123L18.6363 11.4707L31.2236 23.4123L29.5614 24.9892L18.6363 14.6249L7.71107 24.9892Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="40"
              viewBox="0 0 38 40"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.2889 15.0108L31.9512 16.5877L19.3637 28.5293L6.77637 16.5877L8.43861 15.0108L19.3637 25.3751L30.2889 15.0108Z"
                fill="white"
                fill-opacity="0.4"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && <div className="inner-accordion-content">{children}</div>}
    </div>
  );
};

export default InnerAccordionItem;
