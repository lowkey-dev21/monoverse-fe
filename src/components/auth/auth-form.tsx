"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SocialButtons from "./social-buttons";

interface AuthFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  rememberMe: boolean;
}

interface AuthFormProps {
  type: "signin" | "signup";
  className?: string;
  onSubmit: (data: AuthFormData) => Promise<void>;
  socialProviders?: {
    google?: boolean;
    github?: boolean;
    facebook?: boolean;
    apple?: boolean;
  };
}

const AuthForm = ({
  type,
  className,
  onSubmit,
  socialProviders = { google: true },
}: AuthFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (type === "signup" && formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      await onSubmit(formData);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`${provider} sign-in clicked`);
    // Implement social auth logic
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {type === "signin" ? "Sign into your account" : "Create your account"}
      </h1>
      <p className="text-gray-600 mb-8">
        {type === "signin"
          ? "The best cinematic courses and AI-powered learning."
          : "Join thousands of students learning through cinematic courses."}
      </p>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Social Buttons */}
      {Object.values(socialProviders).some(Boolean) && (
        <>
          <SocialButtons
            className="mb-8"
            onGoogleClick={
              socialProviders.google
                ? () => handleSocialAuth("google")
                : undefined
            }
            onGithubClick={
              socialProviders.github
                ? () => handleSocialAuth("github")
                : undefined
            }
            onFacebookClick={
              socialProviders.facebook
                ? () => handleSocialAuth("facebook")
                : undefined
            }
            onAppleClick={
              socialProviders.apple
                ? () => handleSocialAuth("apple")
                : undefined
            }
            isLoading={isLoading}
          />

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>
        </>
      )}

      {/* Auth Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {type === "signup" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={e => handleInputChange("name", e.target.value)}
              className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={e => handleInputChange("email", e.target.value)}
            className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            {type === "signin" && (
              <Link
                href="/forgot-password"
                className="text-xs text-primary hover:text-primary/80"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={e => handleInputChange("password", e.target.value)}
              className="w-full h-12 px-4 pr-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="••••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {type === "signup" && (
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={formData.confirmPassword}
                onChange={e =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="w-full h-12 px-4 pr-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                      clipRule="evenodd"
                    />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}

        {type === "signin" && (
          <div className="flex items-center mt-2">
            <div
              onClick={() =>
                handleInputChange("rememberMe", !formData.rememberMe)
              }
              className={`h-4 w-4 rounded-sm cursor-pointer border flex items-center justify-center ${
                formData.rememberMe
                  ? "bg-primary border-primary"
                  : "border-gray-300"
              }`}
            >
              {formData.rememberMe && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span
              className="ml-2 text-sm text-gray-600 cursor-pointer"
              onClick={() =>
                handleInputChange("rememberMe", !formData.rememberMe)
              }
            >
              Remember me
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 font-medium bg-primary hover:bg-primary/90 text-white rounded-lg mt-4 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>
                {type === "signin" ? "Signing in..." : "Creating account..."}
              </span>
            </div>
          ) : type === "signin" ? (
            "Sign in"
          ) : (
            "Create account"
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        {type === "signin" ? (
          <p className="text-gray-600 text-sm">
            Can&apos;t sign in?{" "}
            <Link
              href="/reset-password"
              className="underline text-primary hover:text-primary/80"
            >
              Reset password
            </Link>
          </p>
        ) : (
          <p className="text-gray-600 text-sm">
            By creating an account, you agree to our{" "}
            <Link
              href="/terms"
              className="underline text-primary hover:text-primary/80"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline text-primary hover:text-primary/80"
            >
              Privacy Policy
            </Link>
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        {type === "signin" ? (
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary font-medium hover:text-primary/80 underline"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-primary font-medium hover:text-primary/80 underline"
            >
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
