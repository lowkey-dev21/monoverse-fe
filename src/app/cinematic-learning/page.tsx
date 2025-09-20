import BasicPage from "@/components/templates/BasicPage";

export default function CinematicLearningIndex() {
  return (
    <BasicPage
      title="Cinematic Learning — Monoverse"
      description="Design immersive, narrative-driven courses with interactive branching, scenario simulations, and AI coaching."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          What is Cinematic Learning?
        </h2>
        <p className="mb-6 leading-relaxed text-gray-600">
          Monoverse&apos;s Cinematic Learning transforms instruction into
          immersive, scenario-driven experiences. Learners engage with
          characters, make consequential decisions, and receive contextual
          feedback — resulting in deeper transfer and observable skill growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Assessment-first Design</h4>
            <p className="text-sm text-gray-600">
              Start with outcomes, design scenes to elicit real behaviors, and
              measure competencies.
            </p>
          </div>
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">Branching Scenarios</h4>
            <p className="text-sm text-gray-600">
              Multi-path narratives adapt to learner choices and surface
              higher-order thinking.
            </p>
          </div>
          <div className="p-6 bg-card rounded">
            <h4 className="font-semibold mb-2">AI Coaching</h4>
            <p className="text-sm text-gray-600">
              Personalized feedback and remediation powered by pedagogical
              models.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded p-6">
          <h4 className="font-semibold mb-2">Explore</h4>
          <p className="text-sm text-gray-600">
            Try the{" "}
            <a
              href="/cinematic-learning/interactive-demo"
              className="text-primary underline"
            >
              Interactive Demo
            </a>{" "}
            or start building with the{" "}
            <a
              href="/cinematic-learning/course-builder"
              className="text-primary underline"
            >
              Course Builder
            </a>
            .
          </p>
        </div>
      </section>
    </BasicPage>
  );
}
