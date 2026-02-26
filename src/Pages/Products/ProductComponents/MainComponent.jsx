import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import useProducts from "./../Hooks/useProduct";
import ProductTable from "./Desktop/ProductTable";
import ProductsHeader from "../ProductsHeader";
import ProductTabs from "./Desktop/ProductTabs";
import ProductPagination from "./ProductPagination";
import ProductCardList from "./Mobile/ProductCardList";

const MainComponent = ({ type }) => {
  const [category, setCategory] = useState("Sneakers");
  const [categoryTwo, setCategoryTwo] = useState("All Orders");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { products, productsTwo, loading } = useProducts({
    categoryTwo,
    category,
    page,
    search,
  });

  return (
    <div className="p-4 flex flex-col gap-4">
      {type === "product" && (
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
      )}

      {type === "transaction" && (
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[24px] text-[#2A2A2A] dark:text-[#F6F6F6]">
            Orders
          </p>

          <p className="text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
            Dashboard{" "}
            <span>
              <IoMdArrowDropright />
            </span>
            Orders{" "}
            <span>
              <IoMdArrowDropright />
            </span>{" "}
            <span className="font-bold text-[#1A71F6]">{categoryTwo}</span>
          </p>
        </div>
      )}

      {type === "customer" && (
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[24px] text-[#2A2A2A] dark:text-[#F6F6F6]">
            Customer
          </p>

          <p className="text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
            Dashboard{" "}
            <span>
              <IoMdArrowDropright />
            </span>
            Customers{" "}
            <span>
              <IoMdArrowDropright />
            </span>{" "}
            <span className="font-bold text-[#1A71F6]">{categoryTwo}</span>
          </p>
        </div>
      )}

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
          <ProductsHeader type={type} />
        </div>

        <div>
          <ProductTabs
            category={category}
            categoryTwo={categoryTwo}
            onChange={setCategory}
            onChangeTwo={setCategoryTwo}
            type={type}
          />
        </div>

        <div className="min-[950px]:hidden">
          <ProductsHeader type={type} />
        </div>

        <div className="hidden min-[950px]:block">
          <ProductTable
            products={products}
            productsTwo={productsTwo}
            loading={loading}
            type={type}
          />
        </div>

        <div className="block min-[950px]:hidden">
          <ProductCardList products={products} loading={loading} type={type} />
        </div>

        <div>
          <ProductPagination page={page} onChange={setPage} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
