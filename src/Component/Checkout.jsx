import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const navigate = useNavigate();

  const orderHandler = () => {
    const newOrder = {
      products: cartProduct.products,
      orderNumber: "125487",
      shippingInformation: shippingInfo,
      totalPrice: cartProduct.totalPrice,
    };

    setOrder(newOrder);

    navigate("/order-confirmation");
  };

  const cartProduct = useSelector((state) => state.cart);

  return (
    <div className="p-4">
      <div className="flex space-x-10">
        <div className="w-6/12">
          <h1 className="m-10 text-2xl font-bold text-center">CHECKOUT</h1>

          {/* Billing Information */}

          <div className="border w-9/12 mx-auto mb-6 rounded-lg shadow-md">
            <div
              onClick={() => {
                setBillingToggle(!billingToggle);
              }}
              className="flex justify-between items-center border-b p-2 cursor-pointer hover:bg-gray-100 transition"
            >
              <h3 className="font-semibold">Billing Information</h3>
              {billingToggle ? (
                <FontAwesomeIcon icon={faArrowUp} className="text-blue-500" />
              ) : (
                <FontAwesomeIcon icon={faArrowDown} className="text-blue-500" />
              )}
            </div>
            <div
              className={`flex flex-col space-y-3 m-3 ${
                billingToggle ? "hidden" : ""
              }`}
            >
              <div>
                <label htmlFor="text1" className="font-medium">
                  Name
                </label>
                <br />
                <input
                  className="w-full h-10 border rounded p-2"
                  id="text1"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="text2" className="font-medium">
                  Email
                </label>
                <br />
                <input
                  className="w-full h-10 border rounded p-2"
                  id="text2"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="text3" className="font-medium">
                  Phone
                </label>
                <br />
                <input
                  className="w-full h-10 border rounded p-2"
                  id="text3"
                  type="text"
                  placeholder="Enter Your Phone"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}

          <div className="border w-9/12 mx-auto mb-6 rounded-lg shadow-md">
            <div
              onClick={() => {
                setShippingToggle(!shippingToggle);
              }}
              className="flex justify-between items-center border-b p-2 cursor-pointer hover:bg-gray-100 transition"
            >
              <h3 className="font-semibold">Shipping Information</h3>
              {shippingToggle ? (
                <FontAwesomeIcon icon={faArrowUp} className="text-blue-500" />
              ) : (
                <FontAwesomeIcon icon={faArrowDown} className="text-blue-500" />
              )}
            </div>
            <div
              className={`flex flex-col space-y-3 m-3 ${
                shippingToggle ? "hidden" : ""
              }`}
            >
              <div>
                <label htmlFor="text1" className="font-medium">
                  Address
                </label>
                <br />
                <input
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    });
                  }}
                  className="w-full h-10 border rounded p-2"
                  id="text1"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="text2" className="font-medium">
                  City
                </label>
                <br />
                <input
                  onChange={(e) => {
                    setShippingInfo({ ...shippingInfo, city: e.target.value });
                  }}
                  className="w-full h-10 border rounded p-2"
                  id="text2"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="text3" className="font-medium">
                  Zip Code
                </label>
                <br />
                <input
                  onChange={(e) => {
                    setShippingInfo({ ...shippingInfo, zip: e.target.value });
                  }}
                  className="w-full h-10 border rounded p-2"
                  id="text3"
                  type="text"
                  placeholder="Enter Your Phone"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}

          <div className="border w-9/12 mx-auto mb-6 rounded-lg shadow-md">
            <div
              onClick={() => {
                setPaymentToggle(!paymentToggle);
              }}
              className="flex justify-between items-center border-b p-2 cursor-pointer hover:bg-gray-100 transition"
            >
              <h3 className="font-semibold">Payment Method</h3>
              {paymentToggle ? (
                <FontAwesomeIcon icon={faArrowUp} className="text-blue-500" />
              ) : (
                <FontAwesomeIcon icon={faArrowDown} className="text-blue-500" />
              )}
            </div>
            <div
              className={`flex flex-col space-y-3 m-3 ${
                paymentToggle ? "hidden" : ""
              }`}
            >
              <div className="flex space-x-2">
                <input
                  onChange={() => {
                    setPaymentMethod("Cash");
                  }}
                  className="border rounded p-2"
                  id="method1"
                  type="radio"
                  placeholder="Enter Your Name"
                  value="Cash"
                  checked={paymentMethod == "Cash"}
                />{" "}
                <br />
                <label htmlFor="method1" className="font-medium">
                  Cash On Delivery
                </label>
              </div>

              <div>
                <div className="flex space-x-2">
                  <input
                    onChange={() => {
                      setPaymentMethod("Debit");
                    }}
                    className="border rounded p-2"
                    id="method2"
                    type="radio"
                    placeholder="Enter Your Name"
                    value="Debit"
                    checked={paymentMethod == "Debit"}
                  />
                  <br />
                  <label htmlFor="method2" className="font-medium">
                    Debit Card
                  </label>
                </div>

                {paymentMethod === "Debit" && (
                  <div className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold">
                      Debit Card Information
                    </h1>
                    <div>
                      <label
                        htmlFor="cardNum"
                        className="block font-medium mb-1"
                      >
                        Card Number
                      </label>
                      <input
                        id="cardNum"
                        type="text"
                        placeholder="Enter Your Card Number"
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cardHolder"
                        className="block font-medium mb-1"
                      >
                        Card Holder Name
                      </label>
                      <input
                        id="cardHolder"
                        type="text"
                        placeholder="Enter Card Holder Name"
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div className="flex justify-between space-x-2">
                      <div className="flex-1">
                        <label
                          htmlFor="expiryDate"
                          className="block font-medium mb-1"
                        >
                          Expiry Date
                        </label>
                        <input
                          id="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          className="border rounded p-2 w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="cvv" className="block font-medium mb-1">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="CVV"
                          className="border rounded p-2 w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div
                  onChange={() => {
                    setPaymentMethod("Credit");
                  }}
                  className="flex items-center space-x-2 mb-4"
                >
                  <input
                    className="border rounded p-2"
                    id="method3"
                    type="radio"
                    value="Credit"
                    checked={paymentMethod === "Credit"}
                  />
                  <label htmlFor="method3" className="font-medium">
                    Credit Card
                  </label>
                </div>
                {paymentMethod === "Credit" && (
                  <div className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold">
                      Credit Card Information
                    </h1>
                    <div>
                      <label
                        htmlFor="cardNum"
                        className="block font-medium mb-1"
                      >
                        Card Number
                      </label>
                      <input
                        id="cardNum"
                        type="text"
                        placeholder="Enter Your Card Number"
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cardHolder"
                        className="block font-medium mb-1"
                      >
                        Card Holder Name
                      </label>
                      <input
                        id="cardHolder"
                        type="text"
                        placeholder="Enter Card Holder Name"
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div className="flex justify-between space-x-2">
                      <div className="flex-1">
                        <label
                          htmlFor="expiryDate"
                          className="block font-medium mb-1"
                        >
                          Expiry Date
                        </label>
                        <input
                          id="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          className="border rounded p-2 w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="cvv" className="block font-medium mb-1">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="CVV"
                          className="border rounded p-2 w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-lg p-6 mt-14 max-w-md bg-gray-100 w-full h-[50%] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div>
            <h2 className="text-xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-200">
              Order Summary
            </h2>
          </div>
          <div className="border h-[270px] overflow-y-auto mt-5 rounded-lg shadow-inner bg-white">
            {cartProduct.products.map((product) => {
              return (
                <div className="flex justify-between m-5 border-b last:border-b-0 transition-transform duration-200 hover:translate-x-1">
                  <div className="flex space-x-6">
                    <div>
                      <img
                        className="w-[60px] h-[60px] rounded-md shadow"
                        src={product.image}
                        alt="Image was not found"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700">{product.title}</p>
                      <p className="text-gray-500">
                        Rs.{product.price} × {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">Rs. {product.price}/-</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between m-6 font-semibold">
            <p>Total Price:</p>
            <p className="text-gray-800">Rs. {cartProduct.totalPrice}/-</p>
          </div>
          <button
            onClick={orderHandler}
            className="border p-2 w-[85%] flex justify-center m-auto bg-red-600 text-white font-bold rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-red-500"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
