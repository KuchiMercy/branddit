import PageLayout from "@/components/layout/PageLayout";
import { CaseStudiesHero, CaseStudyGrid } from "@/components/case-studies";
import ContactCard from "@/components/ContactCard";

export default function CaseStudiesPage() {
  return (
    <PageLayout showNavbar={false}>
      <CaseStudiesHero />
      <CaseStudyGrid />
      <ContactCard
        heading="Ready to build something remarkable?"
        description="Join the rank of ambitious brands shaping the future. Let’s create your next chapter together."
        buttonText="Start Your Project"
        showButtonIcon={false}
        whatsappText="Message us"
        showWhatsApp={false}
      />
    </PageLayout>
  );
}
