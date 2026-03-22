import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                ZANSKAR<span className="font-light">TOURISM</span>
              </span>
            </a>
            <p className="font-body text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Your trusted partner for authentic adventures in Zanskar Valley. Experience the untouched beauty of the Himalayas with local experts.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Adventures', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-foreground mb-6">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li>+91 70062 42758</li>
              <li>Padum, Zanskar Valley</li>
              <li>Ladakh, India - 194401</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} ZANSKARTOURISM. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Crafted with ❤️ for adventure seekers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
