import PageLayout from "@/components/layout/PageLayout";
import ServicesHero from "@/components/services/ServicesHero";
import ProblemSection from "@/components/services/ProblemSection";
import ServicesList from "@/components/services/ServicesList";
import FAQ from "@/components/services/FAQ";
import StrategicProcess from "@/components/home/StrategicProcess";
import ContactFormCard from "@/components/ContactFormCard";

export default function ServicesPage() {
  return (
    <PageLayout showNavbar={false}>
      <ServicesHero />
      <ProblemSection />
      <ServicesList />
      <StrategicProcess showStats={false} />
      <FAQ />
      <div id="contact-form">
        <ContactFormCard />
      </div>
    </PageLayout>
  );
}
