"use client";
import { CreateUser } from "@/actions/user.actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OnboardingForm = ({ email, name, id }) => {
  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    address: "",
    phone: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await CreateUser({
      email: formData.email,
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      AuthId: id,
    });
    setLoading(false);
    if (res.status === 200) {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 shadow-md rounded bg-white md:my-6 my-3"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-red-500 text-white rounded mt-2 hover:bg-red-400 transition"
        disabled={loading}
      >
        Submit
      </button>
    </form>
  );
};

export default OnboardingForm;
