import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { GetToKnow } from "@/components/sections/GetToKnow";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Nav active="home" overlay />
      <main>
        <Hero />
        <Overview />
        <Services />
        <Projects />
        <Process />
        <Stats />
        <GetToKnow />
      </main>
      <Footer />
    </>
  );
}
