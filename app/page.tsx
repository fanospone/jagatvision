import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import AccessControl from "@/components/AccessControl";
import SmartHome from "@/components/SmartHome";
import UsagePanel from "@/components/UsagePanel";
import AccessProducts from "@/components/AccessProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <Pricing />
      <UsagePanel/>
      <SmartHome/>
      <AccessControl/>
      <AccessProducts />
      <WhyChooseUs />
      <Clients/>
      <Gallery />
    </>
  );
}
