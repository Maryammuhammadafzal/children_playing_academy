import Image from "next/image";
import AboutPage from "./About/Page";
import FeaturesPage from "./Features/Page";

export default function Home() {
  return <div className="w-full h-auto overflow-hidden ">
    <AboutPage/>
    <FeaturesPage/>
  </div>;
}
