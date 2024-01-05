import AboutSection from "./_components/AboutSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <FeaturesSection />

        <section id="projects">
          <h1>Projects</h1>
        </section>

        <section id="contact">
          <h1>Contato</h1>
        </section>
      </main>

      <Footer />
    </>
  );
}
