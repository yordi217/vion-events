import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  PartyPopper, 
  Building2, 
  Heart, 
  Mic2, 
  Gift, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "From intimate ceremonies to grand celebrations, we create magical wedding experiences tailored to your love story.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional conferences, product launches, and team-building events that elevate your brand and engage your audience.",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description:
      "Birthday celebrations, anniversaries, and milestone events designed to create unforgettable memories.",
  },
  {
    icon: Mic2,
    title: "Entertainment events",
    description:
      "Energetic live performances and interactive entertainment experiences.",
  },
  {
    icon: Gift,
    title: "Social Events",
    description:
      "Baby showers, graduation parties, and holiday celebrations crafted with creativity and joy.",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Festivals, fairs, and public gatherings that bring people together and create lasting community bonds.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="section-title mt-3 mb-4">
            Our Services
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive event solutions tailored to your unique needs and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-0 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="font-display text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
