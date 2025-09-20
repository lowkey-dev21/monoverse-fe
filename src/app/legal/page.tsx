import BasicPage from "@/components/templates/BasicPage";

export default function LegalPage() {
  return (
    <>
      <BasicPage
        title="Privacy & Terms"
        description="Monoverse is committed to protecting user data. Below are links to our privacy policy and terms of service."
      >
        <main className="container mx-auto p-8 ">
          <section className="space-y-6">
            <div className="p-6 bg-card rounded">
              <h1 className="text-2xl font-bold">Privacy & Terms — Summary</h1>
              <p className="text-sm text-gray-600 mt-2 max-w-3xl">
                Monoverse is committed to protecting the privacy and security of
                learners, instructors, and partners. Below are the key
                highlights; please review the full policies for complete
                details.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Data we collect</h4>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
                <li>
                  Account information (name, email, institution affiliation)
                </li>
                <li>
                  Course progress, assessment results, and activity logs needed
                  for grading and credentialing
                </li>
                <li>
                  Payment and billing information for purchases (handled via
                  Stripe)
                </li>
                <li>
                  Optional profile data (avatar, bio) and communication
                  preferences
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">How we use data</h4>
              <p className="text-sm text-gray-600">
                We use data to deliver platform functionality (enrollment,
                grading, certificates), personalize learning (AI tutor
                recommendations), process payments, and provide support. We also
                use aggregated, de-identified analytics to improve outcomes.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Sharing & third parties</h4>
              <p className="text-sm text-gray-600">
                We do not sell personal data. We may share data with:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 mt-2">
                <li>
                  Partner institutions for for-credit reporting and transcripts
                </li>
                <li>Payment processors (Stripe) for billing</li>
                <li>
                  Third-party analytics and hosting providers under contract
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Data retention & security</h4>
              <p className="text-sm text-gray-600">
                We retain data as necessary to provide services and comply with
                legal and institutional requirements. We use industry-standard
                security practices (encrypted in transit and at rest, role-based
                access controls, regular security reviews).
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">User rights</h4>
              <p className="text-sm text-gray-600">
                Users can access, correct, or request deletion of their personal
                data. Institutional accounts may have administrative controls
                for data exports and reporting. For requests, contact
                privacy@Monoverse.example.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Cookies & tracking</h4>
              <p className="text-sm text-gray-600">
                We use cookies and similar technologies for authentication,
                preferences, and analytics. You can manage cookie settings in
                your browser; third-party trackers are disclosed in the full
                policy.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Children</h4>
              <p className="text-sm text-gray-600">
                Monoverse is not directed to children under 13. If we learn that
                a child under the applicable age has created an account, we will
                take steps to delete the account in accordance with applicable
                law.
              </p>
            </div>

            <div className="p-6 bg-card rounded">
              <h4 className="font-semibold mb-2">Changes to policies</h4>
              <p className="text-sm text-gray-600">
                We may update policies from time to time. Material changes will
                be communicated by email and posted here. The effective date
                will be updated accordingly.
              </p>
            </div>

            <div className="p-6 bg-muted/20 rounded">
              <h4 className="font-semibold mb-2">Contact & full policies</h4>
              <p className="text-sm text-gray-600">
                For privacy requests or questions, contact{" "}
                <a
                  href="mailto:privacy@Monoverse.example"
                  className="text-primary"
                >
                  privacy@Monoverse.example
                </a>
                . Read the full policies here:
              </p>
              <div className="mt-3 space-x-3">
                <a
                  href="/legal/privacy"
                  className="text-primary"
                  aria-label="Read the full privacy policy"
                >
                  Full Privacy Policy
                </a>
                <a
                  href="/legal/terms"
                  className="text-primary"
                  aria-label="Read the terms of service"
                >
                  Terms of Service
                </a>
                <a
                  href="/legal/nda"
                  className="text-primary"
                  aria-label="Request NDA or read NDA summary"
                >
                  NDA & Partner Terms
                </a>
              </div>
            </div>
          </section>
        </main>
      </BasicPage>
    </>
  );
}
