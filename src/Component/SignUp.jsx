import React from "react";

const SignUp = ({ openSignIn }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg  w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button onClick={openSignIn} className="text-blue-600">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
