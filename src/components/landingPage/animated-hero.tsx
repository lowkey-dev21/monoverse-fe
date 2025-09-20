import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedHero() {
  const MonoverseFeatures = [
    {
      quote:
        "Step into a world where education feels like a story. Monoverse blends film-quality visuals, interactive scenes, and AI-powered support for a truly immersive journey.",
      name: "Experience Cinematic Learning",
      designation: "High-quality educational content",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our AI-powered learning assistant adapts to your pace and style, offering personalized guidance and feedback to ensure you're always moving forward.",
      name: "Personalized Learning Paths",
      designation: "AI-driven educational experiences",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Join a vibrant community of learners and instructors. Collaborate on projects, share insights, and grow together in a supportive environment designed for success.",
      name: "Collaborative Learning Environment",
      designation: "Community-driven knowledge sharing",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Track your progress with detailed analytics, earn certificates, and build a portfolio of real-world projects that showcase your skills to potential employers.",
      name: "Career-Ready Skills Development",
      designation: "Industry-relevant education",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Access cutting-edge courses created by industry experts. Our platform brings together the best minds to deliver content that's both engaging and relevant to today's challenges.",
      name: "Expert-Led Curriculum",
      designation: "Learn from the best in the field",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <AnimatedTestimonials
      testimonials={MonoverseFeatures}
      autoplay={true}
      showButtons={true}
      buttonText={{
        primary: "Get Started Free",
        secondary: "See Cinematic Demo",
      }}
    />
  );
}
