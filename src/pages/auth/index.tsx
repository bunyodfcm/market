
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import OTP from "./components/OTP";

function AuthIndex() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-otp" element={<OTP />} />
          {/* default bo'lsa login sahifasiga redirect qiladi */}
          <Route path="*" element={<Navigate to="login" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthIndex;
