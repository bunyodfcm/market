import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import DefaultButton from "../../../components/ui/Buttons/Default";
import { Icon } from "@iconify/react";
import ButtonWithIcon from "../../../components/ui/Buttons/ButtonWithIcon";

const Login: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nickname || !password) {
      setError("Please fill in all fields");
      return;
    }

    const success = await login(nickname, password);
    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="bg-white w-[350px] rounded-lg shadow p-6 space-y-8">
      <h2 className="text-left text-3xl font-semibold text-gray-900">Login</h2>
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
            id="nickname"
            name="nickname"
            type="nickname"
            autoComplete="nickname"
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="mt-1 appearance-none relative block w-full pl-9 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm placeholder:text-gray-400"
            placeholder="Nickname"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Icon
              icon="mdi:account-circle"
              width="24"
              height="24"
              className="text-gray-400"
            />
          </div>
        </div>

        <div className="relative">
          {/* <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label> */}
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 appearance-none relative block w-full px-9 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm placeholder:text-gray-400"
            placeholder="Password"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Icon
              icon="mdi:lock"
              width="24"
              height="24"
              className="text-gray-400"
            />
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <Icon
              icon="mdi:eye-off-outline"
              width="24"
              height="24"
              className="text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center  text-md">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <span className="text-base font-medium ml-2">Remember me</span>
          </div>
          <a
            href=""
            className="text-base font-semibold text-blue-600 hover:text-blue-500"
          >
            Forgot Password
          </a>
        </div>

        <div>
          <DefaultButton
            disabled={isLoading}
            type="submit"
            className="w-full disabled:cursor-not-allowed didabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </DefaultButton>
        </div>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          or login with
        </p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <ButtonWithIcon className="w-full" icon={<Icon icon="mdi:telegram" width="24" height="24" className="text-gray-500"/>}>Telegram</ButtonWithIcon>
        <ButtonWithIcon className="w-full" icon={<Icon icon="mdi:google" width="24" height="24" className="text-gray-500"/>}>Google</ButtonWithIcon>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p>Don't have an account?</p>
        <a href="" className="font-semibold text-blue-500">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
