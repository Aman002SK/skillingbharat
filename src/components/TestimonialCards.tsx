"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const trainingTestimonials = [
  {
    quote:
      "The Full Stack Development course gave me hands-on experience with real-world projects. I landed an internship within 3 months!",
    name: "Lavish",
    title: "Full Stack Developer Trainee",
  },
  {
    quote:
      "The Data Analysis bootcamp was career-transforming. From zero to building dashboards in weeks!",
    name: "Yashi Yadav",
    title: "Data Analyst Trainee",
  },
  {
    quote:
      "AI/ML always felt complex, but this course simplified it beautifully. Loved the practical sessions and mentorship!",
    name: "Piyush Dubey",
    title: "AI/ML Learner",
  },
  {
    quote:
      "Cloud Computing was a mystery to me before. Now I can confidently set up and manage cloud infrastructure!",
    name: "Shreya",
    title: "Cloud Computing Enthusiast",
  },
  {
    quote:
      "Cyber Security is no longer intimidating. The course offered hands-on labs, real-world case studies, and amazing support.",
    name: "Aryan Mehta",
    title: "Cyber Security Trainee",
  },
];

function TrainingTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Voices of Success from Our Learners
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={trainingTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TrainingTestimonials;
