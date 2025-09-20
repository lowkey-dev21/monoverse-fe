import BasicPage from "@/components/templates/BasicPage";

export default function PrivacyPolicyPage() {
  return (
    <BasicPage title="Privacy Policy" description="Monoverse Privacy Policy">
      <main className="container mx-auto p-8">
        <article className="prose max-w-none">
          <h1>Privacy Policy</h1>
          <p>Effective date: 2025-09-14</p>

          <h2>Introduction</h2>
          <p>
            Monoverse (“we”, “our”, “us”) provides educational services and is
            committed to protecting your privacy. This policy explains what
            information we collect, why we collect it, and how to manage your
            rights.
          </p>

          <h2>Information we collect</h2>
          <p>We collect information to provide and improve our services:</p>
          <ul>
            <li>Account details (name, email, institution)</li>
            <li>Learning data (progress, assessments, rubrics)</li>
            <li>Payment and billing information</li>
            <li>Support communications and optional profile data</li>
          </ul>

          <h2>How we use information</h2>
          <p>
            We use data to operate our platform, personalize learning, process
            payments, and comply with institutional and legal obligations.
          </p>

          <h2>Third parties</h2>
          <p>
            We share data only as necessary with partners and processors under
            contract (e.g., Stripe, hosting, analytics). We do not sell personal
            data.
          </p>

          <h2>Your rights</h2>
          <p>
            You can access, correct, or request deletion of your personal data.
            For requests, contact privacy@Monoverse.example.
          </p>

          <h2>Contact</h2>
          <p>Questions? Contact privacy@Monoverse.example</p>
        </article>
      </main>
    </BasicPage>
  );
}
