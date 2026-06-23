import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Personality from "../components/Personality";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <main className="bg-[#10251B] text-[#F5EFE3] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Personality />
      <Projects />
      <Contact />
    </main>
  );
}