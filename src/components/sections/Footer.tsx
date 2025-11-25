"use client";

import * as React from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";
import { Icons } from "../icons";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} The Tech Freak. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
