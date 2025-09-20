import BasicPage from "@/components/templates/BasicPage";

export default function NdaPage() {
  return (
    <BasicPage title="NDA" description="Monoverse NDA template and summary">
      <main className="container mx-auto p-8">
        <article className="prose max-w-none">
          <h1>Mutual Non-Disclosure Agreement (Summary)</h1>
          <p>
            This page provides a short summary and an example NDA for partners
            and contractors.
          </p>

          <h2>Purpose</h2>
          <p>
            Protect confidential information exchanged for evaluation, pilot
            projects, or integrations.
          </p>

          <h2>Key terms</h2>
          <ul>
            <li>Definition of Confidential Information</li>
            <li>Term (e.g., 2 years)</li>
            <li>Permitted disclosures and exceptions</li>
            <li>Return or destruction of materials</li>
          </ul>

          <h2>Contact</h2>
          <p>To request an NDA execution, contact legal@Monoverse.example</p>
        </article>
      </main>
    </BasicPage>
  );
}
