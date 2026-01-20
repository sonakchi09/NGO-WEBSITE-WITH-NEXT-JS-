export default function InfoStep() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1e293b] text-center">
        Your Information
      </h2>

      <div className="grid gap-6 mt-8 max-w-xl mx-auto">
        <input className="border rounded-md p-3" placeholder="Full Name" />
        <input className="border rounded-md p-3" placeholder="Email Address" />
        <input className="border rounded-md p-3" placeholder="Phone Number" />
      </div>
    </div>
  );
}
