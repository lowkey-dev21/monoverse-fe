"use client";
import { Globe } from "lucide-react";
import Logo from "./logo";
import { useState } from "react";
import { Button } from "../ui/button";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("Subscribe requested:", email);
        setEmail("");
      }}
      className="w-full bg-neutral-900/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between"
    >
      <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
      <p className="text-gray-300 mb-5">
        Get the latest updates about our AI products and exclusive early access
        to new features.
      </p>
      <div className="flex flex-col  gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          required
          className="flex-1 rounded-lg bg-neutral-800 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none"
        />
        <Button
          type="submit"
          className="shrink-0 rounded-lg h-[50px] font-semibold w-full sm:w-auto"
        >
          Subscribe to Newsletter
        </Button>
      </div>
    </form>
  );
};

const Footer = () => {
  // Simplified footer: keep 4 concise sections with clear links
  const footerSections = [
    {
      title: "Courses",
      links: [
        { text: "Course Catalog", href: "/learn" },
        {
          text: "Cinematic Course Builder",
          href: "/cinematic-learning/course-builder",
        },
        {
          text: "Interactive Demo",
          href: "/cinematic-learning/interactive-demo",
        },
      ],
    },
    {
      title: "For Instructors",
      links: [
        { text: "Teach on Monoverse", href: "/teach-on-Monoverse" },
        { text: "Instructor Resources", href: "/instructor" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "/help" },
        { text: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Privacy & Terms", href: "/legal" },
      ],
    },
  ];

  return (
    <footer className="bg-foreground w-full text-white pt-12 pb-6">
      <div className=" w-full container  mx-auto px-4">
        {/* Top section: newsletter + header + footer links */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-start">
            {/* Header and links on right (lg:4 cols) */}
            <div className="lg:col-span-4">
              <h2 className="text-xl font-semibold text-white mb-6">
                Explore top skills and certifications
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-white font-medium mb-4 text-sm">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className={
                              "text-gray-300 hover:text-white text-sm transition-colors"
                            }
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter on left (lg:2 cols) */}
            <div className="lg:col-span-2">
              <NewsletterCard />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and copyright */}
            <div className="flex items-center space-x-4">
              <Logo className="text-white" />
              <span className="text-gray-400 text-sm">
                © 2025 Monoverse, Inc.
              </span>
            </div>

            {/* Cookie settings and language selector */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Cookie settings
              </a>
              <button className="border border-gray-600 rounded px-3 py-1 flex items-center space-x-2 text-sm hover:border-gray-500 transition-colors">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
