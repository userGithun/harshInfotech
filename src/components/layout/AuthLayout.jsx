import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/sand-with-black.svg";

export default function AuthLayout({ children, title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center">
          <img src={logo} alt="Huntsman Logo" className="mx-auto h-38 w-auto" />
        </div>

        {/* Back button */}

        {/* Auth Card */}
        <div className="bg-white shadow-lg border border-neutral-200 p-4">
          <div className="text-center mb-6">
            <h2 className="font-heading text-2xl text-primary mb-2">{title}</h2>
            {subtitle && <p className="text-sm text-neutral-600">{subtitle}</p>}
          </div>
          {children}
        </div>

        <div className="mt-4 mx-auto text-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-primary hover:underline"
          >
            ← Back to Home
          </button>
        </div>
        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-neutral-500">
            © 2025 The Suits Studio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
