import Navbar from "./components/Navbar";
import Login from "./components/Login";

function AuthIndex() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <Login />
      </div>
    </div>
  );
}

export default AuthIndex;
