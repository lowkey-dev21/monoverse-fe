"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";
import { authAPI } from "@/service/api";

const HomePage = () => {
  const router = useRouter();
  const { handleLogout, isLoading: isLoggingOut } = useLogout();
  const { user, isAuthenticated, setUser, isLoading, authToken } =
    useAuthStore();
  const [localLoading, setLocalLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Fetch user data directly from the API - run only once on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Attempting to fetch user data from API...");

        // Get current auth token from store or session storage
        const currentToken = authToken || sessionStorage.getItem("auth_token");
        console.log(
          "Auth token:",
          currentToken
            ? `Present (${currentToken.substring(0, 15)}...)`
            : "Not present"
        );

        if (currentToken) {
          try {
            // Use the token to fetch user data
            const response = await authAPI.getCurrentUser();

            if (response.data?.data?.user) {
              console.log(
                "User data fetched successfully:",
                response.data.data.user
              );
              setUser(response.data.data.user);
            } else {
              console.log("No user data returned from API");
              setFetchError(
                "Could not retrieve user data. Please try logging in again."
              );
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            setFetchError(
              "Error retrieving user data: " +
                (error instanceof Error ? error.message : "Unknown error")
            );
          }
        } else {
          // No token, check URL params as fallback
          if (!user && window.location.search.includes("userData=")) {
            try {
              const urlParams = new URLSearchParams(window.location.search);
              const userDataParam = urlParams.get("userData");

              if (userDataParam) {
                const userData = JSON.parse(decodeURIComponent(userDataParam));
                console.log("Setting user data from URL param:", userData);
                setUser(userData);

                // Clean up the URL
                const cleanUrl = window.location.pathname;
                window.history.replaceState({}, document.title, cleanUrl);
              }
            } catch (paramError) {
              console.error("Error parsing user data from URL:", paramError);
              setFetchError("Error reading user data from URL");
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setFetchError(
          "Failed to fetch user data. Please try refreshing the page."
        );

        // Still try to use URL params as fallback
        if (!user && window.location.search.includes("userData=")) {
          try {
            const urlParams = new URLSearchParams(window.location.search);
            const userDataParam = urlParams.get("userData");

            if (userDataParam) {
              const userData = JSON.parse(decodeURIComponent(userDataParam));
              console.log(
                "Setting user data from URL param as fallback:",
                userData
              );
              setUser(userData);

              // Clean up the URL
              const cleanUrl = window.location.pathname;
              window.history.replaceState({}, document.title, cleanUrl);
            }
          } catch (paramError) {
            console.error("Error parsing user data from URL:", paramError);
          }
        }
      } finally {
        // Short delay to let state update
        setTimeout(() => {
          setLocalLoading(false);
        }, 500);
      }
    };

    fetchUser();
  }, [setUser, authToken]); // Empty dependency array - run only once on mount

  console.log(
    "Rendering HomePage, user:",
    user,
    "isAuthenticated:",
    isAuthenticated
  );

  // Show loading state
  if (isLoading || localLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  // Fallback if no user data is available
  const displayUser = user || {
    name: "Guest User",
    email: "Please sign in to see your profile",
    role: "GUEST",
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Welcome to Monoverse</h1>

          {fetchError && (
            <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-md border border-red-200">
              {fetchError}
            </div>
          )}

          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {displayUser.name || "Not provided"}
              </p>
              <p>
                <span className="font-medium">Email:</span> {displayUser.email}
              </p>
              <p>
                <span className="font-medium">Account type:</span>{" "}
                {displayUser.role}
              </p>
              {!isAuthenticated && (
                <p className="text-sm text-gray-500 mt-2">
                  Note: You are viewing this page in guest mode. Some features
                  may be limited.
                </p>
              )}
              {user && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm text-green-600">
                    ✓ You are successfully authenticated
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">What&apos;s Next?</h2>
              <p className="text-gray-600">
                Explore our learning paths and courses to begin your educational
                journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => router.push("/learn")} className="px-6">
                Explore Courses
              </Button>

              {isAuthenticated ? (
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="px-6"
                >
                  {isLoggingOut ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                      <span>Logging out...</span>
                    </div>
                  ) : (
                    "Sign Out"
                  )}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => router.push("/signin")}
                  className="px-6"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
