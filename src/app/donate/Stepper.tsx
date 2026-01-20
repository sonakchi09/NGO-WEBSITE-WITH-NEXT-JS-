"use client";

interface StepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Amount", icon: "₹" },
  { id: 2, label: "Information", icon: "👤" },
  { id: 3, label: "Payment", icon: "💳" },
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-10">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-10">
            
            {/* Step */}
            <div className="flex flex-col items-center">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-xl
                  ${
                    currentStep === step.id
                      ? "border-2 border-green-600"
                      : "border-2 border-gray-300"
                  }`}
              >
                <span className="text-gray-600">{step.icon}</span>
              </div>

              <span
                className={`mt-3 text-sm font-medium
                  ${
                    currentStep === step.id
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {index !== steps.length - 1 && (
              <div className="w-28 h-[2px] bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
