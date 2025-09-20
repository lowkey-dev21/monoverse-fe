"use client";

import React, { ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface GoogleAuthProviderProps {
  children: ReactNode;
}

export function GoogleAuthProvider({ children }: GoogleAuthProviderProps) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  // If client ID is not available, render children without the provider
  // This prevents the "Missing required parameter client_id" error
  if (!clientId) {
    console.warn(
      "Google Client ID is not set. Google OAuth features will be disabled. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your .env.local file."
    );
    return <>{children}</>;
  }

  return (
    <GoogleOAuthProvider
      clientId={clientId}
      onScriptLoadError={() => {
        console.error("Failed to load Google OAuth script");
      }}
    >
      {children}
    </GoogleOAuthProvider>
  );
}
