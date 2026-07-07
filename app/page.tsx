import Header from "@/components/home/Header";
import Footer from "@/components/layout/Footer";
import ServiceOverview from "@/components/home/ServiceOverview";
import StrategicProcess from "@/components/home/StrategicProcess";
import Testimonial from "@/components/home/Testimonial";
import ContactCard from "@/components/ContactCard";
import BrandGuide from "@/components/home/BrandGuide";
import CaseStudies from "@/components/home/CaseStudies";

export default function Home() {
  return (
    <div className="text-brand-blue">
      <Header />
      <ServiceOverview />
      <CaseStudies />
      <StrategicProcess />
      <Testimonial />
      <BrandGuide />
      <ContactCard />
      <Footer />
    </div>
  );
}
