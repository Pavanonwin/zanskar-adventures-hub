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
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Gateway to <span className="text-gradient">Zanskar's Magic</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              For over a decade, we've been guiding travelers through the mystical landscapes of Zanskar Valley. Our passion for this remote Himalayan paradise drives us to create authentic, transformative experiences.
            </p>
            <p className="font-body text-muted-foreground mb-8">
              Whether you seek the thrill of Class IV rapids on the Zanskar River, the serenity of ancient monasteries, or the challenge of high-altitude treks, we craft journeys that leave lasting impressions.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:shadow-glow transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
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
