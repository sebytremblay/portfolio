import React from "react";

function KeepScrollingIcon() {
  return (
    <div
      className="fixed bottom-5 right-5 flex 
                items-center justify-center p-6 
                bg-white bg-opacity-20 backdrop-blur-md 
                text-white text-lg font-['Be_Vietnam_Pro'] 
                transition-opacity duration-300 ease-in-out rounded-full"
      style={{ width: '210px', height: '60px' }}
    >
      <svg
        className="w-8 h-8 animate-bounce mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <span className="text-secondary">There's more!</span>
    </div>
  );
};

export default KeepScrollingIcon;
