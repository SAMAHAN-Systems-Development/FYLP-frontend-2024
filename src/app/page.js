import { Metadata } from 'next';
import NavigationBar from '../components/ui/NavigationBar';

export const metadata = {
  title: 'FYLP: Filipino Youth Leadership Program 2024',
  description:
    'The official Filipino Youth Leadership Program 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <NavigationBar />
      {/* FYLP: Filipino Youth Leadership Program 2024 */}
    </main >
  );
}
 