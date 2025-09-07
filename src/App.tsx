import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/auth/components/Login.tsx";
import Register from "./pages/auth/components/Register.tsx";
import AdminRoutes from "./routes/AdminRoutes";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import "./index.css";
import OTP from "./pages/auth/components/OTP.tsx";
import AuthIndex from "./pages/auth/index.tsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth/*" element={<AuthIndex />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<OTP />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminRoutes />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/auth" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
