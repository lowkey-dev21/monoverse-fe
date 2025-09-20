"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGoogleAuth } from "@/hooks/useAuth";

/**
 * Component that handles the actual authentication logic using search params
 */
function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleGoogleAuth } = useGoogleAuth();

  useEffect(() => {
    // Parse the URL parameters
    const error = searchParams.get("error");
    const token = searchParams.get("access_token");

    const handleCallback = async () => {
      if (error) {
        console.error("Authentication error:", error);
        router.push("/signin?error=authentication_failed");
        return;
      }

      if (token) {
        try {
          // Fetch user profile using the access token
          const userInfoResponse = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const userInfo = await userInfoResponse.json();

          // Process the authentication
          await handleGoogleAuth(token, userInfo);

          // Redirect to home page
          router.replace("/home");
        } catch (error) {
          console.error("Error processing authentication:", error);
          router.push("/signin?error=profile_fetch_failed");
        }
      } else {
        // If no token is present, redirect back to signin
        router.push("/signin");
      }
    };

    handleCallback();
  }, [handleGoogleAuth, router, searchParams]); // Added missing dependencies

  return (
    <div className="text-center">
      <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
      <h1 className="text-xl font-semibold">Completing authentication...</h1>
      <p className="text-gray-500 mt-2">
        Please wait while we verify your credentials
      </p>
    </div>
  );
}

/**
 * This page handles OAuth redirects and callbacks.
 * It's useful for completing the authentication flow when using redirect mode.
 */
export default function AuthCallbackPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Suspense
        fallback={
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
            <h1 className="text-xl font-semibold">Loading...</h1>
          </div>
        }
      >
        <AuthCallbackContent />
      </Suspense>
    </div>
  );
}
