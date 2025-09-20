import BasicPage from "@/components/templates/BasicPage";
import Link from "next/link";

export default function InstructorPage() {
  return (
    <BasicPage
      title="Instructor Resources — Monoverse"
      description="Tools, templates, and best practices for creating cinematic learning experiences and scaling instruction on Monoverse."
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Welcome, creators</h2>
        <p className="text-gray-600 leading-relaxed">
          Monoverse helps practitioners convert real workflows into
          assessment-driven, cinematic courses. Use our authoring tools,
          templates, and community to publish courses that learners complete and
          employers trust.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Authoring Templates</h4>
            <p className="text-sm text-gray-600">
              Start from tested templates for on-boarding, product training, and
              project-based workflows.
            </p>
          </div>
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Assessment Design</h4>
            <p className="text-sm text-gray-600">
              Best-practice rubrics, learning objectives mapping, and automated
              checks for scale.
            </p>
          </div>
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Publishing & Revenue</h4>
            <p className="text-sm text-gray-600">
              Flexible monetization, cohort tools, and distribution to Monoverse
              learners.
            </p>
          </div>
        </div>

        <section className="mt-4 bg-muted/20 rounded p-6">
          <h3 className="font-semibold mb-2">How to get started</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Choose a template aligned to your learning outcome.</li>
            <li>
              Draft scenes and attach assessments that measure key behaviors.
            </li>
            <li>
              Use the preview tools to iterate and collect pilot feedback.
            </li>
            <li>
              Publish a cohort or self-paced course and use analytics to refine
              content.
            </li>
          </ol>
        </section>

        <div className="mt-6 flex gap-4">
          <Link
            href="/teach-on-Monoverse"
            className="rounded bg-primary px-6 py-3 text-white"
          >
            Apply to Teach
          </Link>
          <Link href="/docs/template-docs" className="rounded border px-6 py-3">
            View Templates
          </Link>
        </div>
      </section>
    </BasicPage>
  );
}
