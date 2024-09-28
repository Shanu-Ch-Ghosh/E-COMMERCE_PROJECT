import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faLock,
  faTag,
  faHeadset,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons"; // Import money-back icon

const InfoSection = () => {
  const Information = [
    {
      icons: (
        <FontAwesomeIcon
          icon={faShippingFast}
          className="text-blue-500 text-2xl"
        />
      ),
      title: "Free Shipping",
      description: "Get your order delivered with no extra cost",
    },
    {
      icons: (
        <FontAwesomeIcon icon={faHeadset} className="text-red-500 text-2xl" />
      ),
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icons: (
        <FontAwesomeIcon
          icon={faMoneyBillWave}
          className="text-amber-600 text-2xl"
        />
      ),
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icons: (
        <FontAwesomeIcon icon={faLock} className="text-green-500 text-2xl" />
      ),
      title: "Payment Secure",
      description: "Your payment information safe with us",
    },
    {
      icons: <FontAwesomeIcon icon={faTag} className="text-sky-900 text-2xl" />,
      title: "Discounts",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 p-4">
      {Information.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="w-60 h-40 bg-slate-300 shadow-xl rounded-lg flex flex-col items-center p-4 hover:scale-105 cursor-pointer">
              <div className="rounded-lg mb-4">{item.icons}</div>

              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoSection;
