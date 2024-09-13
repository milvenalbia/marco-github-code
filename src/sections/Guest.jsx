import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import ServicesSection from "./ServicesSection";

const Guest = () => {
  return (
    <div className="h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Guest;
