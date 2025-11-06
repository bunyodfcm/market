import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../model/useRegister';
import { Icon } from '@iconify/react';
import { Alert } from '../../../shared/ui/alert/Alert';

interface OtpFormProps {
  onSuccess?: () => void;
}

export const OtpForm: React.FC<OtpFormProps> = ({ onSuccess }) => {
  const {
    verifyOtp,
    isLoading,
    error,
    successMessage,
    clearError,
    clearSuccessMessage,
  } = useRegister();
  const [otpNumber, setOtpNumber] = useState('');

 
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await verifyOtp(Number(otpNumber));
    if (res) {
      console.log(res)
      onSuccess?.(); // parentda navigate bo'ladi
    }
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="max-w-md w-full space-y-8">
      {/* Register Form */}
      <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <Alert
            variant="success"
            title="Muvaffaqiyat!"
            message={successMessage}
            onClose={clearSuccessMessage}
            className="mb-4"
          />
        )}

        {/* Error Alert */}
        {error && (
          <Alert
            variant="error"
            title="Xatolik"
            message={error}
            onClose={clearError}
            className="mb-4"
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* OTP field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon
                icon="teenyicons:otp-solid"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="tel"
              name="phone"
              value={otpNumber}
              onChange={(e) => setOtpNumber(e.target.value)}
              placeholder="Number in SMS"
              pattern="[0-9+\-\s()]*"
              inputMode="numeric"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
              required
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Verify'}
          </button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Go back
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
