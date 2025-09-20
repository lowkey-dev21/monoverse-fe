import BasicPage from "@/components/templates/BasicPage";

export default function TermsPage() {
  return (
    <BasicPage
      title="Terms of Service"
      description="Monoverse Terms of Service"
    >
      <main className="container mx-auto p-8">
        <article className="prose max-w-none">
          <h1>Terms of Service</h1>
          <p>Effective date: 2025-09-14</p>

          <h2>Overview</h2>
          <p>
            These Terms govern your use of Monoverse. By using our services you
            agree to these terms.
          </p>

          <h2>Accounts</h2>
          <p>
            Users must provide accurate information for accounts. Institutional
            accounts may be subject to additional terms.
          </p>

          <h2>Payments</h2>
          <p>
            Payments are processed via Stripe. Billing disputes should be raised
            to our support email.
          </p>

          <h2>Content and conduct</h2>
          <p>
            Users are responsible for their content and must not infringe
            third-party rights. We reserve the right to remove content that
            violates these Terms.
          </p>

          <h2>Liability</h2>
          <p>
            To the maximum extent permitted by law, Monoverse&#39;s liability is
            limited as described in these Terms.
          </p>

          <h2>Contact</h2>
          <p>Questions about these Terms: legal@Monoverse.example</p>
        </article>
      </main>
    </BasicPage>
  );
}
