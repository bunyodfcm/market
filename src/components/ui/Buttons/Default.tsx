import React from "react";

type DefaultButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
  >
    {children}
  </button>
);

export default DefaultButton;
