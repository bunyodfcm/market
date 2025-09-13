import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import DefaultButton from "../../../components/ui/Buttons/Default";
import { Icon } from "@iconify/react";
import ButtonWithIcon from "../../../components/ui/Buttons/ButtonWithIcon";
import { useValidation } from "../../../hooks/useValidation";
import { validateNickname, validatePhone } from "../../../utils/validation";
import { checkNickname, checkPhone } from "../../../services/authApi";

const Login: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  // Custom validation
  const nicknameError = useValidation(nickname, validateNickname, 500);
  const phoneError = useValidation(phone, validatePhone, 500);

  //backend validation
   const [inputPhoneError, setInputPhoneError] = useState("");
  const [inputNicknameError, setInputNicknameError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!phone || !password) {
      setError("Please fill in all fields");
      return;
    }

    const success = await register( nickname, phone, password);
    console.log(success, "success");

    if (success) {
      navigate("/auth/verify-otp");
    } else {
      setError("Invalid credentials");
    }
  };

   const checkInputNickname = async (nickname: string) => {
    try {
      if (nickname.length < 3) return;
      const response = await checkNickname({ nickname });
      setInputNicknameError(response.message || "");
    } catch (err) {
      setInputNicknameError("");
    }
  };

  const checkInputPhone = async (phone: string) => {
    try {
      if (phone.length < 9) return;
      const response = await checkPhone({ phone });
      setInputPhoneError(response.message || "");
    } catch (err) {
      setInputPhoneError("");
    }
  };

  // useEffect → nickname va phone yozilganda backend check
  useEffect(() => {
    if (nickname) checkInputNickname(nickname);
  }, [nickname]);

  useEffect(() => {
    if (phone) checkInputPhone(phone);
  }, [phone]);

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

        {/* Phone */}
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={9}
            pattern="\d{9}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`mt-1 block w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none ${
              phoneError
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            } sm:text-sm placeholder:text-gray-400`}
            placeholder="Phone Number: 901234567"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Icon icon="mdi:phone" width="24" height="24" className="text-gray-400" />
          </div>
          {(phoneError || inputPhoneError) && <p className="absolute top-full left-5 mt-1 text-sm text-red-600">{(phoneError || inputPhoneError)}</p>}
        </div>

        {/* Nickname */}
        <div className="relative">
          <input
            id="nickname"
            name="nickname"
            type="text"
            minLength={3}
            maxLength={20}
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={`mt-1 block w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none ${
              nicknameError
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            } sm:text-sm placeholder:text-gray-400`}
            placeholder="Nickname"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Icon icon="mdi:user" width="24" height="24" className="text-gray-400" />
          </div>
          {(nicknameError || inputNicknameError) && (
            <p className="absolute top-full left-5 mt-1 text-sm text-red-600">{nicknameError || inputNicknameError }</p>)
          }
        </div>

        {/* Password */}
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder:text-gray-400"
            placeholder="Password"
          />
          <div className="absolute inset-y-0 left-2 flex items-center">
            <Icon icon="mdi:lock" width="20" height="20" className="text-gray-400" />
          </div>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center"
          >
            <Icon
              icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
              width="20"
              height="20"
              className="text-gray-400"
            />
          </button>
        </div>

        <div className="text-sm text-gray-500">
          By signing up, you confirm that you’ve read and accepted our
          <a href="" className="font-semibold text-blue-600 hover:text-blue-500 mx-1">
            User Notice
          </a>
          and
          <a href="" className="font-semibold text-blue-600 hover:text-blue-500 mx-1">
            Privacy Policy
          </a>
        </div>

        <DefaultButton
          disabled={isLoading || !!nicknameError || !!phoneError}
          type="submit"
          className="w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Registration..." : "Register"}
        </DefaultButton>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-400">or sign up with</p>
      </div>
      <div className="flex justify-between gap-4">
        <ButtonWithIcon
          className="w-full"
          icon={<Icon icon="logos:telegram" width="24" height="24" />}
        >
          Telegram
        </ButtonWithIcon>
        <ButtonWithIcon
          className="w-full"
          icon={<Icon icon="flat-color-icons:google" width="24" height="24" />}
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
