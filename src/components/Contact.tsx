import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Plan Your <span className="text-gradient">Adventure</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Ready to explore Zanskar? Reach out to us and let's create your perfect itinerary.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/917892250906"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-[#25D366]/20 rounded-xl">
                  <svg className="h-8 w-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">WhatsApp Us</h3>
                  <p className="font-body text-2xl font-bold text-primary mb-2">+91 78922 50906</p>
                  <p className="font-body text-sm text-muted-foreground">Quick responses, instant booking assistance</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <div className="p-8 bg-gradient-card rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="font-body text-2xl font-bold text-foreground mb-2">+91 78922 50906</p>
                  <p className="font-body text-sm text-muted-foreground">Available for voice calls</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-1">Location</h4>
              <p className="font-body text-sm text-muted-foreground">Padum, Zanskar Valley, Ladakh, India</p>
            </div>
            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <Clock className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-1">Best Season</h4>
              <p className="font-body text-sm text-muted-foreground">June to September (Summer) & January to February (Frozen River)</p>
            </div>
            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <Mail className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-1">Response Time</h4>
              <p className="font-body text-sm text-muted-foreground">We respond within 2 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
