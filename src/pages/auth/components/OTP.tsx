import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import DefaultButton from "../../../components/ui/Buttons/Default";

const OTP: React.FC = () => {
  const [numberOTP, setNumberOTP] = useState("1111");
  const [error, setError] = useState("");
  const { verifyOTP, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!numberOTP) {
      setError("Please fill in all fields");
      return;
    }

    const success = await verifyOTP(numberOTP);
    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="bg-white w-[350px] rounded-lg shadow p-6 space-y-8">
      <h2 className="text-left text-3xl font-semibold text-gray-900">
        Verify OTP
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="relative">
          {/* <label
               htmlFor="phone"
               className="block text-sm font-medium text-gray-700"
             >
               Your Nickname
             </label> */}
          <input
            id="number-otp"
            name="number-otp"
            type="number-otp"
            autoComplete="number-otp"
            required
            value={numberOTP}
            onChange={(e) => setNumberOTP(e.target.value)}
            className="mt-1 appearance-none relative block w-full text-center font-semibold tracking-wide text-3xl py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm placeholder:text-gray-400"
            placeholder="OTP Code"
            maxLength={4}
          />
        </div>

        <div>
          <DefaultButton
            disabled={isLoading}
            type="submit"
            className="w-full disabled:cursor-not-allowed didabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </DefaultButton>
        </div>
      </form>

      <div className="flex items-center justify-center gap-2">
        <p>go to</p>
        <a href="" className="font-semibold text-blue-500">
          Back
        </a>
      </div>
    </div>
  );
};

export default OTP;
