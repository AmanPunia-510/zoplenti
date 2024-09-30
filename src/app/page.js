import Hero from '@/components/Hero';
import Navbar from '../components/common/Navbar'
import Graph from '../components/Graph'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Graph />
      <Timeline/>
    </>
  );
}
