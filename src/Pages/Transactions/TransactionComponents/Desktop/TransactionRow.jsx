// import ProductActions from "./ProductActions";
import TransactionActions from "./TransactionActions";

// const statusStyles = {
//   available: "bg-[#B2FFB4] text-green-700",
//   out: "bg-red-100 text-red-600",
// };

const statusStylesTwo = {
  available: "bg-[#B2FFB4] text-green-700",
  out: "bg-red-100 text-red-600",
};

const TransactionRow = ({ productsTwo }) => {
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

      <td className="pl-2 py-3 flex items-center gap-2 justify-start ">
        <div>
          <img
            src={productsTwo.image}
            alt={productsTwo.name}
            className="w-8 h-8 rounded"
          />
        </div>
        <div>
          <p className="text-xs text-[#1A71F6]">{productsTwo.id}</p>
          <p className="text-[12px]">{productsTwo.name}</p>
        </div>
      </td>

      <td className="p-3 text-center text-[12px]">{productsTwo.customer}</td>
      <td className="p-3 text-center text-[12px]">${productsTwo.price}</td>
      <td className="p-3 text-center text-[12px]">{productsTwo.date}</td>
      <td className="p-3 text-center text-[12px]">{productsTwo.payment}</td>

      <td className="p-3 text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs ${statusStylesTwo[productsTwo.status] || "bg-gray-100 text-gray-600"}`}
        >
          {productsTwo.status === "shipping" ? "Shipping" : productsTwo.status}
        </span>
      </td>

      <td className="p-3 flex justify-center">
        <TransactionActions />
      </td>
    </tr>
  );
};

export default TransactionRow;
