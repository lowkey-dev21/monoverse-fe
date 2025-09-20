"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import defaultBgImage from "../../../public/assets/images/signin-bg.svg";

interface AuthPromotionalProps {
  className?: string;
  title?: string;
  description?: string;
  imageSrc?: string | StaticImageData;
  stats?: {
    label: string;
    value: string;
  }[];
  bottomContent?: React.ReactNode;
}

const AuthPromotional = ({
  className,
  title = "Cinematic Learning Experience",
  description = "Transform your skills through immersive, movie-quality courses designed by industry experts",
  imageSrc = defaultBgImage,
  stats = [
    { label: "Cinematic Courses", value: "3K+" },
    { label: "AI Mentoring", value: "24/7" },
    { label: "Active Learners", value: "50K+" },
  ],
  bottomContent,
}: AuthPromotionalProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={imageSrc}
        alt="Monoverse learning experience"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent"></div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
        <div className="max-w-md text-center backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8">{description}</p>

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom info overlay */}
      <div className="absolute bottom-8 left-8 right-8 z-20">
        {bottomContent || (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Monoverse: Where Learning Meets Cinema
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="text-primary">⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-primary">🌟</span>
                  <span>Industry Verified</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-primary font-medium">
                <span>✨</span>
                <span>Start Learning Today</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPromotional;
