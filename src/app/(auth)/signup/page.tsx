"use client";

import SocialButtons from "@/components/auth/social-buttons";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/useAuth";
import { initiateRegistrationSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type SignUpFormValues = z.infer<typeof initiateRegistrationSchema>;

const OtpVerificationForm = ({
  email,
  onVerify,
  isLoading,
  error,
}: {
  email: string;
  onVerify: (otp: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onVerify(otp);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Verify Your Email</h1>
        <p className="text-gray-500">
          Enter the verification code sent to <strong>{email}</strong>
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600" htmlFor="otp">
            Verification Code
          </label>
          <Input
            id="otp"
            type="text"
            className="w-full h-12 px-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter 6-digit code"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            maxLength={6}
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 font-medium mt-4 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>Verifying...</span>
            </div>
          ) : (
            "Verify Email"
          )}
        </Button>
      </form>
    </div>
  );
};

const SignUpPage = () => {
  const {
    step,
    email,
    isLoading,
    error,
    handleInitiateSignUp,
    handleVerifyEmail,
  } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(initiateRegistrationSchema),
    defaultValues: {
      email: "",
      full_name: "",
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    await handleInitiateSignUp(data.email, data.full_name);
  };

  const handleGoogleSignup = async () => {
    // TODO: This will be implemented with Google OAuth
    console.log("Google sign-up clicked");
  };

  // If at verification step, show OTP form
  if (step === "verify") {
    return (
      <OtpVerificationForm
        email={email}
        onVerify={handleVerifyEmail}
        isLoading={isLoading}
        error={error}
      />
    );
  }

  // Otherwise show signup form
  return (
    <div className="w-full">
      {/* Logo */}
      <div className="w-full -ml-2 flex justify-center mb-8">
        <Logo imgHeight={60} imgWidth={60} className="text-3xl" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
        <p className="text-gray-500">
          Join Monoverse and start your learning journey
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Sign Up Form */}
      <div className="mb-6">
        <SocialButtons onGoogleClick={handleGoogleSignup} className="mb-4" />

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">OR</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-gray-600"
            htmlFor="full_name"
          >
            Full Name
          </label>
          <Input
            id="full_name"
            type="text"
            className={`w-full h-12 px-4 bg-gray-100 border ${
              errors.full_name ? "border-red-500" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
            placeholder="Enter your full name"
            {...register("full_name")}
          />
          {errors.full_name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.full_name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600" htmlFor="email">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            className={`w-full h-12 px-4 bg-gray-100 border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 mt-4 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>Sending verification code...</span>
            </div>
          ) : (
            "Continue with Email"
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-primary font-medium hover:text-primary/80"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
