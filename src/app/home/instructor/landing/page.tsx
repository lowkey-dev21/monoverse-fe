"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InstructorLanding() {
  return (
    <main className="min-h-screen bg-background mt-[5rem] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-dmsans font-bold mb-4">
            Teach on Monoverse — Instructor Resources
          </h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Everything you need to design, publish, and grow your courses on
            Monoverse. Learn about production tools, course formats, and how we
            support instructors from launch to long-term revenue.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <Link href="/signup">
              <Button className="bg-primary text-card font-medium">
                Get Started — Free
              </Button>
            </Link>
            <Link href="/docs/template-docs">
              <Button variant="outline">View Templates</Button>
            </Link>
          </div>
        </div>

        <section id="how-it-works" className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              Outline your course as scenes and projects that reflect industry
              workflows.
            </li>
            <li>
              Upload footage and assets, add interactive checkpoints, and
              configure grading.
            </li>
            <li>
              Publish with flexible pricing, schedule cohorts, and use built-in
              promotion tools.
            </li>
          </ol>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/signup">
              <Button className="bg-primary text-card font-medium">
                Become an Instructor
              </Button>
            </Link>
            <Link href="/home/instructor">
              <Button variant="outline">Instructor Dashboard</Button>
            </Link>
          </div>
        </section>

        <section id="resources" className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Resources</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <Link
                href="/docs/template-docs"
                className="text-primary underline"
              >
                Course templates
              </Link>{" "}
              to jumpstart your first project.
            </li>
            <li>
              <Link
                href="/docs/google-oauth-setup.md"
                className="text-primary underline"
              >
                Onboarding guide
              </Link>{" "}
              for integrating accounts and payouts.
            </li>
            <li>
              <Link href="/help" className="text-primary underline">
                Support & community
              </Link>{" "}
              for instructor discussions and troubleshooting.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
