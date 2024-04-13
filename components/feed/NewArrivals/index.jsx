import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-full h-screen flex flex-col text-left gap-y-8 py-4">
      <div className="flex flex-col text-left">
        <div className="title text-red-500 font-bold text-xl flex items-center gap-x-3">
          <div className="h-8 w-4 border-none rounded-md bg-red-500" />
          <p>Latest</p>
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold">New Arrivals</h2>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-2 grid-rows-1  gap-8">
        <div className="bg-gray-400">Box 1 Main</div>
        <div className="grid grid-cols-1 grid-rows-2 gap-8">
          <div className="bg-gray-500">Row 1</div>
          <div className="bg-gray-600">Row 2</div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
