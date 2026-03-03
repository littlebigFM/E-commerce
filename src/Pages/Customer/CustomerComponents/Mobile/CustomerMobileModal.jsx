import React from "react";
import Detail from "../../../Products/ProductComponents/Mobile/Detail";
import CustomerAction from "./CustomerAction";
// import Detail from "./Detail";

const CustomerMobileModal = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      <Detail label="Contact" value={product.contact} className="pl-3" />
      <Detail
        label="Purchases"
        value={`$${product.purchases}`}
        className="pl-"
      />
      <Detail label="Order" value={product.orderQty} className="pl-7" />
      <Detail label="Address" value={product.address} className="pl-3" />
      <Detail label="Action" action={<CustomerAction />} />
    </div>
  );
};

export default CustomerMobileModal;
