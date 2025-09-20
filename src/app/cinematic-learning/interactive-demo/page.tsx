import BasicPage from "@/components/templates/BasicPage";
import SimulatorClient from "@/components/landingPage/SimulatorClient";

export default function InteractiveDemoPage() {
  return (
    <BasicPage
      title="Interactive Demo — Cinematic Learning"
      description="Experience a short cinematic scenario to see Monoverse's branching, feedback, and assessment in action."
    >
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold">Try a short scenario</h2>
          <p className="text-gray-600 leading-relaxed">
            This interactive demo walks you through a condensed cinematic
            scenario. Make decisions, get immediate pedagogical feedback, and
            review a short scoring summary — all in under 5 minutes.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Embed client-only Simulator */}
            <SimulatorClient />
          </div>

          <aside className="space-y-4">
            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">What you&apos;ll see</h4>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>Short image-based scenes that set context</li>
                <li>
                  Decision checkpoints with immediate, instructive feedback
                </li>
                <li>Summative scoring and suggested next steps for learning</li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">How long</h4>
              <p className="text-sm text-gray-600">
                About 3–5 minutes. Great as a sample for hiring or training.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Share</h4>
              <p className="text-sm text-gray-600 mb-3">
                Share this demo with a colleague to preview Monoverse&apos;s
                learner experience.
              </p>
              <a href="#" className="text-sm text-primary underline">
                Copy share link
              </a>
            </div>
          </aside>
        </div>

        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Demo walkthrough</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Watch the briefing scene and gather context.</li>
            <li>
              Choose an action at each checkpoint and read immediate feedback.
            </li>
            <li>Review a short summary score and recommended next steps.</li>
          </ol>
        </section>

        <div className="mt-6 flex gap-4">
          <a
            href="/cinematic-learning/course-builder"
            className="rounded border px-6 py-3"
          >
            Go to Course Builder
          </a>
          <a
            href="/signup"
            className="rounded bg-primary px-6 py-3 text-white font-semibold"
          >
            Try Monoverse
          </a>
        </div>
      </section>
    </BasicPage>
  );
}
