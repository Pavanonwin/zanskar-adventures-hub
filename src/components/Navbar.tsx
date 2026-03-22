import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'DESTINATIONS', href: '#adventures' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group">
            <span className="font-display text-3xl font-bold tracking-tight text-foreground">
              ZANSKAR<span className="font-light">TOURISM</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-xs font-medium tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+917006242758"
              className="flex items-center gap-2 font-body text-xs tracking-wider text-foreground/70 hover:text-foreground transition-colors border border-border rounded-none px-5 py-2.5"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 70062 42758
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-xs font-medium tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+917006242758"
                className="flex items-center gap-2 font-body text-xs tracking-wider text-foreground/70 mt-2"
              >
                <Phone className="h-3.5 w-3.5" />
                +91 70062 42758
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
