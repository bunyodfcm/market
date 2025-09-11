import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import DefaultButton from "../../../components/ui/Buttons/Default";

const ResetPassword: React.FC = () => {
  const [number, setPhone] = useState("");
  const [error, setError] = useState("");
  const { verifyOTP, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!number) {
      setError("Please fill in all fields");
      return;
    }

    const success = await verifyOTP(number);
    if (success) {
      navigate("/auth/login");
    } else {
      setError("Invalid credentials"); 
    }
  };

  return (
    <div className="bg-white w-[350px] rounded-lg shadow p-6 space-y-8">
      <h2 className="text-left text-3xl font-semibold text-gray-900">
        Forgot Password
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
            id="phone"
            name="phone"
            type="phone"
            autoComplete="phone"
            required
            value={number}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 appearance-none relative block w-full text-center font-semibold tracking-wide text-3xl py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm placeholder:text-gray-400"
            placeholder="Enter your phone number"
            maxLength={9}
          />
        </div>

        <div>
          <DefaultButton
            disabled={isLoading}
            type="submit"
            className="w-full disabled:cursor-not-allowed didabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Reset Password"}
          </DefaultButton>
        </div>
      </form>

      <div className="flex items-center justify-center gap-2">
        <p>go to</p>
        <a
          href=""
          className="font-semibold text-blue-500"
          onClick={() => navigate("/auth/login")}
        >
          Back
        </a>
      </div>
    </div>
  );
};

export default ResetPassword;
