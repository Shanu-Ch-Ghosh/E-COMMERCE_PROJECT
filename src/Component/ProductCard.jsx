import React from "react";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully!");
  };
  return (
    <Link to={`/product-detail/${product.id}`}>
      <div className="w-[200px] h-[300px] shadow-lg rounded-lg p-4 m-auto">
        <div>
          <img className="w-[180px] h-[180px]" src={product.image} alt="" />
          <h3>{product.title}</h3>
          <p>Rs. {product.price}/-</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="text-yellow-500">★★★★★</div>
      

          <div className="relative">
            <button className="bg-blue-600 text-white p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700">
              ADD
            </button>
            <button onClick={(e) => handleAddToCart(e, product)} className="absolute w-[100px] right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-100 group-hover:opacity-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

