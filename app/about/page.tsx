import PageLayout from "@/components/layout/PageLayout";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Philosophy from "@/components/about/Philosophy";
import Team from "@/components/about/Team";
import CoreValues from "@/components/about/CoreValues";
import ContactCard from "@/components/ContactCard";

export default function AboutPage() {
  return (
    <PageLayout showNavbar={false}>
      <AboutHero />
      <OurStory />
      <Philosophy />
      <Team />
      <CoreValues />
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
