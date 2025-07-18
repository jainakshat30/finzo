"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl pb-6 font-light tracking-tight">
          Manage Your{" "}
          <span className="font-normal bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            Finances
          </span>{" "}
          <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 rounded-full text-base">
              Get Started
            </Button>
          </Link>
          
        </div>
        <div className="hero-image-wrapper mt-16">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner2.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
