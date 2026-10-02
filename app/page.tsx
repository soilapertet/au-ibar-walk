import Hero from "@/components/Hero";
import About from "@/components/About";
import GetInvolved from "@/components/GetInvolved";
import Fees from "@/components/Fees";
import RouteInfo from "@/components/RouteInfo";
import CTABand from "@/components/CTABand";
import RegistrationSteps from "@/components/RegistrationSteps";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <GetInvolved/>
      <Fees/>
      <RegistrationSteps/>
      <RouteInfo/>
      <CTABand/>
    </>
  );
}
