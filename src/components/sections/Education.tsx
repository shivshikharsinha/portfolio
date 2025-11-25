import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { EDUCATION_DATA } from "@/lib/data";

export function Education({ className }: { className?: string }) {
  return (
    <section id="education" className={className}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Education & Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
            My academic background and professional certifications.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {EDUCATION_DATA.map((item) => (
            <Card
              key={item.title}
              className="flex items-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:backdrop-blur-lg"
            >
              <item.icon className="h-10 w-10 shrink-0 text-accent" />
              <div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>
                  {item.institution} - {item.date}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
