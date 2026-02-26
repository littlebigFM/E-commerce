import ProductActions from "./ProductActions";

const statusStyles = {
  available: "bg-[#B2FFB4] text-green-700",
  out: "bg-red-100 text-red-600",
};

const statusStylesTwo = {
  available: "bg-[#B2FFB4] text-green-700",
  out: "bg-red-100 text-red-600",
};

const ProductRow = ({ product, productsTwo, type }) => {
  if (type === "product") {
    return (
      <tr
        className="
    text-[#454545] dark:text-[white]
    border border-[#D1D1D1]
    "
      >
        <td className="p-3">
          <input type="checkbox" />
        </td>

        <td className="pl-2 py-3 flex items-center gap-2 justify-start">
          <div>
            <img src={product.image} alt="" className="w-8 h-8 rounded" />
          </div>
          <div>
            <p className="text-xs ">{product.id}</p>
            <p>{product.name}</p>
          </div>
        </td>

        <td className="p-3 text-center">${product.price}</td>
        <td className="p-3 text-center">{product.size}</td>
        <td className="p-3 text-center">{product.quantity}</td>
        <td className="p-3 text-center">{product.date}</td>

        <td className="p-3 text-center">
          <span
            className={`px-3 py-1 rounded-full text-xs ${statusStyles[product.status]}`}
          >
            {product.status === "available" ? "Available" : "Out of Stock"}
          </span>
        </td>

        <td className="p-3 flex justify-center">
          <ProductActions />
        </td>
      </tr>
    );
  }

  if (type === "transaction") {
    return (
      <tr
        className="
    text-[#454545] dark:text-[white]
    border border-[#D1D1D1]
    "
      >
        <td className="p-3">
          <input type="checkbox" />
        </td>

        <td className="pl-2 py-3 flex items-center gap-2 justify-start">
          <div>
            <img src={productsTwo.image} alt="" className="w-8 h-8 rounded" />
          </div>
          <div>
            <p className="text-xs ">{productsTwo.id}</p>
            <p>{productsTwo.name}</p>
          </div>
        </td>

        <td className="p-3 text-center">{productsTwo.customer}</td>
        <td className="p-3 text-center">${productsTwo.price}</td>
        <td className="p-3 text-center">{productsTwo.date}</td>
        <td className="p-3 text-center">{productsTwo.payment}</td>

        <td className="p-3 text-center">
          <span
            className={`px-3 py-1 rounded-full text-xs ${statusStyles[productsTwo.status] || "bg-gray-100 text-gray-600"}`}
          >
            {productsTwo.status === "shipping"
              ? "Shipping"
              : productsTwo.status}
          </span>
        </td>

        <td className="p-3 flex justify-center">
          <ProductActions />
        </td>
      </tr>
    );
  }
};

export default ProductRow;
