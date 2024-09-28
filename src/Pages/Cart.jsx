import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Component/Modal";
import ChangeAddress from "../Component/ChangeAddress";
import { decreaseItem, increaseItem, removeFromCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const CartProducts = useSelector((state) => state.cart.products);
  const Cartquantity = useSelector((state) => state.cart.totalQuantity);
  const CartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [changeAddress, setChangeAddress] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      {CartProducts.length > 0 ? (
        <div className="flex space-x-10">
          <div className="w-8/12">
            <h1 className="text-center m-10 text-2xl font-bold">
              SHOPPING CART
            </h1>
            {CartProducts.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex justify-center space-x-10 m-10 p-4">
                    <div className="">
                      <p>Product</p>
                      <div className="flex justify-center items-center space-x-3 mt-5">
                        <img
                          className="w-[110px] h-[120px]"
                          src={product.image}
                          alt={product.title}
                        />
                        <h1 className="text-xl">{product.title}</h1>
                      </div>
                    </div>
                    <div>
                      <p>Price</p>
                      <h1 className="mt-16 text-xl">Rs. {product.price}/-</h1>
                    </div>
                    <div>
                      <p>Quantity</p>
                      <div className="flex space-x-1 mt-16 text-xl">
                        <button
                          onClick={() => {
                            dispatch(decreaseItem(product.id));
                          }}
                          className="border w-5 rounded-lg"
                        >
                          -
                        </button>
                        <h1>{product.quantity}</h1>
                        <button
                          onClick={() => {
                            dispatch(increaseItem(product.id));
                          }}
                          className="border w-5 rounded-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>Subtotal</p>
                      <h1 className="mt-16 text-xl">
                        Rs. {product.totalPrice}/-
                      </h1>
                    </div>
                    <div>
                      <p>Remove</p>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(product.id));
                          console.log(product.totalQuantity);
                        }}
                        className="mt-16 text-xl"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border rounded-lg shadow-lg p-6 mt-[120px]  max-w-md bg-white w-[100%] h-[50%]">
            <h1 className="text-xl font-bold mb-4">CART TOTAL</h1>
            <div className="flex justify-between mb-2">
              <span>TOTAL ITEMS:</span>
              <span>{Cartquantity}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>SHIPPING TO:</span>
              <span>{changeAddress}</span>
            </div>
            <button
              onClick={() => {
                setIsModelOpen(true);
              }}
              className="text-blue-500 hover:underline mb-4"
            >
              Change Address
            </button>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total Price:</span>
              <span className="font-semibold">Rs. {CartTotalPrice}/-</span>
            </div>
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>

          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setChangeAddress={setChangeAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="text-center m-[200px] text-5xl font-bold">Empty</div>
      )}
    </div>
  );
};

export default Cart;
