import { AuthProvider } from "@/components/auth/auth-provider";
import { GoogleAuthProvider } from "@/components/auth/google-auth-provider";
import { CartProvider } from "@/hooks/useCart";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monoverse",
  description: "Find your path to knowledge with Monoverse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat antialiased">
        <GoogleAuthProvider>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </GoogleAuthProvider>
      </body>
    </html>
  );
}
