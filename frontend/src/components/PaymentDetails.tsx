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
          />
        </div>

        {/* Payment Form Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
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
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-white border-2 border-border hover:border-primary/50"
                  }`}
                >
                  <Building2 className="h-8 w-8 text-gray-dark" />
                  <span className="text-sm font-medium text-gray-dark">
                    Net Banking
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`py-4 px-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === "card"
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-white border-2 border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard className="h-8 w-8 text-gray-dark" />
                  <span className="text-sm font-medium text-gray-dark">
                    Credit Card
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`py-4 px-3 rounded-xl flex flex-col items-center gap-2 relative transition-all ${
                    paymentMethod === "upi"
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-white border-2 border-border hover:border-primary/50"
                  }`}
                >
                  {paymentMethod === "upi" && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                      RECOMMENDED
                    </span>
                  )}
                  <div className="text-2xl font-bold text-primary">UPI</div>
                  <span className="text-sm font-medium text-gray-dark">UPI</span>
                </button>
              </div>

              {/* Thank You Message */}
              <div className="bg-accent/30 border border-primary/30 rounded-xl p-4 flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary font-medium">
                  Thanks for choosing our preferred mode of payment
                </p>
              </div>

              {/* Payment Options */}
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-border hover:border-primary transition-colors cursor-pointer">
                  <div className="text-3xl">📦</div>
                  <span className="text-xs font-medium text-gray-dark">Amazon Pay</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-border hover:border-primary transition-colors cursor-pointer">
                  <div className="text-3xl">G</div>
                  <span className="text-xs font-medium text-gray-dark">Google Pay</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-border hover:border-primary transition-colors cursor-pointer">
                  <div className="text-3xl">💳</div>
                  <span className="text-xs font-medium text-gray-dark">Paytm</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-border hover:border-primary transition-colors cursor-pointer">
                  <div className="text-3xl">☎️</div>
                  <span className="text-xs font-medium text-gray-dark">Phone Pe</span>
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
              <div className="bg-muted/50 rounded-xl p-5 space-y-2">
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
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                Pledge ₹{totalAmount} / Month
              </Button>

              {/* Note */}
              <div className="bg-accent/20 rounded-xl p-4">
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
