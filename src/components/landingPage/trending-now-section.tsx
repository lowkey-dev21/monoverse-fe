import { ProductCard } from "./product-cards";
import { Button } from "../ui/button";

const courses = [
  {
    title: "Cinematic Demo Module: The Future of Learning",
    author: "Monoverse Studio Team",
    rating: 5.0,
    reviews: 2100,
    hours: "Free Demo",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "AI Tutor: Personalized Project Guidance",
    author: "Monoverse AI Team",
    rating: 5.0,
    reviews: 1500,
    hours: "Free Demo",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },

  {
    title: "For-Credit Learning: Earn Recognized Certificates",
    author: "Monoverse Academic Team",
    rating: 4.8,
    reviews: 1200,
    hours: "Included",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TrendingNowSection() {
  return (
    <section className="py-16 bg-primary/10">
      <div className=" container w-full mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-dmsans mb-4">
            Ready to reimagine your career?
          </h2>
          <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the skills and real-world experience employers want with Career
            accelerators.
          </h5>
        </div>

        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-4">
          {courses.map((course, index) => (
            <ProductCard
              key={index}
              type="compact"
              image={course.image}
              title={course.title}
              authors={course.author}
              rating={course.rating}
              hours={course.hours}
              ratingCount={course.reviews.toLocaleString()}
            />
          ))}
        </div>
        <Button variant="outline" className="mt-4 font-semibold">
          All Career Accelerators
        </Button>
      </div>
    </section>
  );
}
