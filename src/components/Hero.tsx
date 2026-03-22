import { ChevronDown } from 'lucide-react';
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
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/70 mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            EXPERIENCE ZANSKAR
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-8 leading-[0.95] animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Step Into
            <span className="block font-semibold italic">Eternal Lands</span>
          </h1>

          {/* Description */}
          <p className="font-body text-base md:text-lg text-white/80 max-w-lg mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
            For those who seek the extraordinary — explore this remote Himalayan paradise of ancient monasteries, thrilling rivers, and boundless adventure.
          </p>

          {/* CTA */}
          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#adventures"
              className="inline-block px-10 py-4 border border-white/60 text-white font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-foreground transition-all duration-500"
            >
              FIND YOUR JOURNEY
            </a>
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-24 left-6 md:left-12 z-10 animate-fade-up" style={{ animationDelay: '1s' }}>
        <span className="font-display text-4xl font-bold text-white">01</span>
        <span className="font-display text-lg text-white/40">/05</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#adventures" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
