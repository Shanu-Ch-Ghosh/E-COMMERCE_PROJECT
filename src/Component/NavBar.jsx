import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { setSearchTerm } from "../Redux/ProductSlice";

const NavBar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-product");
  };

  const openSignIn = () => {
    setIsLogIn(true);
    setIsModelOpen(true);
  };

  const openSignUp = () => {
    setIsLogIn(false);
    setIsModelOpen(true);
  };

  return (
    <nav className="border bg-white shadow-md">
      <div className="flex justify-between items-center h-[60px] mt-3">
        <div className="ml-20 text-3xl font-bold text-blue mr-10">
          <Link to="/">
            {" "}
            <div className="text-4xl font-bold">
              <span className="text-red-400">E</span>
              <span className="text-yellow-400">s</span>
              <span className="text-green-400">H</span>
              <span className="text-blue-400">o</span>
              <span className="text-yellow-500">P</span>
            </div>
          </Link>
        </div>
        <div onClick={searchHandler}>
          <form
            onSubmit={searchHandler}
            className="border rounded-lg p-1 flex items-center"
          >
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              placeholder="Search Product"
              className="w-[900px] h-[30px]"
            />
            <FontAwesomeIcon icon={faSearch} className="p-2" />
          </form>
        </div>
        <div className="w-[300px] mr-20 flex justify-center items-center space-x-8">
          <Link to="/cart" className="relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            {products.length > 0 && (
              <span className="absolute top-0 text-xa w-3 h-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => {
              setIsModelOpen(true);
            }}
            className="border hidden md:block p-1 rounded-lg"
          >
            Sign Up | Register
          </button>
          <button className="border block md:hidden p-1 rounded-lg">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-12 m-3 font-bold">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/shop">
          Shop
        </Link>
        <Link className="hover:underline" to="/contact">
          Contact
        </Link>
        <Link className="hover:underline" to="/about">
          About
        </Link>
      </div>

      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogIn ? (
          <SignIn openSignUp={openSignUp} />
        ) : (
          <SignUp openSignIn={openSignIn} />
        )}
      </Modal>
    </nav>
  );
};

export default NavBar;
