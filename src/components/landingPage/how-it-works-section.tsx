"use client";
import { ArrowRight, Play, BookOpen, Trophy, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Play,
    title: "Discover & Explore",
    description:
      "Browse our cinematic course catalog and choose learning paths that match your interests and career goals.",
    highlight: "3,000+ courses available",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "Learn Interactively",
    description:
      "Dive into immersive, film-quality content with your AI tutor providing personalized guidance every step of the way.",
    highlight: "AI-powered assistance",
  },
  {
    step: "03",
    icon: Users,
    title: "Practice & Collaborate",
    description:
      "Apply your knowledge through hands-on projects and connect with a community of fellow learners and mentors.",
    highlight: "Real-world projects",
  },
  {
    step: "04",
    icon: Trophy,
    title: "Achieve & Advance",
    description:
      "Earn certificates, university credits, and industry recognition that advance your career and educational journey.",
    highlight: "Accredited results",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16  mx-auto bg- ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-dmsans mb-4">
            How Monoverse Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey from curious learner to certified professional in four
            simple steps. Experience education that adapts to you, not the other
            way around.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-30"></div>

              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative text-center group">
                      {/* Step Circle */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {step.highlight}
                        </div>
                      </div>

                      {/* Arrow */}
                      {index < steps.length - 1 && (
                        <ArrowRight className="absolute top-24 -right-4 w-8 h-8 text-primary/50 hidden lg:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex gap-6 items-start">
                  {/* Step Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {step.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-600 text-sm">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3,000+</div>
            <div className="text-gray-600 text-sm">Courses Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray-600 text-sm">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
