import { Waves, Tent, Mountain, Building2 } from 'lucide-react';
import raftingImage from '@/assets/rafting.jpg';
import campingImage from '@/assets/camping.jpg';
import monasteryImage from '@/assets/monastery.jpg';
import trekkingImage from '@/assets/trekking.jpg';

const adventures = [
  {
    id: 1,
    title: 'River Rafting',
    description: 'Navigate the thrilling rapids of the Zanskar River through dramatic canyons and pristine wilderness.',
    icon: Waves,
    image: raftingImage,
    duration: '2-4 Days',
    difficulty: 'Moderate to Challenging',
  },
  {
    id: 2,
    title: 'Luxury Camping',
    description: 'Sleep under the stars in our premium camps with stunning mountain views and Milky Way skies.',
    icon: Tent,
    image: campingImage,
    duration: 'Flexible',
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: 'Monastery Tours',
    description: 'Explore ancient Buddhist monasteries dating back centuries, perched on dramatic cliffs.',
    icon: Building2,
    image: monasteryImage,
    duration: '1-3 Days',
    difficulty: 'Easy to Moderate',
  },
  {
    id: 4,
    title: 'Himalayan Treks',
    description: 'Trek through remote valleys, high passes, and witness landscapes untouched by time.',
    icon: Mountain,
    image: trekkingImage,
    duration: '5-14 Days',
    difficulty: 'Moderate to Hard',
  },
];

const Adventures = () => {
  return (
    <section id="adventures" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Our Experiences
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Unforgettable <span className="text-gradient">Adventures</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From adrenaline-pumping rafting to peaceful monastery visits, we offer curated experiences that showcase the best of Zanskar.
          </p>
        </div>

        {/* Adventures Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {adventures.map((adventure, index) => (
            <div
              key={adventure.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 p-3 bg-primary/20 backdrop-blur-sm rounded-xl">
                  <adventure.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 -mt-8 relative">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {adventure.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 line-clamp-2">
                  {adventure.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-secondary rounded-full font-body text-xs text-secondary-foreground">
                    {adventure.duration}
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full font-body text-xs text-secondary-foreground">
                    {adventure.difficulty}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Book This Adventure
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;
