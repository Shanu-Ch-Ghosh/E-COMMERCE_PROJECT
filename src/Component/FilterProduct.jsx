import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const FilterProduct = () => {
  const filterData = useSelector((state) => state.product.filterProducts);
  return (
    <div>
      <div className="m-8">
        <div className="grid grid-cols-5 gap-5">
          {filterData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
