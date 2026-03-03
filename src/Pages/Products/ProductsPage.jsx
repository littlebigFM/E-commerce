import React, { useState } from "react";
// import MainComponent from "./ProductComponents/MainComponent";
import { IoMdArrowDropright } from "react-icons/io";
import useProducts from "./Hooks/useProduct";
import ProductsHeader from "./ProductsHeader";
import ProductTabs from "./ProductComponents/Desktop/ProductTabs";
import ProductTable from "./ProductComponents/Desktop/ProductTable";
import ProductCardList from "./ProductComponents/Mobile/ProductCardList";
// import ProductCardList from "./ProductComponents/Mobile/ProductCardList";

const ProductsPage = () => {
  const [category, setCategory] = useState("Sneakers");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { products, loading } = useProducts({
    // categoryTwo,
    category,
    page,
    search,
  });

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[24px] text-[#2A2A2A] dark:text-[#F6F6F6]">
          Product
        </p>

        <p className="text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
          Dashboard{" "}
          <span>
            <IoMdArrowDropright />
          </span>
          Product{" "}
          <span>
            <IoMdArrowDropright />
          </span>{" "}
          <span className="font-bold text-[#1A71F6]">{category}</span>
        </p>
      </div>

      <div
        className=" 
      bg-[#FFFFFF]
      p-4 rounded-3xl
      dark:bg-[#1A1A1B]
      flex flex-col gap-4
      shadow-[0_0_10px_#c2c1c1]
      dark:shadow-[0_0_10px_#3D3D3D]
      "
      >
        <div className="hidden min-[950px]:flex">
          <ProductsHeader />
        </div>

        <div>
          <ProductTabs category={category} onChange={setCategory} />
        </div>

        <div className="min-[950px]:hidden">
          <ProductsHeader />
        </div>

        <div className="hidden min-[950px]:block">
          <ProductTable products={products} loading={loading} />
        </div>

        <div className="block min-[950px]:hidden">
          <ProductCardList products={products} loading={loading} />
        </div>

        {/* <div>
          <ProductPagination page={page} onChange={setPage} />
        </div> */}
      </div>
    </div>
  );
};

export default ProductsPage;
