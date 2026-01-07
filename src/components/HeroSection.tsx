import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-primary-foreground/90 text-sm font-medium">
            Creating Unforgettable Moments
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          We Bring Your
          <span className="block text-gradient">Events to Life</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          From intimate gatherings to grand celebrations, we craft extraordinary
          experiences that leave lasting impressions. Let us transform your
          vision into reality.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("#contact")}
            className="group"
          >
            Start Planning
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={() => scrollToSection("#work")}
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16 pt-16 border-t border-primary-foreground/10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "500+", label: "Events Hosted" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
