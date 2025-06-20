
import AboutPage from "./about/Page";
import FeaturesPage from "./features/Page";
import BenefitsPage from "./benefits/Page";
import ServicePage from "./services/Page";
import ContactPage from "./contact/Page";

export default function Home() {
  return <div className="w-full mx-auto h-auto flex flex-col items-center overflow-hidden">
    <AboutPage/>
    <FeaturesPage/>
    <BenefitsPage/>
    <ServicePage/>
    <ContactPage/>
  </div>;
}
