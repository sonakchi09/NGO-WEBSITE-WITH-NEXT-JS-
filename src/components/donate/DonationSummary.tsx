export default function DonationSummary() {
return (
<div className="bg-white rounded-2xl shadow-sm p-8">
<h2 className="text-2xl font-bold mb-6">Donation Summary</h2>


<div className="space-y-3 text-gray-700">
<div className="flex justify-between">
<span>Donation Amount</span>
<span>₹1000</span>
</div>
<div className="flex justify-between">
<span>Processing Fee</span>
<span>₹0.00</span>
</div>
<hr />
<div className="flex justify-between font-bold text-lg">
<span>Total</span>
<span className="text-green-600">₹1000</span>
</div>
</div>


{/* Trust box */}
<div className="bg-green-50 rounded-xl p-5 mt-6 space-y-3 text-sm">
<p>✔ 100% of your donation goes directly to those in need</p>
<p>✔ Tax‑deductible receipt sent immediately</p>
<p>✔ Regular impact updates</p>
</div>


{/* QR Code */}
<div className="mt-8 text-center">
<h3 className="font-semibold mb-4">Scan & Pay</h3>
<img
src="/images/qr.png"
alt="QR Code"
className="mx-auto w-48 h-48"
/>
<p className="text-sm text-gray-500 mt-3">
Use any UPI app to complete payment
</p>
</div>
</div>
);
}