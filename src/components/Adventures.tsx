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
    <section id="adventures" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            OUR EXPERIENCES
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
            Unforgettable Adventures<br />
            <span className="italic font-semibold">Await You</span>
          </h2>
        </div>

        {/* Adventures Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden mb-6">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {adventure.duration}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {adventure.difficulty}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-3">
                  {adventure.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
                  {adventure.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                >
                  Learn More
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
