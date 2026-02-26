// import ProductRow from "./ProductRow";

import ProductRow from "./ProductRow";

const ProductTable = ({ products, productsTwo, loading, type }) => {
  if (loading) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        Loading...
      </p>
    );
  }

  if (!products.length && type === "product") {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        No products found{" "}
      </p>
    );
  }

  if (!productsTwo.length && type === "transaction") {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        No customer found{" "}
      </p>
    );
  }

  return (
    <div>
      {type === "product" && (
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
                <ProductRow key={product.id} product={product} type={type} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {type === "transaction" && (
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
                <th className="p-3 text-left">Orders</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Price</th>
                <th className="p-3">Date</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody
              className="
        
        "
            >
              {productsTwo.map((item) => (
                <ProductRow key={item.id} productsTwo={item} type={type} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
