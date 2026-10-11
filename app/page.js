// This is the one page of the website. It just puts all the parts in order.
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Ribbons from "@/components/Ribbons";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Effects />
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <Intro />
        <Services />
        <Ribbons />
        <Process />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
