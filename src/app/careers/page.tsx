import BasicPage from "@/components/templates/BasicPage";

export default function CareersPage() {
  return (
    <>
      <BasicPage
        title="Careers at Monoverse"
        description="Join our team building cinematic learning and AI coaching tools. We value designers, engineers, education researchers, and community builders."
      >
        <main className="container mx-auto p-8 ">
          <section className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded">
                <h4 className="font-semibold">Open Roles</h4>
                <p className="text-sm text-gray-600 mt-2">
                  We hire across engineering, design, and learning roles. Below
                  are a few positions we&apos;re actively hiring for:
                </p>
                <ul className="text-sm text-gray-600 list-disc pl-5 mt-3 space-y-3">
                  <li>
                    <strong>Senior Frontend Engineer</strong>
                    <div className="text-xs text-gray-500">
                      Build performant React/Next apps, component libraries, and
                      help shape our user experience.
                    </div>
                  </li>
                  <li>
                    <strong>Learning Experience Designer</strong>
                    <div className="text-xs text-gray-500">
                      Design cinematic module flows, assessments, and learner
                      pathways that translate to real outcomes.
                    </div>
                  </li>
                  <li>
                    <strong>AI Research Engineer</strong>
                    <div className="text-xs text-gray-500">
                      Work on conversational tutoring, feedback models, and
                      integration with vector databases/LLMs.
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="#apply" className="text-primary font-medium">
                    See all roles & apply →
                  </a>
                </div>
              </div>

              <div className="p-6 bg-card rounded">
                <h4 className="font-semibold">Perks & Benefits</h4>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>Competitive compensation and equity</li>
                  <li>Flexible remote-first work policy</li>
                  <li>Learning stipend & conference budget</li>
                  <li>Health, dental, and vision benefits</li>
                  <li>Paid parental leave and generous vacation</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  We invest in our team&lsquo;s growth — both technically and as
                  educators.
                </p>
              </div>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold">Our culture</h4>
              <p className="text-sm text-gray-600 mt-2">
                We value craft, evidence-driven design, and an experimental
                mindset. Team members collaborate across product, curriculum,
                and research to ship measurable outcomes.
              </p>
              <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-2">
                <li>Cross-functional collaboration</li>
                <li>Data-informed decisions</li>
                <li>Mentor-driven growth</li>
                <li>Inclusive and accessible-by-default design</li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold">Hiring process</h4>
              <ol className="list-decimal pl-5 mt-3 text-sm text-gray-600 space-y-2">
                <li>Intro call with hiring manager</li>
                <li>
                  Technical or design exercise (take-home or pair session)
                </li>
                <li>
                  Team interviews focusing on collaboration and mission fit
                </li>
                <li>Offer and onboarding plan</li>
              </ol>
              <p className="text-xs text-gray-500 mt-2">
                We aim for transparent feedback and an efficient process —
                typically 3–4 weeks from first contact to offer.
              </p>
            </div>

            <div id="apply" className="p-6 bg-muted/20 rounded text-center">
              <h3 className="text-lg font-semibold">
                Interested in joining Monoverse?
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Share your resume and a short note about what excites you. We
                review applications on a rolling basis.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:jobs@Monoverse.example"
                  className="inline-block bg-primary text-white px-4 py-2 rounded"
                >
                  Email us — jobs@Monoverse.example
                </a>
              </div>
            </div>
          </section>
        </main>
      </BasicPage>
    </>
  );
}
