"use client";

import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";
;

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { isAuthenticated, isLoading, user } = useAuthStore();


  // Debug message to check state - run only once when component mounts
  useEffect(() => {
    // Get token from session storage directly to debug
    let authToken = null;
    if (typeof window !== "undefined") {
      try {
        authToken = sessionStorage.getItem("auth_token");
      } catch (e) {
        console.error("Error reading auth storage:", e);
      }
    }

    console.log("Home layout mounted - Initial auth state:", {
      isAuthenticated,
      isLoading,
      hasUser: !!user,
      hasToken: !!authToken,
      tokenPreview: authToken ? `${authToken.substring(0, 15)}...` : null,
    });
  }, [isAuthenticated, isLoading, user]); // Empty dependency array - run only once on mount
  return <div className="min-h-screen bg-gray-50">{children}</div>;
};

export default HomeLayout;
