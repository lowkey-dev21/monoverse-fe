"use client";

import Image from "next/image";
import { ReactNode } from "react";
import bg from "../../../public/assets/images/signin-bg.svg";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-white">
      {/* SVG decoration in top-right corner */}
      <Image
        className="z-[1] rotate-180 absolute -top-3 right-0 h-[340px] w-auto max-w-[540px] object-contain"
        src={bg}
        alt="Background decoration top"
        width={400}
        height={340}
        priority
      />

      {/* SVG decoration in bottom-left corner */}
      <Image
        className="z-[1] absolute -bottom-3 left-0 h-[340px] w-auto max-w-[540px] object-contain"
        src={bg}
        alt="Background decoration bottom"
        width={400}
        height={340}
      />

      {/* Centered content */}
      <div className="z-10 w-full max-w-md px-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
