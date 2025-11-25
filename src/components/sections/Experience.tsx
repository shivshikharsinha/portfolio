import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
            My professional journey as a software engineer.
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl pl-6">
          <div
            className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-border"
            aria-hidden="true"
          />
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="absolute -left-3 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-8 ring-background">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <Card className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {item.date}
                    </CardDescription>
                  </div>
                  <CardDescription className="font-semibold text-base">
                    {item.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-foreground/90">
                    {item.description}
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/80">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}