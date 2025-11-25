import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" />
        <Experience />
        <Projects className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" />
        <Education className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" />
        <Contact className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" />
      </main>
      <Footer />
    </div>
  );
}
