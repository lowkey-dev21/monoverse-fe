import BasicPage from "@/components/templates/BasicPage";
import CourseCatalogue from "@/components/landingPage/course-catalogue";

export default function LearnPage() {
  return (
    <BasicPage
      title="Course Catalog  Monoverse"
      description="Explore project-first,  cinematic courses with integrated AI coaching and industry-recognized certifications."
    >
      <section>
        <p className="leading-relaxed mb-6">
          Monoverse blends cinematic storytelling with rigorous assessment
          design so learners gain practice, not just theory. Our catalog is
          curated into tracks that map to careers — from product design to AI
          tutoring — and each course includes hands-on projects and coaching.
        </p>

        <CourseCatalogue />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <article className="p-6 bg-card rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              Cinematic Course Creation
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Author scenes, branching narratives, and real-world simulations
              that mirror on-the-job scenarios.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Scene-based learning modules</li>
              <li>Role-play and branching outcomes</li>
              <li>Video-first storytelling</li>
            </ul>
          </article>

          <article className="p-6 bg-card rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              AI Tutors & Assistants
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Adaptive coaching, answer critique, and personalized learning
              paths driven by models trained on pedagogical data.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Instant feedback on assessments</li>
              <li>Personalized remediation paths</li>
              <li>AI-assisted grading options</li>
            </ul>
          </article>

          <article className="p-6 bg-card rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              Certifications & Career Tracks
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Earn credentials co-designed with industry partners to signal real
              skills to employers.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Stackable certificates</li>
              <li>Employer-validated outcomes</li>
              <li>Portfolio projects</li>
            </ul>
          </article>
        </div>

        <div className="bg-muted/20 rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-3">Featured Tracks</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded">
              <strong>AI Tutoring Specialist</strong>
              <p className="text-sm text-gray-600">
                12 weeks • Project portfolio • Certification
              </p>
            </div>
            <div className="p-4 bg-background rounded">
              <strong>Cinematic Instruction Design</strong>
              <p className="text-sm text-gray-600">
                8 weeks • Portfolio-ready course • Certification
              </p>
            </div>
            <div className="p-4 bg-background rounded">
              <strong>Interactive Assessment Designer</strong>
              <p className="text-sm text-gray-600">
                6 weeks • Hands-on labs • Certificate
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Still unsure? Try our interactive demo to see cinematic learning in
            action.
          </p>
          <a
            href="/cinematic-learning/interactive-demo"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Try demo
          </a>
        </div>
      </section>
    </BasicPage>
  );
}
