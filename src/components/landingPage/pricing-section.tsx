"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with Monoverse",
    features: [
      "Access to 3 free courses",
      "Basic AI tutor support",
      "Community forum access",
      "Standard video quality",
      "Mobile app access",
    ],
    popular: false,
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
  },
  {
    name: "Creator",
    price: "$19",
    period: "per month",
    description: "For serious learners ready to advance their skills",
    features: [
      "Unlimited course access",
      "Advanced AI tutor with personalized feedback",
      "HD cinematic quality videos",
      "Project-based learning",
      "Certificate of completion",
      "Priority customer support",
      "Offline course downloads",
    ],
    popular: true,
    buttonText: "Start Learning",
    buttonVariant: "default" as const,
  },
  {
    name: "Professional",
    price: "$39",
    period: "per month",
    description: "For professionals seeking accredited education",
    features: [
      "Everything in Creator",
      "For-credit university courses",
      "Industry certification programs",
      "1-on-1 mentor sessions",
      "Career placement assistance",
      "Enterprise-grade security",
      "Custom learning paths",
      "Analytics dashboard",
    ],
    popular: false,
    buttonText: "Go Professional",
    buttonVariant: "outline" as const,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16  bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-dmsans mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free exploration to professional certification, Monoverse has a
            plan that fits your goals and budget. Experience cinematic learning
            like never before.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3  gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl border-2 transition-all duration-300 hover:scale-105 min-h-[550px] max-h-[550px] flex flex-col ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20 bg-white"
                  : "border-gray-200 hover:border-primary/50 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col justify-between">
                <ul className="space-y-2 mb-6">
                  {plan.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.features.length > 5 && (
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-snug">
                        +{plan.features.length - 5} more features
                      </span>
                    </li>
                  )}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full h-12 text-base mb-5 font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                      : ""
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include our 30-day money-back guarantee
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
