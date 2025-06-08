"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";

import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 max-w-3xl mx-auto z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      {/* Company Logo and Title */}
      <div className="text-center mb-2  py-2 rounded-md">
        <Link href="/" className="inline-flex items-center space-x-2">
          <img src="/skilling-logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            <span className="text-teal-400">Skilling</span>Bharat
          </h1>
        </Link>
      </div>

      {/* Navigation Menu */}
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={"/courses"}>All Courses</HoveredLink>
            <HoveredLink href={"/courses/full-stack-development"}>
              Full Stack Development
            </HoveredLink>
            <HoveredLink href={"/courses/data-analysis"}>
              Data Analysis
            </HoveredLink>
            <HoveredLink href={"/courses/ai-ml"}>
              AI / Machine Learning
            </HoveredLink>
            <HoveredLink href={"/courses/cloud-computing"}>
              Cloud Computing
            </HoveredLink>
            <HoveredLink href={"/courses/cyber-security"}>
              Cyber Security
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
}
