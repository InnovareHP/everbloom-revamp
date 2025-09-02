import AmenitiesSection from "./amenities";
import ContentFirst from "./content-first";
import FooterSection from "./footer";
import { HeroHeader } from "./header";
import HeroSectionFrontPage from "./hero-section";
import PromoAndOffer from "./promo-and-offer";
import Testimonials from "./testimonials";

const FrontPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroHeader />
      <HeroSectionFrontPage />
      <ContentFirst />
      <AmenitiesSection />
      <PromoAndOffer />
      <Testimonials />
      <FooterSection />
    </main>
  );
};

export default FrontPage;
