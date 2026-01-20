"use client";

import { useState } from "react";
import Stepper from "./Stepper";
import AmountStep from "./AmountStep";
import InfoStep from "./InfoStep";
import PaymentStep from "./PaymentStep";

export default function DonatePage() {
  const [step, setStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  return (
    <section className="bg-[#f7f9fb] py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-10">

        <h1 className="text-4xl font-bold text-[#1e293b] text-center">
          Make a Difference Today
        </h1>

        <p className="text-gray-500 text-center mt-4 max-w-2xl mx-auto">
          Your generosity creates lasting change. Every donation brings hope
          and transforms lives.
        </p>

        <Stepper currentStep={step} />

        <div className="mt-14">
          {/* STEP 1 */}
          {step === 1 && (
            <AmountStep
              selectedAmount={selectedAmount}
              setSelectedAmount={setSelectedAmount}
            />
          )}

          {/* STEP 2 */}
          {step === 2 && <InfoStep />}

          {/* STEP 3 */}
          {step === 3 && (
            <PaymentStep amount={selectedAmount ?? 0} />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="px-6 py-3 rounded-md border text-gray-600 disabled:opacity-40"
          >
            Back
          </button>

          <button
            onClick={() => setStep(step + 1)}
            disabled={step === 3 || !selectedAmount}
            className="px-8 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium disabled:opacity-40"
          >
            Continue
          </button>
        </div>

      </div>
    </section>
  );
}
