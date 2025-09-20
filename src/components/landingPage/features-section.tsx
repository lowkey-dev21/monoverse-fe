"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Video, GraduationCap, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Cinematic Learning Experience",
    description:
      "Immerse yourself in film-quality educational content that feels more like watching a movie than traditional online learning.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Personal Tutor",
    description:
      "Get instant feedback, personalized guidance, and adaptive learning paths powered by advanced AI technology.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "For-Credit University Courses",
    description:
      "Earn real university credits and industry certifications that advance your career and educational goals.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Collaborative Learning Community",
    description:
      "Connect with fellow learners, share projects, and participate in group activities that enhance your learning experience.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Interactive Project-Based Learning",
    description:
      "Apply what you learn through hands-on projects, simulations, and real-world scenarios designed by industry experts.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Progress Tracking & Analytics",
    description:
      "Monitor your learning journey with detailed analytics, achievement badges, and personalized progress reports.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-dmsans mb-4">
            Why Choose Monoverse?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with our innovative platform that
            combines cutting-edge technology, cinematic storytelling, and
            personalized learning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group border border-gray-200 rounded-2xl hover:border-primary/50 transition-all duration-300  hover:scale-105 bg-white overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of learners who have already discovered the
              Monoverse difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
