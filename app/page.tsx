
import AboutPage from "./About/Page";
import FeaturesPage from "./Features/Page";
import BenefitsPage from "./Benefits/Page";
import ServicePage from "./Services/Page";
import ContactPage from "./Contact/Page";

export default function Home() {
  return <div className="w-full mx-auto h-auto flex flex-col items-center overflow-hidden">
    <AboutPage/>
    <FeaturesPage/>
    <BenefitsPage/>
    <ServicePage/>
    <ContactPage/>
  </div>;
}
