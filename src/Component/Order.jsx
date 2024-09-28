import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col justify-center items-center mt-7 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Thank you for your order!</h1>
        <p className="text-lg mt-2">
          Your order has been placed successfully. You will receive an email
          confirmation shortly.
        </p>
      </div>

      <div className="w-[60%]">
        <div className="mt-6 border bg-slate-100 rounded-lg p-5 flex flex-col space-y-2">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div>
            <span className="font-medium">Order Number:</span>
            <span>{order.orderNumber}</span>
          </div>
          <div>
            <h3 className="font-semibold">Shipping Information:</h3>
            <span>{order.shippingInformation.address},</span>
            <span>{order.shippingInformation.city},</span>
            <br />
            <span>{order.shippingInformation.zip}</span>
          </div>

          <h3 className="font-semibold">Item Ordered:</h3>
          <ul>
            {order.products.map((product, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {product.title} (x{product.quantity})
                </span>
                <span>Rs. {product.price}/-</span>
              </li>
            ))}
          </ul>

          <div className="mb-2 flex justify-between">
            <span className="font-medium">Total Price:</span>
            <span>Rs. {order.totalPrice}/-</span>
          </div>
        </div>

        <div className="flex space-x-6 m-1 p-2">
          <button class="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
            Track Order
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            class="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
