import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="section-title mt-3">
            Crafting Events with Passion
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="overflow-hidden border-0 shadow-card-hover">
                <CardContent className="p-0">
                  <img
                    src={founderImage}
                    alt="Amanuel Bekele, Founder of Vion Events"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Amanuel Bekele
              </h3>
              <p className="text-accent font-medium">Founder & Creative Director</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Iam the founder of VION events, an event management company based 
                in Addis Ababa, and Hawassa ethiopia, dedicated to creating unforgettable
                experiences four our clients.
              </p>
              <p>
                Our journey began in a small office with big dreams. Today, we've
                grown into a full-service event management company, but our core
                values remain unchanged — attention to detail, creative
                excellence, and unwavering commitment to our clients' visions.
              </p>
              <p>
                Whether it's a corporate conference, an elegant wedding, or a
                milestone celebration, we bring the same level of dedication and
                passion to every project. Because we believe that the best events
                are the ones that create lasting memories.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Personalized Approach",
                "Creative Excellence",
                "Seamless Execution",
                "Trusted Partners",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
