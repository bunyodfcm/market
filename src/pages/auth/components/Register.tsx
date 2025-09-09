import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import DefaultButton from "../../../components/ui/Buttons/Default";
import { Icon } from "@iconify/react";
import ButtonWithIcon from "../../../components/ui/Buttons/ButtonWithIcon";
import { checkNickname, checkPhone } from "../../../services/authApi";
import { useEffect } from "react";

const Login: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputPhoneError, setInputPhoneError] = useState("");
  const [inputError, setInputError] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!phone || !password) {
      setError("Please fill in all fields");
      return;
    }

    const success = await register(phone, phone, password);
    console.log(success, "success");

    if (success) {
      navigate("/auth/verify-otp");
    } else {
      setError("Invalid credentials");
    }
  };

  const checkInputNickname = async (nickname: string) => {
    try {
      if (nickname.length < 3 || nickname.length > 20) {
        setInputError("Nickname must be between 3 and 20 characters");
        return setIsChecking(true);
      }
      const response = await checkNickname({ nickname });

      // Agar backend 200 qaytarsa → message ni chiqaramiz
      setInputError(response.message);
      return setIsChecking(true);
    } catch (error: any) {
      console.log(error, "❌ error");
      setInputError("");
      setIsChecking(false);
    }
  };
  const checkInputPhone = async (phone: string) => {
    try {
      if (phone.length < 9) {
        setInputPhoneError("Phone number must be 9 digits");
        return setIsChecking(true);
      }
      const response = await checkPhone({ phone });

      // Agar backend 200 qaytarsa → message ni chiqaramiz
      setInputPhoneError(response.message);
      return setIsChecking(true);
    } catch (error: any) {
      console.log(error, "❌ error");
      setInputPhoneError("");
      setIsChecking(false);
    }
  };

  useEffect(() => {
    if (phone) {
      checkInputPhone(phone);
    }
  }, [phone]);

  useEffect(() => {
    if (nickname) {
      checkInputNickname(nickname);
    }
  }, [nickname]);

  return (
    <div className="bg-white w-[350px] rounded-lg shadow p-6 space-y-8">
      <h2 className="text-left text-3xl font-semibold text-gray-900">
        Sign Up
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
            autoComplete="phone"
            type="tel"
            inputMode="numeric"
            maxLength={9}
            pattern="\d{9}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`mt-1 appearance-none relative block w-full pl-9 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none ${
              inputPhoneError
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-blue-500 focus:border-blue-500"
            }  focus:z-10 sm:text-sm placeholder:text-gray-400`}
            placeholder="Phone Number: 901234567"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/\D/g, ""); // faqat raqam qoldiradi
            }}
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Icon
              icon="mdi:phone"
              width="24"
              height="24"
              className="text-gray-400 z-10"
            />
          </div>
          {inputPhoneError && (
            <p className="absolute top-full left-6 bg-white border rounded-md text-sm text-red-600 mt-1 p-2 z-50">
              {inputPhoneError}
            </p>
          )}
        </div>
        <div className="relative">
          {/* <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Your Nickname
          </label> */}
          <input
            id="nickname"
            name="nickname"
            type="nickname"
            autoComplete="nickname"
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={`mt-1 appearance-none relative block w-full pl-9 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none ${
              inputError
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-blue-500 focus:border-blue-500"
            }  focus:z-10 sm:text-sm placeholder:text-gray-400`}
            placeholder="Nickname"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Icon
              icon="mdi:user"
              width="24"
              height="24"
              className="text-gray-400 z-10"
            />
          </div>
          {inputError && (
            <p className="absolute top-full left-6 bg-white border rounded-md text-sm text-red-600 mt-1 p-2 z-50">
              {inputError}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 appearance-none relative block w-full px-9 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm placeholder:text-gray-400"
            placeholder="Password"
          />

          {/* Chap tomonda lock icon */}
          <div className="absolute inset-y-0 left-2 flex items-center">
            <Icon
              icon="mdi:lock"
              width="20"
              height="20"
              className="text-gray-400 z-50"
            />
          </div>

          {/* O‘ng tomonda eye icon (bosiladigan) */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center"
          >
            <Icon
              icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
              width="20"
              height="20"
              className="text-gray-400 z-50"
            />
          </button>
        </div>

        <div className="text-sm text-gray-500">
          By signing up, you confirm that you’ve read and accepted our
          <a
            href=""
            className="font-semibold text-blue-600 hover:text-blue-500 mx-1"
          >
            User Notice
          </a>
          and{" "}
          <a
            href=""
            className="font-semibold text-blue-600 hover:text-blue-500 mx-1"
          >
            {" "}
            Privacy Policy
          </a>
          .
        </div>

        <div>
          <DefaultButton
            disabled={isLoading || isChecking}
            type="submit"
            className="w-full disabled:cursor-not-allowed didabled:opacity-50"
          >
            {isLoading ? "Registration..." : "Register"}
          </DefaultButton>
        </div>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-400">or sign up with</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <ButtonWithIcon
          className="w-full"
          icon={
            <Icon
              icon="logos:telegram"
              width="24"
              height="24"
              className="text-gray-500"
            />
          }
        >
          Telegram
        </ButtonWithIcon>
        <ButtonWithIcon
          className="w-full"
          icon={
            <Icon
              icon="flat-color-icons:google"
              width="24"
              height="24"
              className="text-gray-500"
            />
          }
        >
          Google
        </ButtonWithIcon>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <a href="" className="font-semibold text-blue-500">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Login;
