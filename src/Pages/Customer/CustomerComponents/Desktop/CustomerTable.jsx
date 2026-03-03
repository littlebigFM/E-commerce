import CustomerRow from "./CustomerRow";

const CustomerTable = ({ productsThree, loading }) => {
  if (loading) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        Loading...
      </p>
    );
  }

  if (!productsThree.length) {
    return (
      <p className="flex items-center justify-center text-[#737373] dark:text-[#B0B0B0]">
        No Customer found{" "}
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
              <th className="p-3 text-left">Customer Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Purchases</th>
              <th className="p-3">Order Qty</th>
              <th className="p-3">Address</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody
            className="
        
        "
          >
            {productsThree.map((item) => (
              <CustomerRow key={item.id} productsThree={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
