import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import About from "@/components/Sections/About";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
