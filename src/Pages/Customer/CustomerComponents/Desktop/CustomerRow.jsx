import ProductActions from "../../../Products/ProductComponents/Desktop/ProductActions";

const CustomerRow = ({ productsThree }) => {
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
          <img src={productsThree.image} alt="" className="w-8 h-8 rounded" />
        </div>
        <div>
          <p className="text-xs ">{productsThree.id}</p>
          <p>{productsThree.name}</p>
        </div>
      </td>

      <td className="p-3 text-center">{productsThree.contact}</td>
      <td className="p-3 text-center">${productsThree.purchases}</td>
      <td className="p-3 text-center">{productsThree.orderQty}</td>
      <td className="p-3 text-center">{productsThree.address}</td>

      {/* <td className="p-3 text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs ${statusStyles[productsTwo.status] || "bg-gray-100 text-gray-600"}`}
        >
          {productsTwo.status === "shipping" ? "Shipping" : productsTwo.status}
        </span>
      </td> */}

      <td className="p-3 flex justify-center">
        <ProductActions />
      </td>
    </tr>
  );
};

export default CustomerRow;
