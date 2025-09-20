import React from "react";
import { ProductCard } from "@/components/landingPage/product-cards";

type Course = {
  id: string;
  image?: string;
  title: string;
  authors?: string;
  rating?: number;
  ratingCount?: string;
  price?: string;
  badge?: string;
  badgeColor?: string;
};

const sampleCourses: Course[] = [
  {
    id: "course-1",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    title: "Cinematic Course Creation",
    authors: "Alex Morgan",
    rating: 4.8,
    ratingCount: "4,100",
    price: "₦85,000",
    badge: "Bestseller",
    badgeColor: "bg-teal-100 text-teal-800",
  },
  {
    id: "course-2",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    title: "AI Tutoring Specialist",
    authors: "Samira Bello",
    rating: 4.7,
    ratingCount: "3,200",
    price: "₦120,000",
    badge: "New",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "course-3",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    title: "Interactive Assessment Designer",
    authors: "Jordan Lee",
    rating: 4.6,
    ratingCount: "2,700",
    price: "₦60,000",
    badge: "Popular",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
];

export default function CourseCatalogue() {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Browse courses</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCourses.map(c => (
          <ProductCard
            key={c.id}
            type="compact"
            image={c.image || ""}
            title={c.title}
            authors={c.authors}
            rating={c.rating}
            ratingCount={c.ratingCount}
            price={c.price}
            badge={c.badge}
            badgeColor={c.badgeColor}
            expandedDetails={undefined}
          />
        ))}
      </div>
    </section>
  );
}
