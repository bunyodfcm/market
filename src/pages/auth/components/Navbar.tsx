import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-6">
      <div className="flex items-center justify-between mx-auto">
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Uz-Market</div>
        <ul
          style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}
        >
          <li style={{ margin: "0 1rem" }}>
            <a href="/" style={{ textDecoration: "none", color: "#333" }}>
              Home
            </a>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <a href="/help" style={{ textDecoration: "none", color: "#333" }}>
              Help
            </a>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <a href="/login" style={{ textDecoration: "none", color: "#333" }}>
              Login
            </a>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <a
              href="/register"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
