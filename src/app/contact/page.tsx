import BasicPage from "@/components/templates/BasicPage";
import ContactForm from "@/components/common/contact-form";

export default function ContactPage() {
  return (
    <BasicPage
      title="Contact Monoverse"
      description="We’d love to hear from you. Whether you&#39;re an instructor, learner, or
      enterprise partner, use the form to reach the right team."
    >
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <p className="text-sm text-gray-600 mb-4">
              For account or course help, include your account email and a short
              description of the issue.
            </p>

            <h4 className="font-semibold mb-2">Partnerships & Press</h4>
            <p className="text-sm text-gray-600">
              Interested in partnering? Provide a short description and
              we&#39;ll connect you with our partnerships team.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </BasicPage>
  );
}
