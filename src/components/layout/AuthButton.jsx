import React from "react";

export default function AuthButton({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}) {
  const baseClasses =
    "w-full py-3 px-6 font-medium hover:bg-primary tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-opacity-90 focus:ring-primary",
    secondary:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
