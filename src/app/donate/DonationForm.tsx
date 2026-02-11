"use client";


import { useState } from "react";


export default function DonationForm() {
const [amount, setAmount] = useState(1000);


return (
<div className="bg-white rounded-2xl shadow-sm p-8">
<h2 className="text-2xl font-bold mb-6">Choose Donation Amount</h2>


{/* Preset amounts */}
<div className="grid grid-cols-2 gap-4 mb-6">
{[100, 250, 500, 1000].map((val) => (
<button
key={val}
onClick={() => setAmount(val)}
className={`border rounded-xl py-4 text-lg font-semibold transition ${
amount === val
? "border-green-600 text-green-600"
: "border-gray-200"
}`}
>
₹{val}
</button>
))}
</div>


{/* Custom amount */}
<input
type="number"
placeholder="Enter custom amount"
value={amount}
onChange={(e) => setAmount(Number(e.target.value))}
className="w-full border rounded-xl px-4 py-3 mb-8"
/>


{/* User info */}
<h3 className="text-xl font-semibold mb-4">Your Information</h3>


<div className="grid gap-4">
<input placeholder="Full Name" className="input" />
<input placeholder="Email Address" className="input" />
<input placeholder="Phone Number" className="input" />
</div>


<button className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl font-semibold">
Continue
</button>
</div>
);
}