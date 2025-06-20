
import AboutPage from "./about/page";
import FeaturesPage from "./features/page";
import BenefitsPage from "./benefits/page";
import ServicePage from "./services/page";
import ContactPage from "./contact/page";

export default function Home() {
  return <div className="w-full mx-auto h-auto flex flex-col items-center overflow-hidden">
    <AboutPage/>
    <FeaturesPage/>
    <BenefitsPage/>
    <ServicePage/>
    <ContactPage/>
  </div>;
}
