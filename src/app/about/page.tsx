import { AnimatedTooltipPreview } from "@/components/landingPage/founder-section";
import TestimonialCard, {
  Testimonial,
} from "@/components/landingPage/testimonial-card";
import BasicPage from "@/components/templates/BasicPage";

export default function AboutPage() {
  return (
    <>
      <BasicPage
        title="About Monoverse"
        description="Monoverse is on a mission to make high-quality, career-aligned learning accessible through cinematic experiences and AI-driven coaching. We partner with institutions and industry to certify real skills."
      >
        <main className="container mx-auto p-8 ">
          <section className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold text-lg">Vision</h4>
              <p className="text-sm text-gray-600 mt-2">
                Monoverse reimagines online learning as cinematic,
                assessment-first experiences that teach by doing and certify
                real-world skills.
              </p>
              <h4 className="font-semibold text-lg mt-4">Mission</h4>
              <p className="text-sm text-gray-600 mt-2">
                To deliver immersive modules and AI-guided coaching that make
                career-relevant education accessible, verifiable, and engaging.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold text-lg">Why Monoverse</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Immersive learning:</strong> Cinematic modules that
                  combine video, simulations, and assessment.
                </li>
                <li>
                  <strong>AI personalization:</strong> A conversational tutor
                  that offers feedback, hints, and adaptive paths.
                </li>
                <li>
                  <strong>For-credit & credible:</strong> Workflows to support
                  institutional grading and transcript-ready credentials.
                </li>
                <li>
                  <strong>Creator-first marketplace:</strong> Easy publishing,
                  discoverability, and revenue sharing for instructors.
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold text-sm">Partners</h4>
                <p className="text-sm text-gray-600 mt-2">
                  We partner with universities, employers, and assessment
                  providers to ensure credentials translate to real
                  opportunities.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">What learners say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(
                [
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
                ] as Testimonial[]
              ).map(t => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </section>
          <section className="m p-6 bg-card rounded">
            <h3 className="font-semibold text-lg mb-2">Advisors & Partners</h3>
            <p className="text-sm text-gray-600">
              We work with academic advisors, industry partners, and community
              leaders. Our integrations include assessment partners, payment
              partners, and accessibility groups to ensure learners everywhere
              can benefit.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-background border rounded text-sm">
                University Partners
              </span>
              <span className="px-3 py-1 bg-background border rounded text-sm">
                Industry Partners
              </span>
              <span className="px-3 py-1 bg-background border rounded text-sm">
                Accessibility Coalition
              </span>
              <span className="px-3 py-1 bg-background border rounded text-sm">
                Payment & Compliance
              </span>
            </div>
          </section>

          <section className="mb-10 mt-16">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Founders & Leadership
            </h2>
            <div className="bg-card rounded p-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-semibold">Built by practitioners</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Our founding team combines product, AI research, and
                      instructional design to build learning experiences that
                      produce real results.
                    </p>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <AnimatedTooltipPreview />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 p-6 bg-muted/20 rounded">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-semibold">
                Ready to pilot Monoverse?
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                We’re running early institution and instructor pilots. If you’re
                interested in co‑designing a for‑credit course or running a
                cohort, get in touch.
              </p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-block bg-primary text-white px-4 py-2 rounded"
                >
                  Contact our team
                </a>
              </div>
            </div>
          </section>
        </main>
      </BasicPage>
    </>
  );
}
