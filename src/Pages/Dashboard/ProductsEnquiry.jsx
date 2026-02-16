import React, { useState } from "react";
import ProductCardList from "../Products/ProductComponents/Mobile/ProductCardList";
import useProducts from "../Products/Hooks/useProduct";
import ProductTable from "../Products/ProductComponents/Desktop/ProductTable";

const ProductsEnquiry = () => {
  const [category, setCategory] = useState("Sneakers");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { products, loading } = useProducts({
    category,
    page,
    search,
  });

  return (
    <div
      className="
    p-4
    bg-[#FFFFFF] dark:bg-[#1A1A1B]
    rounded-[24px]
    shadow-[0_0_10px_#c2c1c1]
    dark:shadow-[0_0_10px_#3D3D3D]
    flex flex-col 
    h-full
    "
    >
      {/* <div className="hidden min-[950px]:block">
        <ProductTable products={products} loading={loading} />
      </div> */}

      {/* <div className="block">
        <ProductCardList products={products} loading={loading} />
      </div> */}
    </div>
  );
};

export default ProductsEnquiry;
