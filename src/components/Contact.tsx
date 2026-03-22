import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import phobrangImg from '@/assets/phobrang-ladakh.png';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight">
              Plan Your<br />
              <span className="italic font-semibold">Adventure</span>
            </h2>
            <p className="font-body text-base text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Ready to explore Zanskar? Reach out to us and let's create your perfect itinerary.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 border border-border">
              <Phone className="h-6 w-6 text-primary mb-6" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Call Us</h3>
              <p className="font-display text-2xl text-foreground mb-2">+91 70062 42758</p>
              <p className="font-body text-sm text-muted-foreground">Available for calls and inquiries</p>
            </div>

            <div className="p-10 border border-border">
              <Mail className="h-6 w-6 text-primary mb-6" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Email Us</h3>
              <p className="font-body text-lg text-foreground mb-2">info@zanskartourism.com</p>
              <p className="font-body text-sm text-muted-foreground">We'll respond within 24 hours</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <MapPin className="h-5 w-5 text-primary mx-auto mb-4" />
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">Location</h4>
              <p className="font-body text-sm text-muted-foreground">Padum, Zanskar Valley, Ladakh, India</p>
            </div>
            <div className="text-center">
              <Clock className="h-5 w-5 text-primary mx-auto mb-4" />
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">Best Season</h4>
              <p className="font-body text-sm text-muted-foreground">June to September (Summer) & January to February (Frozen River)</p>
            </div>
            <div className="text-center">
              <Phone className="h-5 w-5 text-primary mx-auto mb-4" />
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">Response Time</h4>
              <p className="font-body text-sm text-muted-foreground">We respond within 2 hours</p>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative overflow-hidden">
            <img
              src={phobrangImg}
              alt="Phobrang, Ladakh - stunning mountain landscape"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-10">
              <p className="font-display text-3xl font-normal text-white">Phobrang, Ladakh</p>
              <p className="font-body text-sm text-white/70 mt-1">Experience the breathtaking beauty of Zanskar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
