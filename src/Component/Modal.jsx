import React from "react";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 relative">
        <button
          onClick={() => setIsModelOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
