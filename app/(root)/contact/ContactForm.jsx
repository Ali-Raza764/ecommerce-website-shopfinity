"use client";

const ContactForm = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="flex items-center justify-between gap-6">
        <input
          type="text"
          className=" w-full  bg-slate-100 gap-x-3 text-gray-800 p-2 border-2 border-none outline-none rounded-md bg-transparent "
          placeholder="Your Email"
          name="name"
        />
        <input
          type="text"
          className=" w-full  bg-slate-100 gap-x-3 text-gray-800 p-2 border-2 border-none outline-none rounded-md bg-transparent "
          placeholder="Your Name"
          name="email"
        />
        <input
          type="text"
          className=" w-full  bg-slate-100 gap-x-3 text-gray-800 p-2 border-2 border-none outline-none rounded-md bg-transparent "
          placeholder="Your Phone"
          name="phone"
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="bg-slate-100 w-full outline-none"
        ></textarea>
      </div>
      <div className="flex items-center justify-end">
        <button className="px-6 py-2 bg-red-500 hover:bg-red-400 transition text-white font-sans font-medium rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
