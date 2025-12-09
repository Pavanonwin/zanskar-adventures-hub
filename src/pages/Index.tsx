import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Adventures from '@/components/Adventures';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Adventures />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
