"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Star,
  GraduationCap,
  Bot,
  Video,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-purple-600 to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">
                4.9/5 from 50,000+ students
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Learning Journey
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Starts Today
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join the revolution in education. Experience cinematic learning
              with AI-powered guidance, earn real credentials, and unlock your
              potential with Monoverse.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-foreground text-card border-o h-[50px] hover:bg-foreground/80 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 h-[50px] border-none  text-foreground hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-lg font-semibold mb-1">
                University Accredited
              </div>
              <div className="text-white/80 text-sm">
                Earn real credits and certifications
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-lg font-semibold mb-1">
                AI-Powered Learning
              </div>
              <div className="text-white/80 text-sm">
                Personalized tutoring and feedback
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Video className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-lg font-semibold mb-1">
                Cinematic Quality
              </div>
              <div className="text-white/80 text-sm">
                Film-quality educational content
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/90 text-lg">
              <span className="font-semibold">30-Day Money-Back Guarantee</span>
              • No Risk • Cancel Anytime • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
