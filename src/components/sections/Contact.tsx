"use client";

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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { sendMessage } from "@/ai/flows/sendMessageFlow";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await sendMessage(values);
      if (response.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="container py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
          I&apos;m open to new opportunities and collaborations. Feel free to
          reach out.
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="flex flex-col items-center justify-center space-y-6 rounded-xl bg-card/50 p-8 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:backdrop-blur-lg md:items-start">
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
              <span>shiv.shikhar.3@gmail.com</span>
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
