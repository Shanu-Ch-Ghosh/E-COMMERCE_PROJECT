import React from "react";
import manCategory from "../assets/Images/man.png";
import womanCategory from "../assets/Images/woman.png";
import kidCategory from "../assets/Images/kid.png";

const categories = [
  {
    title: "Man",
    ImageUrl: manCategory,
  },
  {
    title: "Women",
    ImageUrl: womanCategory,
  },
  {
    title: "Kid",
    ImageUrl: kidCategory,
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex justify-center space-x-10 mt-20">
      {categories.map((item, idx) => {
        return (
          <div key={idx} className="relative hover:scale-105">
            <img
              className="w-[350px] cursor-pointer  border-b-4 rounded-lg shadow-2xl"
              src={item.ImageUrl}
              alt="manCategory"
            />
            <div className="absolute bottom-20 left-10 cursor-pointer">
              <p className="font-bold text-xl">{item.title}</p>
              <p className="text-slate-800">View All</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesSection;
