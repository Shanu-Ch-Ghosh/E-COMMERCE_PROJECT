import React from "react";
import SignUp from "./SignUp";

const SignIn = ({ openSignUp }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 bg-white rounded-lg">
      <div className="bg-white p-6 rounded-lg  w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <form>
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
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button onClick={openSignUp} className="text-blue-600">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
