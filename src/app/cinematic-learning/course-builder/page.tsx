import BasicPage from "@/components/templates/BasicPage";

export default function CourseBuilderPage() {
  return (
    <BasicPage
      title="Cinematic Course Builder — Monoverse"
      description="A studio-grade authoring environment for building cinematic, scenario-driven courses with branching, timelines, asset management, and AI-assisted authoring."
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Course Builder Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          The Monoverse Course Builder is a purpose-built environment for
          creating immersive learning experiences. Assemble scenes, define
          branching logic, author assessments, and publish to cohorts — all
          within a single platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Scene & Timeline Editor</h4>
            <p className="text-sm text-gray-600">
              Frame-by-frame control for sequencing media, dialogues, and
              decision checkpoints.
            </p>
          </div>
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Branching Designer</h4>
            <p className="text-sm text-gray-600">
              Visual map editor to craft decision trees, outcomes, and
              competency mappings.
            </p>
          </div>
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Assessment & Rubrics</h4>
            <p className="text-sm text-gray-600">
              Create granular rubrics, attach automated checks, and surface
              mastery metrics in learner dashboards.
            </p>
          </div>
        </div>

        <section className="mt-4 bg-muted/20 rounded p-6">
          <h3 className="font-semibold mb-2">
            How creators work in the Builder
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Define learning outcomes and assessments first.</li>
            <li>Draft scenes with scripts, media, and checkpoint prompts.</li>
            <li>Use branching designer to map choices to competencies.</li>
            <li>Preview scenarios in the interactive simulator and iterate.</li>
            <li>
              Publish cohorts and link to analytics for continuous improvement.
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-3">
            Creator features in depth
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">AI-Assisted Authoring</h4>
              <p className="text-sm text-gray-700">
                Generate scene outlines, dialogue options, and formative
                feedback prompts using guided AI assistants tuned for
                instructional design.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Asset & Version Management</h4>
              <p className="text-sm text-gray-700">
                Upload media, attach downloadable resources, and manage
                revisions across course versions for cohort-based runs.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Preview & Test Runner</h4>
              <p className="text-sm text-gray-700">
                Run through scenarios as a learner, inspect scoring traces, and
                export sample reports for stakeholders.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Integrations</h4>
              <p className="text-sm text-gray-700">
                Connect with LMS, SSO providers, and analytics pipelines so your
                course fits within existing systems.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 bg-card rounded p-6">
          <h3 className="font-semibold mb-2">
            Example: Short Scenario Workflow
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            A typical mini-scenario in the builder:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Scene 1: Briefing & context (2-3 min video)</li>
            <li>Scene 2: Decision checkpoint with 3 options</li>
            <li>Scene 3: Consequence branch + feedback</li>
            <li>Assessment: Short task submission + rubric grading</li>
          </ul>
        </section>

        <div className="mt-6 flex gap-4">
          <a
            href="/signup"
            className="rounded bg-primary px-6 py-3 text-white font-semibold"
          >
            Start Building Free
          </a>
          <a href="/docs/template-docs" className="rounded border px-6 py-3">
            View Templates & Docs
          </a>
        </div>
      </section>
    </BasicPage>
  );
}
