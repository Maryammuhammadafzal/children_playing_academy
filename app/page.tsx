
import AboutPage from "./About/Page.tsx";
import FeaturesPage from "./Features/Page.tsx";
import BenefitsPage from "./Benefits/Page.tsx";
import ServicePage from "./Services/Page.tsx";
import ContactPage from "./Contact/Page.tsx";

export default function Home() {
  return <div className="w-full mx-auto h-auto flex flex-col items-center overflow-hidden">
    <AboutPage/>
    <FeaturesPage/>
    <BenefitsPage/>
    <ServicePage/>
    <ContactPage/>
  </div>;
}
