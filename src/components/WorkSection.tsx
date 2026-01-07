import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Event Planning and Execution",
    category: "Full-service",
    description:
      "From concept to execution, we plan every detail to ensure your event runs flawlessly and exceeds expectations.",
  },
  {
    title: "Theme and Budget Designing",
    category: "Creative",
    description:
      "Creative theme development and strategic budget planning to maximize impact within your investment. We create cohesive visual concepts that reflect your style and objectives.",
  },
  {
    title: "Venue Selection and Setup",
    category: "Logistics",
    description:
      "Expert venue sourcing and professional setup to create the perfect atmosphere for your event. From intimate spaces to grand halls, we find and transform venues to match your vision.",
  },
  {
    title: "Event Branding and Creative Design",
    category: "Branding",
    description:
      "Professional branding solutions and creative design services to make your event visually stunning and memorable. From invitations to signage, we create cohesive brand experiences.",
  },
  {
    title: "Digital Experience",
    category: "Virtual",
    description:
      "Modern event technology, live streaming, and digital engagement tools to extend your reach.",
  },
  {
    title: "Entertainment",
    category: "performances",
    description:
      "Curated entertainment options including live performances, DJs, and interactive experiences.",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="section-title mt-3 mb-4">
            Our Work
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of events that we've had the privilege to bring to life.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group border border-border/50 bg-card hover:border-accent/30 shadow-sm hover:shadow-card transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Badge */}
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
