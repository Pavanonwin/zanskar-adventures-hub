import { ChevronDown, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-zanskar.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zanskar Valley panoramic view with snow-capped Himalayan mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-body text-sm text-foreground/90">Zanskar Valley, Ladakh</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Discover the
            <span className="block text-gradient">Last Shangri-La</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            Experience the untouched beauty of Zanskar. From thrilling white-water rafting to ancient monasteries, embark on the adventure of a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#adventures"
              className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Explore Adventures
            </a>
            <a
              href="https://wa.me/917892250906"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-foreground/30 text-foreground font-body font-semibold rounded-full hover:bg-foreground/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '1s' }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="font-body text-sm text-foreground/60 mt-1">Happy Travelers</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">15+</p>
              <p className="font-body text-sm text-foreground/60 mt-1">Unique Tours</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="font-body text-sm text-foreground/60 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#adventures" className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors">
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
