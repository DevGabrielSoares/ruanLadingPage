import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Advantages from '@/components/Advantages';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <Advantages />
      <TestimonialsCarousel />
      <AboutSection />
    </main>
  );
}