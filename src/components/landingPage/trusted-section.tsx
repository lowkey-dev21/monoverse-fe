"use client";

const TrustedSection = () => {
  const companies = [
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      alt: "OpenAI",
    },
    {
      name: "Coursera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo.svg",
      alt: "Coursera",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Stripe_Logo%2C_revised_2016.svg",
      alt: "Stripe",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      alt: "Amazon Web Services",
    },
    {
      name: "Unity",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg",
      alt: "Unity",
    },
    {
      name: "edX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/EdX.svg",
      alt: "edX",
    },
    {
      name: "SCORM",
      logo: "https://www.scorm.com/wp-content/themes/scorm/images/logo.svg",
      alt: "SCORM",
    },
    {
      name: "xAPI",
      logo: "https://xapi.com/wp-content/uploads/2020/09/xapi-logo.svg",
      alt: "xAPI",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg text-gray-600 font-medium">
            Trusted by over 17,000 companies and millions of learners around the
            world
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={company.logo}
                alt={company.alt}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={e => {
                  // Fallback to text if logo fails to load
                  e.currentTarget.style.display = "none";
                  const textElement = document.createElement("span");
                  textElement.textContent = company.name;
                  textElement.className = "text-gray-500 font-medium text-sm";
                  e.currentTarget.parentNode?.appendChild(textElement);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
