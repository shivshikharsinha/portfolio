"use client";

import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { CursorTrail } from "@/components/ui/cursor-trail";

export function Hero() {
  return (
    <section
      id="about"
      className="relative container flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:py-32 lg:px-8 overflow-hidden"
    >
      <CursorTrail />
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m Shiv Shikhar Sinha.
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          A passionate Java Software Engineer with expertise in creating robust,
          high-performance backend services and distributed systems using modern
          cloud technologies.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="w-full bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90 sm:w-auto"
        >
          <a href="#projects">View Projects</a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="w-full transition-transform duration-300 hover:scale-105 sm:w-auto">
          <a href="#contact">
            Contact Me
            <Send className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full transition-transform duration-300 hover:scale-105 sm:w-auto">
          <a href="/resume.pdf" download>
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
