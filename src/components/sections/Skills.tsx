import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SKILLS_DATA } from "@/lib/data";

export function Skills({ className }: { className?: string }) {
  return (
    <section id="skills" className={className}>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
          Skills Dashboard
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
          A snapshot of my technical abilities and tools I use to bring projects
          to life.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS_DATA.map((category) => (
          <Card
            key={category.category}
            className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:backdrop-blur-lg"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <category.icon className="h-8 w-8 text-accent" />
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
