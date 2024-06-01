// components/reuseable/CartItem.js

import React from "react";
import RemoveFromCartButton from "./RemoveFromCartButton";

const CartItem = ({ id, name, images, description, price, quantity }) => {
  return (
    <div className="cart-item w-[20rem] border p-4 flex flex-col gap-3">
      <img src={images[0]} alt={name} className="w-full h-40 object-cover" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="w-[15rem] line-clamp-2 text-ellipsis">{description}</p>
      <p className="font-bold">Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <div className="flex gap-3 mt-3">
        <button className="btn bg-blue-500 text-white px-3 py-1 rounded">
          Buy Now
        </button>
        <RemoveFromCartButton id={id} />
      </div>
    </div>
  );
};

export default CartItem;
