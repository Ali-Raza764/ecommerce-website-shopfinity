import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row py-8 md:py-[5rem] px-11 gap-8">
      <div className="w-full md:w-1/3 flex flex-col itms-center gap-5 shadow p-4">
        <div className="call my-3">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="icon bg-red-500 rounded-full p-3 mb-4">
              <CiPhone size={35} className=" text-white " />
            </div>
            <h2 className="text-xl font-sans font-medium">Call To Us</h2>
          </div>
          <p className="text-xl font-sans mb-3"> We are available 24/7</p>
          <p className="text-xl"> Phone: 3136332839</p>
        </div>
        <div className="email">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="icon bg-red-500 rounded-full p-3 mb-4">
              <CiMail size={35} className=" text-white " />
            </div>
            <h2 className="text-xl font-sans font-medium">Write To Us</h2>
          </div>
          <p className="text-xl font-sans mb-3">
            Fill Out Our Form We Will Contact You in Less Than 24 hours
          </p>
          <p className="text-xl"> Email: shopfinity@email.com</p>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col itms-center bg-white shadow shadow-gray-300 rounded-md p-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
