import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Monoverse’s cinematic modules made learning feel like an interactive film. The AI tutor guided me through real-world projects, not just lectures.",
      author: "Jordan Lee",
      title: "Product Designer & Lifelong Learner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      link: "See Cinematic Demo Module",
      linkHref: "#",
      type: "testimonial",
    },
    {
      id: 2,
      quote:
        "The AI-powered project guide gave instant feedback and personalized my learning path. I earned a certificate that’s actually recognized by my university.",
      author: "Priya Nair",
      title: "Computer Science Student",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      link: "Explore For-Credit Courses",
      linkHref: "#",
      type: "testimonial",
    },
    {
      id: 3,
      quote:
        "As an instructor, Monoverse’s marketplace let me launch a cinematic course and get paid instantly. The Stripe Connect integration is seamless!",
      author: "Dr. Alex Mensah",
      title: "Instructor & AI Coach",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      link: "List Your Course on Monoverse",
      linkHref: "#",
      type: "testimonial",
    },
    {
      id: 4,
      quote:
        "The referral system and cohort analytics helped our learning community grow fast. Monoverse is Netflix meets Coursera, but smarter.",
      author: "Sofia Martinez",
      title: "Community Manager, EdTech Startup",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      link: "See Community Features",
      linkHref: "#",
      type: "testimonial",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/10">
      <div className="container mx-auto ">
        <h2 className="text-2xl md:text-3xl font-dmsans font-bold mb-12 text-gray-900 max-w-4xl mx-auto leading-tight">
          Join others transforming their lives through learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
