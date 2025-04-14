import HeroSection from "./(sections)/hero-section";
import AboutSection from "./(sections)/about-section";
import TechStackSection from "./(sections)/tech-stack-section";
import { SvgDemo } from "@/components/demo/svg-demo";

const PortfolioPage = () => {
  return (
    <>
      <main>
        <HeroSection />
      </main>
      <AboutSection />
      <div>
        <TechStackSection />
      </div>
    </>
  );
};

export default PortfolioPage;
