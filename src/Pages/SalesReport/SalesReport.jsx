import React from "react";
import SalesLineChart from "../../Components/UI/Chart/SalesLineChart";

const SalesReport = () => {
  const summary = {
    totalSales: 45230,
    orders: 1240,
    avgOrderValue: 36.48,
  };

  const recentOrders = [
    {
      id: "ORD-1001",
      date: "2026-02-28",
      customer: "Alice",
      total: 120.5,
      status: "Delivered",
    },
    {
      id: "ORD-1002",
      date: "2026-02-27",
      customer: "Bob",
      total: 64.0,
      status: "Processing",
    },
    {
      id: "ORD-1003",
      date: "2026-02-26",
      customer: "Carol",
      total: 230.0,
      status: "Refunded",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-[#2A2A2A] dark:text-white">
          Sales Report
        </h1>
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-[#E5E7EB] rounded-md bg-white text-[#2A2A2A] dark:bg-[#1A1A1B] dark:border-[#3D3D3D] dark:text-white">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>This month</option>
          </select>
        </div>
      </div>

      <div
        className=" 
        grid grid-cols-1 gap-4
      min-[800px]:grid-cols-2
      min-[1200px]:grid-cols-3 gap-4 mb-6"
      >
        <div className="p-4 bg-white dark:bg-[#1A1A1B] rounded-[12px] border border-[#E5E7EB] dark:border-[#3D3D3D]">
          <p className="text-sm text-[#888888] dark:text-[#B0B0B0]">
            Total Sales
          </p>
          <p className="text-xl font-bold text-[#2A2A2A] dark:text-white">
            ${summary.totalSales.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-[#1A1A1B] rounded-[12px] border border-[#E5E7EB] dark:border-[#3D3D3D]">
          <p className="text-sm text-[#888888] dark:text-[#B0B0B0]">Orders</p>
          <p className="text-xl font-bold text-[#2A2A2A] dark:text-white">
            {summary.orders}
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-[#1A1A1B] rounded-[12px] border border-[#E5E7EB] dark:border-[#3D3D3D]">
          <p className="text-sm text-[#888888] dark:text-[#B0B0B0]">
            Avg Order Value
          </p>
          <p className="text-xl font-bold text-[#2A2A2A] dark:text-white">
            ${summary.avgOrderValue.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1A1A1B] p-4 rounded-[12px] border border-[#E5E7EB] dark:border-[#3D3D3D] mb-6">
        <h2 className="font-semibold mb-2 text-[#2A2A2A] dark:text-white">
          Sales Over Time
        </h2>
        <SalesLineChart />
      </div>

      <div className="bg-white dark:bg-[#1A1A1B] p-4 rounded-[12px] border border-[#E5E7EB] dark:border-[#3D3D3D]">
        <h2 className="font-semibold mb-4 text-[#2A2A2A] dark:text-white">
          Recent Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-[#6B7280] dark:text-[#B0B0B0]">
                <th className="pb-2">Order</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Total</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-[#E5E7EB] dark:border-[#3D3D3D]"
                >
                  <td className="py-3 text-[#2A2A2A] dark:text-white">
                    {order.id}
                  </td>
                  <td className="py-3 text-[#2A2A2A] dark:text-white">
                    {order.date}
                  </td>
                  <td className="py-3 text-[#2A2A2A] dark:text-white">
                    {order.customer}
                  </td>
                  <td className="py-3 text-[#2A2A2A] dark:text-white">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="py-3 text-[#2A2A2A] dark:text-white">
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
// import React from "react";

// const SalesReport = () => {
//   return (
//     <div>
//       <p>Sales Report Page</p>
//     </div>
//   );
// };

// export default SalesReport;
