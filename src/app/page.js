import Hero from '@/components/Hero';
import Graph from '../components/Graph'
import Timeline from '../components/Timeline'
import Fitonist from '@/components/Fitonist';
import Letter from '@/components/Letter';

export default function Home() {
  return (
    <>
      <Hero />
      <Fitonist />
      <Graph />
      <Timeline />
      <Letter />
    </>
  );
}
