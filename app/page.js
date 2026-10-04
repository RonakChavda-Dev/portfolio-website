// This is the one page of the website. It just puts all the sections in order.
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Effects />
      <div className="bg-grid" aria-hidden="true" />
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />

      <Nav />
      <Hero />
      <Marquee />
      <main>
        <About />
        <Services />
        <Process />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
