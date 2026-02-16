import React from "react";
import { ProductCard } from "./ProductCard";

const ProductCardList = ({ products, loading }) => {
  if (loading) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        Loading...
      </p>
    );
  }

  if (!products.length) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        No products found{" "}
      </p>
    );
  }

  return (
    <div>
      <div
        className="
        py-3 px-3
    rounded-tr-[16px]
    rounded-tl-[16px]
    bg-[#F6F6F6] dark:bg-[#101011]
    text-[#2A2A2A] dark:text-[#F6F6F6]
    font-bold text-[12px]
      "
      >
        <p>Product</p>
      </div>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
