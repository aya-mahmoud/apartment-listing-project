"use client";

import React, { useState } from "react";

export default function SellPage() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    compound: "",
    type: "",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    price: 0,
    description: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    console.log("here", form);

    // Ensure bedrooms is a number
    const formData = {
      ...form,
      bedrooms: Number(form.bedrooms), // Convert bedrooms to a number
      bathrooms: Number(form.bathrooms), // If needed, do the same for other numeric fields
      area: Number(form.area),
      price: Number(form.price),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create listing");

      setSuccess(true);
      setForm({
        title: "",
        location: "",
        compound: "",
        type: "",
        bedrooms: 0,
        bathrooms: 0,
        area: 0,
        price: 0,
        description: "",
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <section className="bg-[#222831] p-8 rounded-lg max-w-4xl mx-auto mt-8 text-white">
      <h2 className="text-2xl font-bold mb-2">Add Apartment Listing</h2>
      <p className="text-gray-400 mb-6">
        Please fill in the details below to list your apartment.
      </p>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {/* Input fields */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter listing title"
            className="border border-gray-700 p-3 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="border border-gray-700 p-3 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="compound" className="text-sm mb-1">
            Compound (optional)
          </label>
          <input
            type="text"
            id="compound"
            value={form.compound}
            onChange={handleChange}
            placeholder="Compound name"
            className="border border-gray-700 p-3 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="propertyType" className="text-sm mb-1">
            Property Type
          </label>
          <select
            id="type"
            value={form.type}
            onChange={handleChange}
            className="border border-gray-700 p-3 rounded-md"
            required
          >
            <option value="">Select a type</option>
            <option value="apartment">Apartment</option>
            <option value="duplex">Duplex</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="bedrooms" className="text-sm mb-1">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            placeholder="Number of bedrooms"
            className="border border-gray-700 p-3 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bathrooms" className="text-sm mb-1">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            placeholder="Number of bathrooms"
            className="border border-gray-700 p-3 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="area" className="text-sm mb-1">
            Area (m²)
          </label>
          <input
            type="number"
            id="area"
            value={form.area}
            onChange={handleChange}
            placeholder="Total area"
            className="border border-gray-700 p-3 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm mb-1">
            Price (EGP)
          </label>
          <input
            type="number"
            id="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="border border-gray-700 p-3 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="description" className="text-sm mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Add a detailed description"
            className="border border-gray-700 p-3 h-32 rounded-md resize-none"
            required
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className={`${
              submitting ? "bg-gray-500" : "bg-[#bf9745] hover:bg-[#a67f36]"
            } text-white py-3 px-6 rounded-md transition w-full`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        {error && <p className="text-red-400 md:col-span-2 text-sm">{error}</p>}
        {success && (
          <p className="text-green-400 md:col-span-2 text-sm">
            Apartment listed successfully!
          </p>
        )}
      </form>
    </section>
  );
}
