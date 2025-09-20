"use client";

import { authAPI } from "@/service/api";
import { useAuthStore } from "@/store/auth.store";
import { GoogleOAuthProfile } from "@/types/auth.types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Hook for initializing auth state
export const useAuthInit = () => {
  const { user, setUser, setLoading, setError, authToken } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      if (initialized) return;

      try {
        setLoading(true);
        console.log("Initializing auth state...");

        // Check for auth cookies - this helps debug if cookies are actually present
        if (typeof document !== "undefined") {
          const cookies = document.cookie;
          console.log("Current cookies:", cookies);
          const hasAuthCookie = cookies.includes("auth_token=");
          console.log("Auth cookie present:", hasAuthCookie);
          console.log(
            "Auth token in store:",
            authToken ? "Present" : "Not present"
          );
        }

        // If we have a token in the store, we should be able to authenticate
        if (authToken) {
          console.log("Found auth token in store, using it for authentication");
        }

        // Attempt to get the current user from the API
        try {
          const response = await authAPI.getCurrentUser();
          if (response.data?.user) {
            console.log("User authenticated:", response.data.user);
            setUser(response.data.user);
          } else {
            console.log("No user data returned from API");
          }
        } catch (error) {
          if (error instanceof AxiosError && error.response?.status === 401) {
            console.log("User not authenticated (401)");
            // Clear user state to be sure
            setUser(null);
          } else {
            throw error; // Re-throw for the outer catch block
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        console.error(
          "Error details:",
          error instanceof AxiosError
            ? {
                status: error.response?.status,
                data: error.response?.data,
                headers: error.response?.headers,
              }
            : error
        );

        setError(
          error instanceof Error ? error.message : "Failed to initialize auth"
        );
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    initAuth();
  }, [setUser, setLoading, setError, authToken, initialized]); // Empty dependency array - run only once on mount

  return { initialized, user };
};

// Hook for OTP-based sign-up process
export const useSignUp = () => {
  const router = useRouter();
  const { initiateRegistration, verifyEmail, isLoading, error } =
    useAuthStore();
  const [step, setStep] = useState<"form" | "verify">("form");
  const [email, setEmail] = useState("");

  const handleInitiateSignUp = async (email: string, fullName: string) => {
    try {
      await initiateRegistration(email, fullName);
      setEmail(email);
      setStep("verify");
    } catch (error) {
      // Error is already handled in the store
      console.log(error)
    }
  };

  const handleVerifyEmail = async (otp: string) => {
    try {
      await verifyEmail(email, otp);
      router.replace("/home"); // Navigate to home page on success
    } catch (error) {
      // Error is already handled in the store
      console.log(error)
    }
  };

  return {
    step,
    email,
    isLoading,
    error,
    handleInitiateSignUp,
    handleVerifyEmail,
    resetStep: () => setStep("form"),
  };
};

// Hook for OTP-based login process
export const useLogin = () => {
  const router = useRouter();
  const { initiateLogin, verifyLogin, isLoading, error } = useAuthStore();
  const [step, setStep] = useState<"form" | "verify">("form");
  const [email, setEmail] = useState("");

  const handleInitiateLogin = async (email: string) => {
    try {
      await initiateLogin(email);
      setEmail(email);
      setStep("verify");
    } catch (error) {
      // Error is already handled in the store
      console.log(error)
    }
  };

  const handleVerifyLogin = async (otp: string) => {
    try {
      await verifyLogin(email, otp);
      router.replace("/home"); // Navigate to home page on success
    } catch (error) {
      // Error is already handled in the store
      console.log(error)
    }
  };

  return {
    step,
    email,
    isLoading,
    error,
    handleInitiateLogin,
    handleVerifyLogin,
    resetStep: () => setStep("form"),
  };
};

// Hook for Google OAuth
export const useGoogleAuth = () => {
  const { googleAuth, isLoading, error } = useAuthStore();

  const handleGoogleAuth = async (
    token: string,
    profile: GoogleOAuthProfile
  ) => {
    try {
      const response = await googleAuth(token, profile);
      return response;
    } catch (error) {
      // Error is already handled in the store
      throw error; // Re-throw to allow caller to handle
    }
  };

  return {
    isLoading,
    error,
    handleGoogleAuth,
  };
};

// Hook for logout
export const useLogout = () => {
  const router = useRouter();
  const { logout, isLoading, error } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/signin");
    } catch (error) {
      // Error is already handled in the store
      console.log(error);
    }
  };

  return {
    isLoading,
    error,
    handleLogout,
  };
};

// Hook for authenticated routes
export const useRequireAuth = (redirectTo = "/signin") => {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.replace(redirectTo);
      }
      setIsChecking(false);
    }
  }, [isAuthenticated, isLoading, redirectTo, router]); // Removed router and redirectTo from dependencies

  return { user, isLoading: isLoading || isChecking };
};

// Hook for checking user role
export const useRequireRole = (requiredRoles: string[], redirectTo = "/") => {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.replace("/signin");
        return;
      }

      if (user && !requiredRoles.includes(user.role)) {
        router.replace(redirectTo);
      }

      setIsChecking(false);
    }
  }, [isAuthenticated, isLoading, user, redirectTo,requiredRoles,router]); // Removed router, redirectTo, and requiredRoles from dependencies

  return { user, isLoading: isLoading || isChecking };
};
