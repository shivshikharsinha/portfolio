import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/lib/data";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
          I&apos;m open to new opportunities and collaborations. Feel free to reach
          out.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form and I will get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="flex flex-col items-center justify-center space-y-6 rounded-lg bg-card p-8 text-center shadow-sm md:items-start">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-center text-muted-foreground md:text-left">
            Alternatively, you can contact me via email or connect with me on
            social media.
          </p>
          <div className="flex flex-col space-y-4 pt-4">
            <a
              href={SOCIAL_LINKS.email}
              className="group flex items-center gap-3 text-lg transition-colors hover:text-primary"
            >
              <Mail className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              <span>contact@example.com</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg transition-colors hover:text-primary"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg transition-colors hover:text-primary"
            >
              <Github className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
