import React, { useEffect } from "react";
import { productLists } from "../assets/MyData";
import { setProducts } from "../Redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Shop from "../Pages/Shop";
import ProductCard from "./ProductCard";

const Product = () => {
  // const topProductLists=productLists.slice(0,5);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(productLists));
  }, []);

  return (
    <div className="m-8">
      <h1 className="text-center text-2xl font-bold m-6">Top Products</h1>
      <div className="grid grid-cols-5 gap-5">
        {products.products.slice(10, 15).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div>
        <Shop />
      </div>
    </div>
  );
};

export default Product;
