"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Full Stack Development Bootcamp Intro",
      description:
        "Explore the fundamentals of front-end and back-end web development using real-world tools.",
      slug: "full-stack-development-intro",
      isFeatured: true,
    },
    {
      title: "Kickstart Your Data Analysis Career",
      description:
        "Understand data pipelines, tools like Pandas, and how to derive insights from data.",
      slug: "data-analysis-career",
      isFeatured: true,
    },
    {
      title: "AI/ML Applications in Industry",
      description:
        "Learn how Machine Learning is transforming industries and how you can get started.",
      slug: "ai-ml-applications",
      isFeatured: true,
    },
    {
      title: "Cloud Computing Essentials",
      description:
        "Discover how cloud platforms like AWS and Azure are used in enterprise environments.",
      slug: "cloud-computing-essentials",
      isFeatured: true,
    },
    {
      title: "Cyber Security: Getting Started",
      description:
        "Learn how to protect systems and networks from cyber threats in a digital world.",
      slug: "cyber-security-basics",
      isFeatured: true,
    },
    {
      title: "Git & GitHub for Developers",
      description:
        "Master version control and collaboration using Git and GitHub effectively.",
      slug: "git-github-webinar",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Upskill with Industry-Relevant Webinars
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWebinars.map((webinar) => (
            <div
              key={webinar.slug}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white">
                {webinar.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                {webinar.description}
              </p>
              <Link
                href={`/webinars/${webinar.slug}`}
                className="mt-4 inline-block text-teal-400 hover:text-white font-medium underline underline-offset-2 transition duration-200"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
