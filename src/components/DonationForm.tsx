 import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

interface DonationFormProps {
  onProceed: (amount: number, formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const DonationForm = ({ onProceed }: DonationFormProps) => {
  const [selectedAmount, setSelectedAmount] = useState(300);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;
    onProceed(finalAmount, formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[hsl(186,100%,94%)] to-[hsl(186,60%,92%)]">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8 items-center">
        {/* Hero Image Section */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src={heroImage}
            alt="Social Impact - Empowering communities through education and healthcare"
            className="w-full max-w-xl rounded-2xl shadow-lg object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-3">
                Social Impact Plan
              </h1>
              <p className="text-gray-text text-base md:text-lg">
                Join our community of monthly contributors
                <br />
                providing urgent medical care to children
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAmount(200);
                      setCustomAmount("");
                    }}
                    className={`py-4 px-4 rounded-xl text-base font-semibold transition-all ${
                      selectedAmount === 200 && !customAmount
                        ? "bg-cyan-300 text-white shadow-lg scale-105"
                        : "bg-cyan-100 border-2 border-border text-gray-dark hover:bg-cyan-200 hover:border-cyan-200"
                    }`}
                  >
                    ₹200<span className="text-sm">/mo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAmount(300);
                      setCustomAmount("");
                    }}
                    className={`py-4 px-4 rounded-xl text-base font-semibold transition-all ${
                      selectedAmount === 300 && !customAmount
                        ? "bg-cyan-300 text-white shadow-lg scale-105"
                        : "bg-cyan-100 border-2 border-border text-gray-dark hover:bg-cyan-200 hover:border-cyan-200"
                    }`}
                  >
                    ₹300<span className="text-sm">/mo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAmount(500);
                      setCustomAmount("");
                    }}
                    className={`py-4 px-4 rounded-xl text-base font-semibold transition-all ${
                      selectedAmount === 500 && !customAmount
                        ? "bg-cyan-300 text-white shadow-lg scale-105"
                        : "bg-cyan-100 border-2 border-border text-gray-dark hover:bg-cyan-200 hover:border-cyan-200"
                    }`}
                  >
                    ₹500<span className="text-sm">/mo</span>
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Other Amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="h-14 w-full text-base text-center text-gray-600 font-semibold rounded-xl border-2 border-border focus:border-cyan-100 focus:outline-none px-4"
                />
              </div>

              {/* Name Field */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-text h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-14 pl-12 text-base rounded-xl border-2 focus:border-cyan-100"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-text h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-14 pl-12 text-base rounded-xl border-2 focus:border-cyan-100"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-gray-text">+</span>
                </div>
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text h-5 w-5" />
                <Input
                  type="tel"
                  placeholder="Your Mobile Number *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-14 pl-20 pr-12 text-base rounded-xl border-2 focus:border-cyan-100"
                />
              </div>

              <p className="text-xs text-gray-text text-center">
                All Payment updates will be sent on this number.
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-cyan-300 hover:bg-cyan-400 text-white rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                Pledge ₹{customAmount || selectedAmount} / Month
              </Button>

              {/* Contributors Info */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-100/20 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-cyan-100/30 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-cyan-100/40 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-cyan-100/50 border-2 border-white" />
                </div>
                <p className="text-sm">
                  <span className="font-bold text-cyan-600">4,21,908</span>{" "}
                  <span className="text-cyan-600">contributors are giving monthly</span>
                </p>
              </div>

              {/* Privacy Links */}
              <p className="text-xs text-gray-text text-center pt-4">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="text-cyan-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-cyan-600 hover:underline">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
