import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  googleLogin,
  facebookLogin,
} from "../../redux/action/AuthAction/AuthAction";
import AuthButton from "../../components/layout/AuthButton";
import AuthLayout from "../../components/layout/AuthLayout";
import { toast } from "react-toastify";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((err) => toast.error(err?.message || "Login failed"));
  };

  const handleGoogleLogin = (credentialResponse) => {
    if (!credentialResponse?.credential) {
      toast.error("Google login failed: No token received");
      return;
    }
    dispatch(googleLogin({ token: credentialResponse.credential }))
      .unwrap()
      .then(() => toast.success("Logged in with Google!"))
      .catch(() => toast.error("Google login failed"));
  };

  const handleFacebookLogin = (data) => {
    if (!data?.accessToken) {
      toast.error("Facebook login failed: No token received");
      return;
    }
    dispatch(facebookLogin({ token: data.accessToken }))
      .unwrap()
      .then(() => toast.success("Logged in with Facebook!"))
      .catch(() => toast.error("Facebook login failed"));
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-primary border-neutral-300 focus:ring-primary focus:ring-2"
            />
            <span className="ml-2 text-sm text-neutral-600">Remember me</span>
          </label>

          <a
            href="/forgot-password"
            className="text-sm text-primary hover:text-primary-red underline-transition"
          >
            Forgot password?
          </a>
        </div>

        <AuthButton
          type="submit"
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
        >
          {loading ? "Signing in..." : "Sign In"}
        </AuthButton>

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error.message || "Internal Server Error"}
          </p>
        )}

        <div className="mt-6 space-y-3">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID || ""}>
            <GoogleLogin
              size="large"
              onSuccess={handleGoogleLogin}
              onError={() => toast.error("Google login failed")}
            />
          </GoogleOAuthProvider>

          {/* <LoginSocialFacebook
            appId={FACEBOOK_APP_ID || ""}
            isOnlyGetToken
            onResolve={({ data }) => handleFacebookLogin(data)}
            onReject={() => toast.error("Facebook login failed")}
          >
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border rounded-lg text-sm font-medium hover:bg-neutral-100"
            >
              Continue with Facebook
            </button>
          </LoginSocialFacebook> */}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-neutral-600">
            {"Don't have an account? "}
            <a
              href="/register"
              className="text-primary hover:text-primary-red underline-transition font-medium"
            >
              Create one here
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
