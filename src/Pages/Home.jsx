import React from "react";
import { categories } from "../assets/MyData";
import heroImage from "../assets/Images/hero-page.png";
import InfoSection from "../Component/InfoSection";
import CategoriesSection from "../Component/CategoriesSection";
import Product from "../Component/Product";

const Home = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center space-x-6 m-4">
          <div className="w-2/12 h-5/6 border flex items-center flex-col  bg-slate-300 ">
            <div className="bg-red-800 w-full flex justify-center">
              <h1 className="text-xl font-bold p-2 text-white">
                SHOP BY CATEGORIES
              </h1>
            </div>
            <ul className="list-none space-y-2 p-4">
              {categories.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-center">
                    <span className="flex items-center justify-center w-4 h-4 border-2 border-black bg-white rounded-full mr-2"></span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            <img src={heroImage} alt="Hero" className="w-[1100px] h-[500px]" />
            <div className="absolute bottom-40 left-0 p-8 flex flex-col space-y-3 ">
              <p className="text-xl text-stone-700">Best Deals Here</p>
              <h1 className="text-4xl font-bold text-blue-900">
                WELCOME TO EsHoP
              </h1>
              <h2 className="text-2xl">MILLION+ PRODUCTS</h2>
              <button className="w-5/12 bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-500 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <InfoSection />
        <CategoriesSection />
        <Product />
      </div>
    </div>
  );
};

export default Home;
