import Image from "next/image";
import AboutPage from "./About/Page";
import FeaturesPage from "./Features/Page";
import BenefitsPage from "./Benefits/Page";

export default function Home() {
  return <div className="w-[90%] h-auto overflow-hidden p-6 relative">
    <AboutPage/>
    <FeaturesPage/>
    <BenefitsPage/>
  </div>;
}
