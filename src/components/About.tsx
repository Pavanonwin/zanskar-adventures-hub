import { Shield, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Certified guides and top-quality equipment ensure your safety on every adventure.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Born and raised in Zanskar, our team knows every trail, river, and hidden gem.',
  },
  {
    icon: Award,
    title: 'Premium Service',
    description: 'From planning to execution, we provide exceptional service at every step.',
  },
  {
    icon: Heart,
    title: 'Sustainable Travel',
    description: 'We protect the environment and support local communities through responsible tourism.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              ABOUT US
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-8 leading-tight">
              Your Gateway to<br />
              <span className="italic font-semibold">Zanskar's Magic</span>
            </h2>
            <p className="font-body text-base text-muted-foreground mb-6 leading-relaxed max-w-lg">
              For over a decade, we've been guiding travelers through the mystical landscapes of Zanskar Valley. Our passion for this remote Himalayan paradise drives us to create authentic, transformative experiences.
            </p>
            <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Whether you seek the thrill of Class IV rapids on the Zanskar River, the serenity of ancient monasteries, or the challenge of high-altitude treks, we craft journeys that leave lasting impressions.
            </p>

            <a
              href="#contact"
              className="inline-block px-8 py-3.5 border border-foreground/30 text-foreground font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="group">
                <div className="p-3 border border-border rounded-sm w-fit mb-5 group-hover:border-primary/50 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
