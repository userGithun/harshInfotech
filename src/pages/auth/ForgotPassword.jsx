import React, { useState } from "react";
import AuthButton from "../../components/layout/AuthButton";
import FormInput from "../../utils/form-input";
import AuthLayout from "../../components/layout/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
    // Handle password reset logic here
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent you a password reset link"
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <p className="text-neutral-600 mb-6">
            If an account with email <strong>{email}</strong> exists, you will
            receive a password reset link shortly.
          </p>

          <AuthButton onClick={() => setIsSubmitted(false)} variant="secondary">
            Send Another Email
          </AuthButton>

          <div className="text-center mt-6">
            <a
              href="/login"
              className="text-sm text-primary hover:text-primary-red underline-transition"
            >
              Back to Sign In
            </a>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive a reset link"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mb-6">
          <p className="text-sm text-neutral-600">
            We'll send you a link to reset your password. Please check your
            email and follow the instructions.
          </p>
        </div>

        <AuthButton type="submit">Send Reset Link</AuthButton>

        <div className="text-center mt-6">
          <a
            href="/login"
            className="text-sm text-primary hover:text-primary-red underline-transition"
          >
            Back to Sign In
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}
