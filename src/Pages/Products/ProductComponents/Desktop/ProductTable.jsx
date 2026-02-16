// import ProductRow from "./ProductRow";

import ProductRow from "./ProductRow";

const ProductTable = ({ products, loading }) => {
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
    <div
      className="
    rounded-tr-[16px]
    rounded-tl-[16px]
    overflow-x-auto
    rounded-[16px]
    "
    >
      <table className="w-full text-sm">
        <thead
          className="
          bg-[#E7E7E7] dark:bg-[black]
          text-[#454545] dark:text-[white]
          "
        >
          <tr className="">
            <th className="p-3 text-left">
              <input type="checkbox" />
            </th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Size</th>
            <th className="p-3">QTY</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody
          className="
        
        "
        >
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
