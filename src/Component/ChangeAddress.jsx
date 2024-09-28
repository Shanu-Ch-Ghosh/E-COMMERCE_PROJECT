import React, { useState } from "react";

const ChangeAddress = ({ setChangeAddress, setIsModelOpen }) => {
  const [value, setValue] = useState("");
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Change Your Address"
        className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="flex justify-between">
        <button
          onClick={() => {
            setChangeAddress(value);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsModelOpen(false);
          }}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
