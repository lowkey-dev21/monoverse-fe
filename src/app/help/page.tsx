import BasicPage from "@/components/templates/BasicPage";
import HelpSearchBox from "@/components/landingPage/search-box";

export default function HelpPage() {
  return (
    <BasicPage
      title="How can we help?"
      description="Find answers for learners, creators, and enterprise partners. Browse
          the guides or search our docs for specific topics."
    >
      <section className="space-y-8 container mx-auto">
        {/* Search box (client component) */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        {/* The client component handles events to avoid passing handlers into server components */}
        <div>
          {/* Dynamically import client component is not necessary; import directly */}
          {/* Using a client component prevents runtime error about event handlers on server components */}
          <HelpSearchBox />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card rounded-lg border ">
            <h4 className="font-semibold mb-3 text-lg">Learner FAQs</h4>
            <ul className="text-sm text-gray-600 list-disc pl-5 mt-2 space-y-1">
              <li>How do I enroll in a course?</li>
              <li>How do I download certificates?</li>
              <li>How does AI coaching work?</li>
              <li>How do I contact support?</li>
            </ul>
          </div>

          <div className="p-8 bg-card rounded-lg  border ">
            <h4 className="font-semibold mb-3 text-lg">Instructor Support</h4>
            <p className="text-sm text-gray-600">
              Guides on authoring, analytics, publishing workflows, and tips to
              improve course completion. Visit the Instructor docs for detailed
              walkthroughs.
            </p>
            <div className="mt-4">
              <a
                className="inline-block text-sm text-primary underline"
                href="#"
              >
                Browse instructor guides
              </a>
            </div>
          </div>
        </div>

        <section className="mt-4 bg-muted/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-lg">Popular resources</h3>
          <p className="text-sm text-gray-700">
            Use the documentation to find step-by-step instructions, API
            references, and template examples. If you can&#39;t find an article,
            contact support and we&#39;ll help you directly.
          </p>
        </section>
      </section>
    </BasicPage>
  );
}
