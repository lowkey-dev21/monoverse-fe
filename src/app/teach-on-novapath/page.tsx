"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/common/footer";
import { Headers } from "@/components/common/header";

export default function InstructorSubLanding() {
  return (
    <>
      <Headers />
      <main className="min-h-screen bg-background mt-[5rem] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-dmsans font-bold mb-4">
              Teach on Monoverse — Create cinematic learning experiences
            </h1>
            <p className="text-gray-700 mb-6 text-sm md:text-base max-w-3xl mx-auto">
              Monoverse helps instructors turn real-world workflows into
              immersive, project-based courses with AI-driven tutoring and
              marketplace distribution. Publish once and reach learners
              worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="/signup">
                <Button className="bg-primary text-card font-medium">
                  Start Creating — Free
                </Button>
              </Link>
              <Link href="/home/instructor/landing#how-it-works">
                <Button variant="outline">How it works</Button>
              </Link>
            </div>
          </div>
          <section
            id="highlights"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-background border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Studio-Grade Tools</h3>
              <p className="text-sm text-gray-600">
                Scene-based editing, branching interactions, and project
                templates to speed production.
              </p>
            </div>
            <div className="bg-background border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">AI Co-Instructor</h3>
              <p className="text-sm text-gray-600">
                Personalized feedback and automated grading tools so you scale
                without losing quality.
              </p>
            </div>
            <div className="bg-background border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Payments & Insights</h3>
              <p className="text-sm text-gray-600">
                Instant payouts, cohort analytics, and promotion tools to grow
                your audience.
              </p>
            </div>
          </section>

          <section id="tools" className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Tools you&#39;ll use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Scene & Timeline Editor</h4>
                <p className="text-sm">
                  Fine-grained control for cinematic sequences, checkpoints, and
                  branching paths.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Interactive Assessments</h4>
                <p className="text-sm">
                  Quizzes, code review, project rubrics, and auto-grading that
                  integrate with course progress.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Asset & Version Management</h4>
                <p className="text-sm">
                  Upload source files, templates, and manage multiple versions
                  for cohorts.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">AI Co-Pilot</h4>
                <p className="text-sm">
                  Use AI prompts to generate lesson outlines, suggest feedback,
                  and create step-by-step guidance for students.
                </p>
              </div>
            </div>
          </section>

          <section id="formats" className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Course formats</h2>
            <p className="text-gray-700 mb-4">
              Design the course that fits your teaching style — modular lessons,
              full multi-week cohorts, or short projects.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Self-paced projects</strong> — Video scenes +
                downloadable project files and automatic grading.
              </li>
              <li>
                <strong>Instructor-led cohorts</strong> — Scheduled live
                checkpoints, group projects, and direct messaging.
              </li>
              <li>
                <strong>Micro-certifications</strong> — Short, portfolio-focused
                courses that award badges and shareable credentials.
              </li>
            </ul>
          </section>

          <section id="monetization" className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Monetization & support
            </h2>
            <p className="text-gray-700 mb-4">
              Flexible pricing, instant payouts, and promotional tools so you
              focus on teaching, not ops.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Flexible Pricing</h4>
                <p className="text-sm">
                  One-time purchases, subscriptions, or cohort fees — you
                  choose.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Revenue Share</h4>
                <p className="text-sm">
                  Transparent revenue splits and monthly payouts via your
                  preferred payout method.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Instructor Dashboard</h4>
                <p className="text-sm">
                  Student analytics, engagement heatmaps, and A/B promotion
                  tools to grow enrollment.
                </p>
              </div>
            </div>
          </section>

          <section id="community" className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Community & growth</h2>
            <p className="text-gray-700 mb-4">
              Join a growing community of creators, get featured in curated
              collections, and collaborate on co-taught series.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button className="bg-primary text-card font-medium">
                  Start Building Your Course
                </Button>
              </Link>
              <Link href="/home/instructor/landing#how-it-works">
                <Button variant="outline">See Instructor Resources</Button>
              </Link>
            </div>
          </section>

          <section id="testimonials" className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              What instructors say
            </h2>
            <blockquote className="border-l-4 pl-4 italic text-gray-700">
              “Monoverse turned my studio workflows into a course in weeks —
              students loved the project-based approach and completion rates
              doubled.” — Maya R., Senior Editor
            </blockquote>
          </section>

          <section id="faq" className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-medium">
                  How long does it take to publish?
                </h4>
                <p className="text-sm">
                  You can publish a basic project in a few days. Full
                  cohort-based courses typically take a few weeks depending on
                  production needs.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Do I need prior teaching experience?
                </h4>
                <p className="text-sm">
                  No — many creators on Monoverse are industry professionals who
                  learned to teach through our templates and AI-guided lesson
                  planning.
                </p>
              </div>
              <div>
                <h4 className="font-medium">What support is available?</h4>
                <p className="text-sm">
                  Instructors get access to onboarding docs, a community forum,
                  and priority support for platform issues.
                </p>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                Plan scenes and projects that mirror professional workflows.
              </li>
              <li>
                Record or upload footage, attach interactive checkpoints and
                project assets.
              </li>
              <li>
                Publish, set pricing, and let Monoverse handle distribution and
                student support.
              </li>
            </ol>

            <div className="mt-8 flex justify-center gap-4">
              <Link href="/signup">
                <Button className="bg-primary text-card font-medium">
                  Become an Instructor
                </Button>
              </Link>
              <Link href="/docs/template-docs">
                <Button variant="outline">Instructor Resources</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
