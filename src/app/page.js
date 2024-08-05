import { Metadata } from 'next';
import NavigationBar from '../components/ui/NavigationBar';
import HeroSection from '../components/Sections/HeroSection';
import Section2 from '../components/Sections/Section2';
<<<<<<<<< Temporary merge branch 1
import CheckStatusTxtField from '../components/CheckStatusTxtField'

export const metadata = {
  title: 'FYLP: Filipino Youth Leadership Program 2024',
  description: 'The official Filipino Youth Leadership Program 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      {/* <NavigationBar />
      <HeroSection />
      <Section2 /> */}
      <Section3 />
      <CheckStatusTxtField />
      <Section2 />
      <Section3 />
      <SectionFour />
      <SectionFive />
      {/* FYLP: Filipino Youth Leadership Program 2024 */}
    </main>
  );
}
