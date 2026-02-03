"use client";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Opportunity from "@/components/Opportunity";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import History from "@/components/History";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Opportunity />

      <Solution />
      <Testimonials />
      <History />

      <Features />
      <Pricing />
      {/* Esto es una prueba de commit */}
      <FAQ />
      <CTA />
      {/* <Stats /> */}
    </main>
  );
}
