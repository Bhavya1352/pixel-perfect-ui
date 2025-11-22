import { useState } from "react";
import DonationForm from "@/components/DonationForm";
import PaymentDetails from "@/components/PaymentDetails";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Index = () => {
  const [step, setStep] = useState<"form" | "payment">("form");
  const [amount, setAmount] = useState(300);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleProceed = (selectedAmount: number, data: FormData) => {
    setAmount(selectedAmount);
    setFormData(data);
    setStep("payment");
  };

  const handleBack = () => {
    setStep("form");
  };

  return (
    <>
      {step === "form" ? (
        <DonationForm onProceed={handleProceed} />
      ) : (
        <PaymentDetails amount={amount} formData={formData} onBack={handleBack} />
      )}
    </>
  );
};

export default Index;
