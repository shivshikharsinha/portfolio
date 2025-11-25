import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="container flex flex-col items-center justify-center py-20 text-center md:py-32"
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Building Scalable Backend Systems
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
          className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90"
        >
          <a href="#projects">View Projects</a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
          <a href="#contact">
            Contact Me
            <Send className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
          <a href="/resume.pdf" download>
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
