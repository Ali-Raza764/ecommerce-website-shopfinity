"use client";
import { useState } from "react";
import DeleteItemDialog from "./DeleteItemDialog";

const DeleteItemButton = ({ itemId, children, className, name, type }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(!open)}>
        {children}
      </button>

      <DeleteItemDialog open={open} setOpen={setOpen} name={name} id={itemId} type={type}/>
    </>
  );
};

export default DeleteItemButton;
