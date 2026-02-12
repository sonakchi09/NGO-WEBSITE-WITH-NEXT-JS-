export default function InfoStep() {
  return (
    <div className="max-w-md mx-auto">

      <h2 className="text-lg font-semibold text-black">
        Kindly fill your details
      </h2>

      <div className="mt-4 space-y-3">

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Name*"
        />

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Phone No.*"
        />

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Email*"
        />

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Address*"
        />

        <select
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
        >
          <option>India</option>
        </select>

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="City*"
        />

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Pincode*"
        />

        <input
          className="w-full border rounded-md p-2.5 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Pan Number*"
        />

        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" className="accent-blue-600" />
          <label className="text-xs">
            I wish to claim tax exemption against this donation.
          </label>
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-md mt-3 transition">
          PAY NOW
        </button>

      </div>
    </div>
  );
}
