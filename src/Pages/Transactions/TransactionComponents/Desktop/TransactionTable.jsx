// import ProductRow from "./TransactionRow";

import TransactionRow from "./TransactionRow";

const TransactionTable = ({ productsTwo, loading }) => {
  if (loading) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        Loading...
      </p>
    );
  }

  if (!productsTwo.length) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        No customer found{" "}
      </p>
    );
  }

  return (
    <div>
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
              <TransactionRow key={item.id} productsTwo={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
