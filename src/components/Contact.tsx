import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import phobrangImg from '@/assets/phobrang-ladakh.png';

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
            {/* Phone Card */}
            <div className="p-8 bg-gradient-card rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="font-body text-2xl font-bold text-primary mb-2">+91 70062 42758</p>
                  <p className="font-body text-sm text-muted-foreground">Available for calls and inquiries</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-8 bg-gradient-card rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="font-body text-lg font-bold text-foreground mb-2">info@zanskartourism.com</p>
                  <p className="font-body text-sm text-muted-foreground">We'll respond within 24 hours</p>
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
              <Phone className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-1">Response Time</h4>
              <p className="font-body text-sm text-muted-foreground">We respond within 2 hours</p>
            </div>
          </div>

          {/* Photo Section */}
          <div className="mt-16 relative rounded-2xl overflow-hidden">
            <img
              src={phobrangImg}
              alt="Phobrang, Ladakh - stunning mountain landscape"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-end p-8">
              <div>
                <p className="font-display text-2xl font-bold text-foreground">Phobrang, Ladakh</p>
                <p className="font-body text-muted-foreground">Experience the breathtaking beauty of Zanskar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
