"use client";

import { useEffect } from "react";

export default function VolunteerFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 sm:p-8 animate-scaleIn">
        <h2 className="text-2xl font-bold text-center mb-4">
          Make an Impact
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 border-black"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500  border-black"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500  border-black"
            required
          />

          <input
            type="text"
            placeholder="City / Location"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500  border-black"
            required
          />

          <select
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500  border-black"
            required
          >
            <option value="">How can you help?</option>
            <option>Field Work</option>
            <option>Medical Help</option>
            <option>Fundraising</option>
            <option>Social Media</option>
            <option>Logistics</option>
          </select>

          <textarea
            placeholder="Why do you want to volunteer?"
            rows={3}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500  border-black"
          />

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 rounded-md font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
