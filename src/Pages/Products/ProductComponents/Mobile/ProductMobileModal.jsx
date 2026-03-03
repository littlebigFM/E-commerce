import React from "react";
import Detail from "./Detail";
import ProductActions from "../Desktop/ProductActions";

const ProductMobileModal = ({ product, statusStyles }) => {
  return (
    <div className="flex flex-col gap-3">
      <Detail label="Price" value={product.price} className="pl-4" />
      <Detail label="Size" value={product.size} className="pl-6" />
      <Detail label="Qty" value={product.quantity} className="pl-6" />
      <Detail label="Date" value={product.date} className="pl-4" />
      <Detail
        label="Status"
        value={
          <span
            className={`px-3 py-1 rounded-full text-xs ${statusStyles[product.status]}`}
          >
            {product.status === "available" ? "Available" : "Out of Stock"}
          </span>
        }
      />

      <Detail label="Action" value={<ProductActions />} />
    </div>
  );
};

export default ProductMobileModal;
