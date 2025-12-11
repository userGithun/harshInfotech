import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "../../components/layout/AuthButton";
import AuthLayout from "../../components/layout/AuthLayout";
import { toast } from "react-toastify";
import {
  registerUser,
  googleLogin,
  facebookLogin,
} from "../../redux/action/AuthAction/AuthAction";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from "../../api/api";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    dispatch(registerUser(payload))
      .unwrap()
      .then(() => {
        toast.success("Registered successfully!");
        reset();
      })
      .catch((err) => toast.error(err || "Registration failed"));
  };

  const handleGoogleRegister = (credentialResponse) => {
    if (!credentialResponse?.credential) {
      toast.error("Google registration failed: No token received");
      return;
    }
    dispatch(googleLogin({ token: credentialResponse.credential }))
      .unwrap()
      .then(() => toast.success("Registered with Google!"))
      .catch(() => toast.error("Google registration failed"));
  };

  const handleFacebookRegister = (data) => {
    if (!data?.accessToken) {
      toast.error("Facebook registration failed: No token received");
      return;
    }
    dispatch(facebookLogin({ token: data.accessToken }))
      .unwrap()
      .then(() => toast.success("Registered with Facebook!"))
      .catch(() => toast.error("Facebook registration failed"));
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join the Huntsman family">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
              {...register("firstName", { required: "First Name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
            {...register("confirmPassword", {
              required: "Confirm your password",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-start">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-primary border-neutral-300 focus:ring-primary focus:ring-2 mt-1"
            />
            <span className="ml-2 text-sm text-neutral-600">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-primary hover:text-primary-red underline-transition"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-primary hover:text-primary-red underline-transition"
              >
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        <AuthButton type="submit" disabled={loading}>
          {loading ? "Registering..." : "Create Account"}
        </AuthButton>

        {/* Social Registration */}
        <div className="mt-6 space-y-3">
          <GoogleOAuthProvider client_id={GOOGLE_CLIENT_ID || ""}>
            <GoogleLogin
              size="large"
              onSuccess={handleGoogleRegister}
              onError={() => toast.error("Google registration failed")}
            />
          </GoogleOAuthProvider>
          {/* <LoginSocialFacebook
            appId={FACEBOOK_APP_ID || ""}
            isOnlyGetToken
            onResolve={({ data }) => handleFacebookRegister(data)}
            onReject={() => toast.error("Facebook registration failed")}
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
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary hover:text-primary-red underline-transition font-medium"
            >
              Sign in here
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
