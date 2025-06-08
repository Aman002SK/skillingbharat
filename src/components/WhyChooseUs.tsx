"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

  const techTrainingContent = [
  {
    title: "Personalized Learning Paths",
    description:
      "Our training adapts to your team's skill levels and goals, ensuring every learner receives relevant, targeted instruction that leads to measurable outcomes.",
  },
  
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Stay ahead with a syllabus designed by industry experts, covering in-demand skills like full-stack development, DevOps, cloud computing, and AI.",
  },
  {
    title: "Hands-On Project Experience",
    description:
      "Learners build real-world projects and solve industry use cases, not just watch videos or take quizzes. This boosts both confidence and portfolios.",
  },
  {
    title: "Scalable Corporate Solutions",
    description:
      "Train teams of any size with our scalable platform — track progress, performance, and outcomes through enterprise-grade dashboards.",
  },
  {
    title: "Continuous Skill Growth",
    description:
      "Access a rich library of updated resources, webinars, and expert sessions to keep your team’s skills sharp in today’s fast-evolving tech landscape.",
  },
];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={techTrainingContent} />
    </div>
  );
}

export default WhyChooseUs;
