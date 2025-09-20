import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Testimonial = {
  id: number | string;
  quote: string;
  author: string;
  title?: string;
  avatar?: string;
  link: string;
  linkHref: string;
  type?: "testimonial" | "survey" | string;
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <Card
      key={testimonial.id}
      className="p-6 bg-background border h-[350px] transition-shadow"
    >
      <CardContent className="p-0  flex flex-col justify-between h-full">
        <div className="flex-1">
          <div className="text-4xl text-gray-400 mb-3 font-dmsans">
            &ldquo;&rdquo;
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {testimonial.quote}
            {testimonial.type === "survey" && (
              <span className="text-primary font-medium">
                {" "}
                {testimonial.author}
              </span>
            )}
          </p>
        </div>

        <div className="pt-4  border-gray-100 space-y-4">
          {testimonial.type === "survey" ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-orange-500 text-xs font-bold">
                      SO
                    </span>
                  </div>
                </div>
                <span className="text-orange-500 font-medium text-sm">
                  stackoverflow
                </span>
              </div>
              <p className="text-gray-500 text-xs">
                {/* No stats for new testimonials */}
              </p>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                {testimonial.avatar ? (
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                ) : null}
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {testimonial.author
                    .split(" ")
                    .map(n => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-xs leading-tight">
                  {testimonial.title}
                </p>
              </div>
            </div>
          )}

          <a
            href={testimonial.linkHref}
            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center group"
          >
            {testimonial.link}
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
