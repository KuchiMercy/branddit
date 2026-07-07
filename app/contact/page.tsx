import PageLayout from "@/components/layout/PageLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormCard from "@/components/ContactFormCard";

export default function ContactPage() {
  return (
    <PageLayout showNavbar={false}>
      <ContactHero />

      <section className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto w-[90%]">
          <ContactInfo />
          <ContactFormCard />
        </div>
      </section>
    </PageLayout>
  );
}
