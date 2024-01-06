import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <FeaturesSection />

        <ProjectsSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
