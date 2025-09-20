"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { authAPI } from "@/service/api";
import { AxiosError } from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { setUser, setLoading, setError, authToken } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  // Initialize auth state on first load - run only once
  useEffect(() => {
    if (initialized) return;

    const initAuth = async () => {
      try {
        setLoading(true);
        console.log("AuthProvider: Initializing auth state...");

        // Get token from session storage if not in store
        const currentToken = authToken || sessionStorage.getItem("auth_token");

        if (currentToken) {
          console.log("AuthProvider: Found auth token, verifying with API...");
          try {
            const response = await authAPI.getCurrentUser();
            if (response.data?.user) {
              console.log(
                "AuthProvider: User authenticated:",
                response.data.user
              );
              setUser(response.data.user);
            } else {
              console.log("AuthProvider: No user data returned from API");
              setUser(null);
            }
          } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 401) {
              console.log("AuthProvider: User not authenticated (401)");
              setUser(null);
              // Clear invalid token
              sessionStorage.removeItem("auth_token");
            } else {
              throw error;
            }
          }
        } else {
          console.log("AuthProvider: No auth token found");
          setUser(null);
        }
      } catch (error) {
        console.error("AuthProvider: Auth initialization error:", error);
        setError(
          error instanceof Error ? error.message : "Failed to initialize auth"
        );
        setUser(null);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    initAuth();
  }, []); // Empty dependency array - run only once on mount

  return <>{children}</>;
}
