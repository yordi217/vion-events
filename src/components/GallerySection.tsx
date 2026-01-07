import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryImages = [
  {
    src: gallery1,
    alt: "Celebrating event with colorful lighting and decorations",
  },
  {
    src: gallery2,
    alt: "Corporate conference event with professional staging and lighting",
  },
  {
    src: gallery3,
    alt: "Conference event with audience and speaker on stage",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="section-title mt-3 mb-4">
            Event Highlights
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into the extraordinary experiences we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
