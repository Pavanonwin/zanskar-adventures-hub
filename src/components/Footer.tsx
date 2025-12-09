import { Mountain, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <Mountain className="h-8 w-8 text-primary" />
            <span className="font-display text-2xl font-bold text-foreground">
              Zanskar<span className="text-primary">Tourism</span>
            </span>
            </a>
            <p className="font-body text-muted-foreground mb-6 max-w-md">
              Your trusted partner for authentic adventures in Zanskar Valley. Experience the untouched beauty of the Himalayas with local experts who know every trail.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Adventures', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li>+91 70062 42758</li>
              <li>Padum, Zanskar Valley</li>
              <li>Ladakh, India - 194401</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZanskarTourism. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Crafted with ❤️ for adventure seekers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
