import React from "react";

const ProductsEnquiry = ({
  products = [],
  loading = false,
  // category = "Sneakers",
}) => {
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
      <h2 className="font-semibold text-[18px] text-[#454545] dark:text-[#F6F6F6] mb-4">
        Products
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-[#888888]">Loading...</p>
        </div>
      ) : products && products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#D1D1D1] dark:border-[#3D3D3D]">
                <th className="pb-2 text-[#6B7280] dark:text-[#B0B0B0] font-semibold">
                  Product
                </th>
                <th className="pb-2 text-[#6B7280] dark:text-[#B0B0B0] font-semibold">
                  Price
                </th>
                <th className="pb-2 text-[#6B7280] dark:text-[#B0B0B0] font-semibold">
                  Sales
                </th>
                <th className="pb-2 text-[#6B7280] dark:text-[#B0B0B0] font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-[#E5E7EB] dark:border-[#3D3D3D] hover:bg-gray-50 dark:hover:bg-[#252525]"
                >
                  <td className="py-3 text-[#454545] dark:text-white font-semibold">
                    {product.name}
                  </td>
                  <td className="py-3 text-[#454545] dark:text-white">
                    ${product.price}
                  </td>
                  <td className="py-3 text-[#454545] dark:text-white">
                    {product.sales || 0}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 bg-[red] text-xs font-semibold ${
                        product.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Out of Stock"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-[#888888]">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductsEnquiry;
