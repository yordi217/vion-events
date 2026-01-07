import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tech Innovation Summit 2024",
    category: "Corporate",
    description:
      "A 3-day conference for 2,000+ attendees featuring keynote speakers, interactive workshops, and networking events.",
  },
  {
    title: "Enchanted Garden Wedding",
    category: "Wedding",
    description:
      "An intimate garden ceremony for 150 guests with custom floral installations and fairy-tale inspired décor.",
  },
  {
    title: "Annual Charity Gala",
    category: "Fundraiser",
    description:
      "A black-tie fundraising event that raised over $500,000 for local education initiatives.",
  },
  {
    title: "Product Launch Extravaganza",
    category: "Corporate",
    description:
      "High-energy product reveal with immersive brand experiences, live entertainment, and influencer activations.",
  },
  {
    title: "Golden Anniversary Celebration",
    category: "Private Party",
    description:
      "A sophisticated celebration honoring 50 years of marriage with elegant dining and nostalgic touches.",
  },
  {
    title: "Summer Music Festival",
    category: "Community",
    description:
      "A weekend-long outdoor festival featuring local artists, food vendors, and family-friendly activities.",
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
