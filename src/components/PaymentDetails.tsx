import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Building2, CreditCard, Info, ThumbsUp } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

interface PaymentDetailsProps {
  amount: number;
  onBack: () => void;
  formData: {
    name: string;
    email: string;
    phone: string;
  };
}

type PaymentMethod = "netbanking" | "card" | "upi";

const PaymentDetails = ({ amount, onBack, formData }: PaymentDetailsProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [upiId, setUpiId] = useState("");

  const maintenanceCharge = (amount * 0.016).toFixed(1);
  const totalAmount = (amount + parseFloat(maintenanceCharge)).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log("Processing payment:", { amount: totalAmount, upiId, formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[hsl(186,100%,94%)] to-[hsl(186,60%,92%)]">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8 items-center">
        {/* Hero Image Section */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src={heroImage}
            alt="Social Impact - Empowering communities"
            className="w-full max-w-xl rounded-2xl shadow-lg object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Payment Form Section */}
        <div className="p-8 md:p-12">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
                Social Impact Plan
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Back
                </button>
                <h2 className="text-xl font-semibold text-gray-dark">
                  Enter Your Payment Details
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method Selection */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`py-4 px-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === "netbanking"
                      ? "bg-blue-600 border-2 border-blue-700"
                      : "bg-cyan-100 border-2 border-border hover:bg-cyan-300 hover:border-cyan-300/50"
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src="/net-banking.png" alt="Net Banking" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-sm font-medium text-gray-dark">
                    Net Banking
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`py-4 px-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === "card"
                      ? "bg-blue-600 border-2 border-blue-700"
                      : "bg-cyan-100 border-2 border-border hover:bg-cyan-300 hover:border-cyan-300/50"
                  }`}
                >
                  <img src="/credit card" alt="Credit Card" className="w-8 h-8 object-contain" />
                  <span className="text-sm font-medium text-gray-dark">
                    Credit Card
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`py-4 px-3 rounded-xl flex flex-col items-center gap-2 relative transition-all ${
                    paymentMethod === "upi"
                      ? "bg-blue-600 border-2 border-blue-700"
                      : "bg-cyan-100 border-2 border-border hover:bg-cyan-300 hover:border-cyan-300/50"
                  }`}
                >
                  {paymentMethod === "upi" && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                      RECOMMENDED
                    </span>
                  )}
                  <img src="/upi" alt="UPI" className="w-8 h-8 object-contain" />
                  <span className="text-sm font-medium text-blue-600">UPI</span>
                </button>
              </div>

              {/* Thank You Message */}
              <div className="bg-cyan-100 border border-cyan-100/30 rounded-xl p-4 flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-cyan-600 font-medium">
                  Thanks for choosing our preferred mode of payment
                </p>
              </div>

              {/* Payment Options */}
              <div className="bg-cyan-100 rounded-xl p-4 space-y-3">
                <div className="flex justify-center gap-8">
                  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border hover:shadow-lg transition-all">
                      <img src="/amazon-pay.png" alt="Amazon Pay" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-xs font-medium text-gray-dark">Amazon Pay</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border hover:shadow-lg transition-all">
                      <img src="/gpay.png" alt="Google Pay" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-xs font-medium text-gray-dark">Google Pay</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border hover:shadow-lg transition-all">
                      <img src="/paytm.png" alt="Paytm" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-xs font-medium text-gray-dark">Paytm</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border hover:shadow-lg transition-all">
                      <img src="/phonepe.png" alt="PhonePe" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-xs font-medium text-gray-dark">Phone Pe</span>
                  </div>
                </div>
              </div>

              {/* UPI ID Input */}
              {paymentMethod === "upi" && (
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Enter your UPI ID *"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                    className="h-14 text-base rounded-xl border-2 focus:border-primary"
                  />
                  <p className="text-xs text-gray-text">
                    Example: 7000145862@ybl
                  </p>
                </div>
              )}

              {/* Total Amount */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-dark">
                    Total Amount: ₹{totalAmount}/month
                  </span>
                  <Info className="h-4 w-4 text-gray-text" />
                </div>
                <p className="text-xs text-gray-text">
                  Including mandate maintenance charge
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-cyan-300 hover:bg-cyan-400 text-white rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                Pledge ₹{totalAmount} / Month
              </Button>

              {/* Note */}
              <div className="">
                <p className="text-xs text-gray-dark">
                  <span className="font-semibold">Note:</span> This Account will be
                  linked to the subscription and future payments will be charged
                  automatically. On clicking "Pledge" button you will be redirected to
                  the UPI app.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
