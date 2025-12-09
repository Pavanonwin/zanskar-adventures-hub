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
              href="https://wa.me/917892250906"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:shadow-glow transition-all duration-300"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat With Us
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
