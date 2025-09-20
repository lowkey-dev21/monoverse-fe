"use client";
import { useState } from "react";
import { ProductCard } from "./product-cards";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const categories = [
  {
    title: "Cinematic Course Creation",
    learners: "New!",
    subTabs: [
      {
        title: "Cinematic Storytelling",
        learners: "Featured",
        courses: [
          {
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            title: "Create Cinematic Learning Modules",
            authors: "Monoverse Studio Team",
            rating: 4.9,
            ratingCount: "2,100",
            price: "₦89,000",
            badge: "Demo",
            badgeColor: "bg-purple-100 text-purple-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "2 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Produce interactive, cinematic course modules with avatars and motion graphics.",
                "Learn the basics of scene scripting and visual storytelling for education.",
                "Preview Monoverse’s cinematic course builder.",
              ],
              buttonText: "Enroll Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
            title: "Film Direction for Educators",
            authors: "Sarah Mitchell",
            rating: 4.8,
            ratingCount: "1,850",
            price: "₦95,000",
            badge: "Trending",
            badgeColor: "bg-orange-100 text-orange-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "4 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Master camera angles and lighting for educational content.",
                "Create engaging visual narratives that enhance learning.",
                "Professional editing techniques for course videos.",
              ],
              buttonText: "Enroll Now",
            },
          },

          {
            image:
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
            title: "Interactive Storytelling Design",
            authors: "Elena Rodriguez",
            rating: 4.6,
            ratingCount: "1,900",
            price: "₦78,000",
            badge: "New",
            badgeColor: "bg-blue-100 text-blue-800",
            expandedDetails: {
              updated: "July 2025",
              hours: "5 total hours",
              level: "Beginner",
              subtitles: "Subtitles, CC",
              bullets: [
                "Design branching storylines for educational experiences.",
                "Create interactive decision points in learning paths.",
                "Gamification techniques for course engagement.",
              ],
              buttonText: "Enroll Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
            title: "Virtual Set Design for Education",
            authors: "James Harrison",
            rating: 4.9,
            ratingCount: "2,750",
            price: "₦105,000",
            badge: "Popular",
            badgeColor: "bg-green-100 text-green-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "3 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Create immersive virtual environments for lessons.",
                "3D modeling and texturing for educational spaces.",
                "Optimize virtual sets for real-time rendering.",
              ],
              buttonText: "Enroll Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
            title: "Motion Graphics for Learning",
            authors: "Diana Park",
            rating: 4.8,
            ratingCount: "4,100",
            price: "₦85,000",
            badge: "Bestseller",
            badgeColor: "bg-teal-100 text-teal-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "4 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Create stunning animated graphics for educational content.",
                "Typography animation and visual hierarchy.",
                "Export optimized graphics for web and mobile learning.",
              ],
              buttonText: "Enroll Now",
            },
          },
        ],
      },
    ],
  },
  {
    title: "AI Tutors & Assistants",
    learners: "AI-powered",
    subTabs: [
      {
        title: "AI Tutor Experience",
        learners: "Personalized",
        courses: [
          {
            image:
              "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
            title: "Meet Your AI Tutor",
            authors: "Monoverse AI Team",
            rating: 5.0,
            ratingCount: "1,500",
            price: "₦125,000",
            badge: "AI Demo",
            badgeColor: "bg-blue-100 text-blue-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "1 total hour",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Interact with an AI tutor for instant feedback and project guidance.",
                "Experience real-time, personalized learning support.",
                "See how RAG-powered assistants work in Monoverse.",
              ],
              buttonText: "Start Learning",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
            title: "AI-Powered Course Creation",
            authors: "Dr. Alex Thompson",
            rating: 4.8,
            ratingCount: "2,300",
            price: "₦110,000",
            badge: "AI Premium",
            badgeColor: "bg-purple-100 text-purple-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "3 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Use AI to automatically generate course outlines and content.",
                "Implement intelligent adaptive learning paths.",
                "Create personalized assessments with AI assistance.",
              ],
              buttonText: "Start Learning",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=400&q=80",
            title: "Smart Learning Analytics",
            authors: "Maria Santos",
            rating: 4.7,
            ratingCount: "1,800",
            price: "₦98,000",
            badge: "Analytics",
            badgeColor: "bg-indigo-100 text-indigo-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "2.5 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Track student progress with AI-powered insights.",
                "Predict learning outcomes and identify at-risk students.",
                "Generate automated progress reports and recommendations.",
              ],
              buttonText: "Start Learning",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            title: "Conversational AI for Education",
            authors: "Prof. Kevin Liu",
            rating: 4.9,
            ratingCount: "3,100",
            price: "₦135,000",
            badge: "Advanced",
            badgeColor: "bg-red-100 text-red-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "4 total hours",
              level: "Advanced",
              subtitles: "Subtitles, CC",
              bullets: [
                "Build sophisticated chatbots for student support.",
                "Implement natural language understanding for Q&A.",
                "Create voice-enabled learning assistants.",
              ],
              buttonText: "Start Learning",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80",
            title: "Personalized Learning with AI",
            authors: "Sarah Kim",
            rating: 4.6,
            ratingCount: "2,700",
            price: "₦88,000",
            badge: "Personalization",
            badgeColor: "bg-pink-100 text-pink-800",
            expandedDetails: {
              updated: "July 2025",
              hours: "3.5 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Design adaptive learning experiences based on student behavior.",
                "Implement recommendation engines for course content.",
                "Create dynamic difficulty adjustment systems.",
              ],
              buttonText: "Start Learning",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
            title: "AI Content Generation",
            authors: "Michael Rodriguez",
            rating: 4.8,
            ratingCount: "1,950",
            price: "₦115,000",
            badge: "Content AI",
            badgeColor: "bg-cyan-100 text-cyan-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "2 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Generate educational content using large language models.",
                "Create automated quiz questions and exercises.",
                "Produce summaries and study guides with AI.",
              ],
              buttonText: "Start Learning",
            },
          },
        ],
      },
    ],
  },
  {
    title: "For-Credit Learning",
    learners: "Academic",
    subTabs: [
      {
        title: "Accredited Modules",
        learners: "SCORM/xAPI",
        courses: [
          {
            image:
              "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            title: "Earn Recognized Certificates",
            authors: "Monoverse Academic Team",
            rating: 4.8,
            ratingCount: "1,200",
            price: "₦75,000",
            badge: "For-Credit",
            badgeColor: "bg-green-100 text-green-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "3 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Track your progress with transcript-style modules and quizzes.",
                "Earn certificates and explore credit transfer options.",
                "See how SCORM/xAPI compliance works in Monoverse.",
              ],
              buttonText: "Get Certified",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
            title: "University Transfer Credits",
            authors: "Dr. Jennifer Walsh",
            rating: 4.9,
            ratingCount: "2,100",
            price: "₦85,000",
            badge: "Transfer Credit",
            badgeColor: "bg-blue-100 text-blue-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "4 total hours",
              level: "Undergraduate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Complete courses that transfer to partner universities.",
                "Earn credits toward your degree while learning online.",
                "Navigate the credit transfer process step-by-step.",
              ],
              buttonText: "Get Certified",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=400&q=80",
            title: "Professional Certification Prep",
            authors: "Prof. David Chang",
            rating: 4.7,
            ratingCount: "1,850",
            price: "₦95,000",
            badge: "Certification",
            badgeColor: "bg-purple-100 text-purple-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "6 total hours",
              level: "Professional",
              subtitles: "Subtitles, CC",
              bullets: [
                "Prepare for industry-standard professional certifications.",
                "Practice with real exam scenarios and case studies.",
                "Get continuing education credits for professional development.",
              ],
              buttonText: "Get Certified",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
            title: "Academic Writing & Research",
            authors: "Dr. Lisa Thompson",
            rating: 4.8,
            ratingCount: "2,900",
            price: "₦68,000",
            badge: "Academic Skills",
            badgeColor: "bg-indigo-100 text-indigo-800",
            expandedDetails: {
              updated: "July 2025",
              hours: "5 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Master academic writing styles and citation methods.",
                "Conduct effective research using academic databases.",
                "Develop critical thinking and analytical skills.",
              ],
              buttonText: "Get Certified",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
            title: "Digital Portfolio & Transcripts",
            authors: "Academic Services Team",
            rating: 4.6,
            ratingCount: "1,400",
            price: "₦45,000",
            badge: "Portfolio",
            badgeColor: "bg-yellow-100 text-yellow-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "2 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Create professional digital portfolios for academic work.",
                "Generate official transcripts and certificates.",
                "Showcase your learning achievements to employers.",
              ],
              buttonText: "Get Certified",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            title: "Graduate School Preparation",
            authors: "Dr. Maria Gonzalez",
            rating: 4.9,
            ratingCount: "1,650",
            price: "₦78,000",
            badge: "Grad Prep",
            badgeColor: "bg-green-100 text-green-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "3.5 total hours",
              level: "Advanced",
              subtitles: "Subtitles, CC",
              bullets: [
                "Prepare for graduate school applications and interviews.",
                "Develop research proposals and academic statements.",
                "Build relationships with academic mentors and advisors.",
              ],
              buttonText: "Get Certified",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Marketplace",
    learners: "Instructors & Coaches",
    subTabs: [
      {
        title: "List & Earn",
        learners: "Monetize",
        courses: [
          {
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            title: "Launch Your Course on Monoverse",
            authors: "Monoverse Marketplace Team",
            rating: 4.9,
            ratingCount: "900",
            price: "Free to Start",
            badge: "Marketplace",
            badgeColor: "bg-yellow-100 text-yellow-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "1 total hour",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "List your course, coaching, or service and get paid via Stripe Connect.",
                "Create a profile and reach new learners.",
                "See how the Monoverse marketplace works.",
              ],
              buttonText: "List Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80",
            title: "Instructor Success Masterclass",
            authors: "Top Instructor Network",
            rating: 4.8,
            ratingCount: "1,200",
            price: "₦65,000",
            badge: "Success Guide",
            badgeColor: "bg-green-100 text-green-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "3 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Learn from top-earning instructors on the platform.",
                "Master course creation, marketing, and student engagement.",
                "Build a sustainable income from teaching online.",
              ],
              buttonText: "List Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
            title: "Course Marketing & Promotion",
            authors: "Marketing Experts",
            rating: 4.7,
            ratingCount: "2,100",
            price: "₦55,000",
            badge: "Marketing",
            badgeColor: "bg-blue-100 text-blue-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "2.5 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Create compelling course descriptions and thumbnails.",
                "Use social media and content marketing to drive enrollment.",
                "Implement pricing strategies that maximize revenue.",
              ],
              buttonText: "List Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
            title: "Community Building for Educators",
            authors: "Community Growth Team",
            rating: 4.6,
            ratingCount: "950",
            price: "₦48,000",
            badge: "Community",
            badgeColor: "bg-purple-100 text-purple-800",
            expandedDetails: {
              updated: "July 2025",
              hours: "2 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Build engaged learning communities around your courses.",
                "Foster student discussions and peer-to-peer learning.",
                "Create exclusive member benefits and networking opportunities.",
              ],
              buttonText: "List Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
            title: "Revenue Analytics & Optimization",
            authors: "Analytics Team",
            rating: 4.9,
            ratingCount: "1,500",
            price: "₦72,000",
            badge: "Analytics",
            badgeColor: "bg-indigo-100 text-indigo-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "3.5 total hours",
              level: "Advanced",
              subtitles: "Subtitles, CC",
              bullets: [
                "Track and analyze your course performance metrics.",
                "Optimize pricing and promotional strategies based on data.",
                "Forecast revenue and plan for business growth.",
              ],
              buttonText: "List Now",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=400&q=80",
            title: "Legal & Business Setup",
            authors: "Legal Advisory Team",
            rating: 4.5,
            ratingCount: "800",
            price: "₦85,000",
            badge: "Legal Guide",
            badgeColor: "bg-red-100 text-red-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "2 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Understand legal requirements for online course creators.",
                "Set up proper business structures and tax considerations.",
                "Protect your intellectual property and course content.",
              ],
              buttonText: "List Now",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Growth & Community",
    learners: "Automated",
    subTabs: [
      {
        title: "Referral & Analytics",
        learners: "Scale Up",
        courses: [
          {
            image:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
            title: "Grow Your Learning Community",
            authors: "Monoverse Growth Team",
            rating: 4.7,
            ratingCount: "1,100",
            price: "Included",
            badge: "Growth",
            badgeColor: "bg-pink-100 text-pink-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "1 total hour",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Automate referrals and track cohort analytics.",
                "Build and scale your learning community.",
                "See Monoverse’s marketing and analytics tools in action.",
              ],
              buttonText: "See Growth Tools",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
            title: "Viral Learning Campaigns",
            authors: "Growth Marketing Team",
            rating: 4.8,
            ratingCount: "1,850",
            price: "₦68,000",
            badge: "Viral Growth",
            badgeColor: "bg-orange-100 text-orange-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "2.5 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Create campaigns that spread organically through social networks.",
                "Design shareable learning challenges and competitions.",
                "Leverage user-generated content for community growth.",
              ],
              buttonText: "See Growth Tools",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
            title: "Community Analytics Deep Dive",
            authors: "Data Science Team",
            rating: 4.9,
            ratingCount: "2,200",
            price: "₦95,000",
            badge: "Analytics Pro",
            badgeColor: "bg-blue-100 text-blue-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "4 total hours",
              level: "Advanced",
              subtitles: "Subtitles, CC",
              bullets: [
                "Master advanced community metrics and KPIs.",
                "Predict member behavior and engagement patterns.",
                "Create custom dashboards for community insights.",
              ],
              buttonText: "See Growth Tools",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
            title: "Automated Member Onboarding",
            authors: "Automation Specialists",
            rating: 4.6,
            ratingCount: "1,650",
            price: "₦75,000",
            badge: "Automation",
            badgeColor: "bg-green-100 text-green-800",
            expandedDetails: {
              updated: "July 2025",
              hours: "3 total hours",
              level: "Intermediate",
              subtitles: "Subtitles, CC",
              bullets: [
                "Set up automated welcome sequences for new members.",
                "Create progressive disclosure learning paths.",
                "Design smart triggers based on member behavior.",
              ],
              buttonText: "See Growth Tools",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80",
            title: "Gamification & Rewards Systems",
            authors: "Engagement Team",
            rating: 4.7,
            ratingCount: "1,900",
            price: "₦82,000",
            badge: "Gamification",
            badgeColor: "bg-purple-100 text-purple-800",
            expandedDetails: {
              updated: "August 2025",
              hours: "2 total hours",
              level: "All Levels",
              subtitles: "Subtitles, CC",
              bullets: [
                "Design point systems and achievement badges.",
                "Create leaderboards and competition mechanics.",
                "Implement reward systems that drive long-term engagement.",
              ],
              buttonText: "See Growth Tools",
            },
          },
          {
            image:
              "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=400&q=80",
            title: "Community Monetization Strategies",
            authors: "Revenue Team",
            rating: 4.8,
            ratingCount: "1,400",
            price: "₦88,000",
            badge: "Monetization",
            badgeColor: "bg-yellow-100 text-yellow-800",
            expandedDetails: {
              updated: "September 2025",
              hours: "3.5 total hours",
              level: "Advanced",
              subtitles: "Subtitles, CC",
              bullets: [
                "Turn engaged communities into revenue streams.",
                "Create premium membership tiers and exclusive content.",
                "Implement affiliate and partnership programs.",
              ],
              buttonText: "See Growth Tools",
            },
          },
        ],
      },
    ],
  },
];

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <section className="  pt-16 sm:px-4 lg:px-0">
      <div className="">
        <div className="w-full mx-auto ">
          <div className=" px-4 container mx-auto md:px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-dmsans mb-4">
              All the skills you need in one place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From critical skills to technical topics, Monoverse supports your
              professional development.
            </p>

            {/* Main Tabs - Desktop only */}
            <div className="hidden mx-auto container sm:flex gap-4 overflow-x-auto">
              {categories.map((category, idx) => (
                <button
                  key={category.title}
                  className={`flex-none px-6 py-3 cursor-pointer font-semibold transition
                    ${
                      activeCategory === idx
                        ? "border-b-3 border-primary text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }
                  `}
                  onClick={() => {
                    setActiveCategory(idx);
                    setActiveSubTab(0);
                  }}
                >
                  <div>{category.title}</div>
                </button>
              ))}
            </div>
            <div>
              <hr className="border-foreground/20 border-1 -mt-[2px] " />
            </div>

            {/* FAQ-style Accordion - Mobile only */}
            <div className="sm:hidden">
              {categories.map((category, idx) => (
                <div key={category.title} className="border-b">
                  <button
                    className="w-full flex justify-between items-center px-2  py-4 font-semibold text-lg"
                    onClick={() => {
                      if (activeCategory === idx) {
                        setActiveCategory(null); // Close if already open
                      } else {
                        setActiveCategory(idx);
                        setActiveSubTab(0);
                      }
                    }}
                  >
                    <span>{category.title}</span>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      className={`transition-transform ${
                        activeCategory === idx ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="#222"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {activeCategory === idx && (
                    <div className="pl-2 pb-4">
                      {/* Sub Tabs */}
                      <div className="flex gap-2 p-2 mb-4 overflow-x-auto">
                        {category.subTabs.map((subTab, subIdx) => (
                          <Button
                            key={subTab.title}
                            className={`flex-none  px-7 py-4 h-[64px] gap-1 flex-col items-start rounded-2xl hover:bg-foreground/80 cursor-pointer font-semibold transition-all duration-200  hover:border
                      ${
                        activeSubTab === subIdx
                          ? "bg-foreground text-white border-primary scale-105 "
                          : "bg-white text-foreground border-foreground/10 hover:bg-primary/10 hover:border-primary"
                      }
                    `}
                            onClick={() => setActiveSubTab(subIdx)}
                          >
                            <div className="text-base font-bold">
                              {subTab.title}
                            </div>
                            <div
                              className={`text-xs text-card font-medium tracking-wide
                    
                    ${
                      activeSubTab === subIdx
                        ? " text-card "
                        : "text-foreground"
                    }
                      `}
                            >
                              {subTab.learners}
                            </div>
                          </Button>
                        ))}
                      </div>
                      {/* Course cards carousel with buttons */}
                      <div className="relative">
                        <Carousel className="max-w-[95%] mx-auto ">
                          <CarouselContent>
                            {category.subTabs[activeSubTab].courses.map(
                              (course, index) => (
                                <CarouselItem
                                  key={index}
                                  className="min-w-full max-w-[320px]"
                                >
                                  <ProductCard type="default" {...course} />
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselPrevious className="absolute bg-foreground -left-4 top-1/2 transform -translate-y-1/2" />
                          <CarouselNext className="absolute bg-foreground -right-4 top-1/2 transform -translate-y-1/2" />
                        </Carousel>
                      </div>
                      {/* Show all courses button */}
                      <div className="mt-6">
                        <Button
                          variant={"outline"}
                          className="bg-inherit inline-flex items-center px-6 py-3 font-semibold rounded-lg"
                        >
                          Show all{" "}
                          {category.subTabs?.[activeSubTab]?.title || "courses"}{" "}
                          courses
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Desktop content */}
          <div className="md:bg-muted/10 pb-7 hidden sm:block">
            <div className="container px-4 md:px-4  mx-auto">
              {/* Sub Tabs */}
              <div className="flex pt-[3rem] p-5 gap-4 mb-8 overflow-x-auto pb-2">
                {categories[activeCategory ?? 0].subTabs.map((subTab, idx) => (
                  <Button
                    key={subTab.title}
                    className={`flex-none px-7 py-4 h-[64px] gap-1 flex-col items-start rounded-2xl hover:bg-foreground/80 cursor-pointer font-semibold transition-all duration-200 hover:border
                      ${
                        activeSubTab === idx
                          ? "bg-foreground text-white border-primary scale-105 "
                          : "bg-white text-foreground border-foreground/10 hover:bg-primary/10 hover:border-primary"
                      }
                    `}
                    onClick={() => setActiveSubTab(idx)}
                  >
                    <div className="text-base font-bold">{subTab.title}</div>
                    <div
                      className={`text-xs text-card font-medium tracking-wide
                    
                    ${activeSubTab === idx ? " text-card " : "text-foreground"}
                      `}
                    >
                      {subTab.learners}
                    </div>
                  </Button>
                ))}
              </div>
              {/* Course cards carousel for desktop */}
              <div className="relative ">
                <Carousel className="w-full ">
                  <CarouselContent className="  p-5  pr-10">
                    {categories[activeCategory ?? 0].subTabs[
                      activeSubTab
                    ].courses.map((course, index) => (
                      <CarouselItem
                        key={index}
                        className="min-w-[320px] max-w-[340px]  p-2 lg:min-w-[340px] lg:max-w-[360px]"
                      >
                        <ProductCard type="default" {...course} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute bg-foreground -left-4 top-1/2 transform -translate-y-1/2" />
                  <CarouselNext className="absolute bg-foreground -right-4 top-1/2 transform -translate-y-1/2" />
                </Carousel>
              </div>
              {/* Show all courses button */}
              <div className="mt-8">
                <Button
                  variant={"outline"}
                  className="bg-inherit h-[50px] inline-flex items-center px-6 py-3 font-semibold rounded-lg"
                >
                  Show all{" "}
                  {categories[activeCategory ?? 0].subTabs[activeSubTab].title}{" "}
                  courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
