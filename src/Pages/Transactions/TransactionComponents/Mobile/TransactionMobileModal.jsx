import React from "react";
import TransactionDetail from "./TransactionDetail";
import TransactionActions from "../Desktop/TransactionActions";

const TransactionMobileModal = ({ product, statusStyles }) => {
  return (
    <div className="flex flex-col gap-3">
      <TransactionDetail
        label="Customer"
        value={product.customer}
        className="pl-1"
      />
      <TransactionDetail label="Price" value={product.price} className="pl-9" />
      <TransactionDetail label="Date" value={product.date} className="pl-9" />
      <TransactionDetail
        label="Payment"
        value={product.payment}
        className="pl-2"
      />
      <TransactionDetail
        label="Status"
        value={
          <span
            className={`px-3 py-1 pl-6 rounded-full text-xs ${statusStyles[product.shipping]}`}
          >
            {product.status === "available" ? "Available" : "Out of Stock"}
          </span>
        }
      />

      <TransactionDetail label="Action" action={<TransactionActions />} />
    </div>
  );
};

export default TransactionMobileModal;
