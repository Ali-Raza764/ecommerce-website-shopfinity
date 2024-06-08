"use client";

import { createCheckout } from "@/actions/stripe/sessions.actions";

const BuyItemButton = ({ className, data }) => {
  const handleClick = async () => {
    const checkOutUrl = await createCheckout(data);
    window.open(checkOutUrl.checkoutUrl);
  };
  return (
    <button
      className={className + " px-4 p-3 text-md font-semibold "}
      onClick={handleClick}
    >
      Buy Now
    </button>
  );
};

export default BuyItemButton;
