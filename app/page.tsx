import Hero from "@/components/Hero";
import About from "@/components/About";
import GetInvolved from "@/components/GetInvolved";
import Fees from "@/components/Fees";
import RegistrationSteps from "@/components/RegistrationSteps";
import RouteInfo from "@/components/RouteInfo";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import SponsorBanner from "@/components/SponsorBanner";

export default function Home() {
  return (
    <>
      <Hero/>
      <SponsorBanner/>
      <About />
      <GetInvolved/>
      <Fees/>
      <RegistrationSteps/>
      <RouteInfo/>
      <CTABand/>
      <FAQ/>
    </>
  );
}
