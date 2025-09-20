"use client";

import { HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/auth.store";

interface SocialButtonProps extends HTMLAttributes<HTMLButtonElement> {
  provider: "google" | "github" | "facebook" | "apple";
  label?: string;
  isLoading?: boolean;
}

const SocialButton = ({
  provider,
  label,
  isLoading = false,
  className,
  ...props
}: SocialButtonProps) => {
  const icons = {
    google: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.647c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
      </svg>
    ),
    apple: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.695 13.037c.035 3.595 3.162 4.784 3.195 4.802-.027.084-.498 1.701-1.639 3.371-.986 1.442-2.01 2.88-3.623 2.907-1.584.029-2.092-.938-3.903-.938-1.811 0-2.377.909-3.879.966-1.557.058-2.744-1.561-3.739-2.997-2.035-2.941-3.589-8.311-1.5-11.934 1.032-1.799 2.885-2.939 4.891-2.966 1.526-.029 2.962 1.029 3.896 1.029.934 0 2.687-1.272 4.526-1.086 1.05.043 3.539.43 5.215 3.225-.13.093-3.117 1.819-3.088 5.411m-3.598-10.54c-.825 1.002-2.178 1.779-3.49 1.675-.181-1.389.49-2.857 1.254-3.784 1.033-.969 2.304-1.708 3.508-1.758.154 1.428-.394 2.857-1.272 3.867"></path>
      </svg>
    ),
  };

  const labels = {
    google: label || "Continue with Google",
    github: label || "Continue with GitHub",
    facebook: label || "Continue with Facebook",
    apple: label || "Continue with Apple",
  };

  return (
    <button
      type="button"
      className={cn(
        "w-full h-12 gap-3 bg-white border flex items-center justify-center border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
      ) : (
        icons[provider]
      )}
      <span>{labels[provider]}</span>
    </button>
  );
};

export const GoogleButton = ({
  onSuccess,
  onError,
  isLoading,
}: {
  onSuccess: (credentialResponse: unknown) => void;
  onError?: () => void;
  isLoading?: boolean;
}) => {
  const { handleGoogleAuth } = useGoogleAuth();
  const { setToken } = useAuthStore();
  const router = useRouter();

  // Using improved popup flow with better error handling
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        console.log("Google login successful, fetching user profile");

        // Fetch user profile using the access token
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const userInfo = await userInfoResponse.json();
        console.log("User profile fetched:", userInfo.email);

        // Pass the token and profile to our handler
        const authResponse = await handleGoogleAuth(
          tokenResponse.access_token,
          userInfo
        );

        // Extract token from response and store it
        //@ts-expect-error - authResponse type is complex and may not match expected structure
        if (authResponse?.data?.data?.token) {
          console.log("Token received from server, setting in auth store");
          //@ts-expect-error - token type may not match expected type
          setToken(authResponse.data?.data?.token);
        } else {
          console.warn("No token received from server");
        }

        // Call the onSuccess callback (if provided)
        if (onSuccess) {
          onSuccess(tokenResponse);
        }

        // Wait a moment for state to update
        await new Promise(resolve => setTimeout(resolve, 500));

        // Navigate to home page after successful authentication
        router.replace("/home");
      } catch (error) {
        console.error("Error in Google authentication flow:", error);
        if (onError) {
          onError();
        }
      }
    },
    onError: errorResponse => {
      console.error("Google login error:", errorResponse);
      if (onError) {
        onError();
      }
    },
    flow: "implicit", // Use implicit flow for better compatibility
    scope: "email profile", // Request only what we need
  });

  return (
    <SocialButton
      provider="google"
      onClick={() => {
        try {
          login();
        } catch (error) {
          console.error("Failed to initiate Google login:", error);
          if (onError) onError();
        }
      }}
      isLoading={isLoading}
    />
  );
};

export const SocialButtons = ({
  className,
  onGoogleClick,
  onGithubClick,
  onFacebookClick,
  onAppleClick,
  isLoading,
}: {
  className?: string;
  onGoogleClick?: () => void;
  onGithubClick?: () => void;
  onFacebookClick?: () => void;
  onAppleClick?: () => void;
  isLoading?: boolean;
}) => {
  // Check if Google client ID is available
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const isGoogleEnabled = !!googleClientId;

  return (
    <div className={cn("w-full", className)}>
      {onGoogleClick && isGoogleEnabled ? (
        <GoogleButton
          onSuccess={() => onGoogleClick?.()}
          onError={() => console.error("Google sign-in failed")}
          isLoading={isLoading}
        />
      ) : onGoogleClick ? (
        <SocialButton
          provider="google"
          onClick={() => {
            console.warn(
              "Google OAuth is disabled. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your .env.local file."
            );
            onGoogleClick?.();
          }}
          isLoading={isLoading}
        />
      ) : null}
      {onGithubClick && (
        <SocialButton
          provider="github"
          onClick={onGithubClick}
          isLoading={isLoading}
          className="mt-3"
        />
      )}
      {onFacebookClick && (
        <SocialButton
          provider="facebook"
          onClick={onFacebookClick}
          isLoading={isLoading}
          className="mt-3"
        />
      )}
      {onAppleClick && (
        <SocialButton
          provider="apple"
          onClick={onAppleClick}
          isLoading={isLoading}
          className="mt-3"
        />
      )}
    </div>
  );
};

export default SocialButtons;
