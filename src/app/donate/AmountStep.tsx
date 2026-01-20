"use client";

interface AmountStepProps {
  selectedAmount: number | null;
  setSelectedAmount: (amount: number | null) => void;
}

const amounts = [500, 1000, 2000, 5000, 10000, 20000];

export default function AmountStep({
  selectedAmount,
  setSelectedAmount,
}: AmountStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1e293b]">
        Choose Your Donation Amount
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => setSelectedAmount(amt)}
            className={`h-20 rounded-xl border text-lg font-semibold transition
              ${
                selectedAmount === amt
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-gray-200 hover:border-green-500 hover:text-green-600"
              }`}
          >
            ₹{amt.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
    </div>
  );
}
