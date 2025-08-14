import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Footer from '@/components/Footer';
import Advantages from '@/components/Advantages';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PracticeAreas />
      <Advantages />
      <TestimonialsCarousel />
      <AboutSection />
      <Footer />
    </main>
  );
}