import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Our Work", href: "#work" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Logo fixed at viewport top-left */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#home");
        }}
        className="fixed top-0 left-0 m-4 z-50"
      >
        <img src={logo} alt="Vion Events Logo" className="h-10 w-auto" />
      </a>

      <div className="container-narrow">
        <div className="flex items-center justify-between h-20">

          {/* Brand Text (centered) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center justify-center flex-1 h-full"
          >
            <span
              className={`font-display text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              {/*Vion Events*/}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 font-body text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-foreground hover:text-accent hover:bg-accent/10"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-2xl shadow-card-hover p-4 mb-4 animate-scale-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 font-body text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
