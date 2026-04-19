import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import FeeComparison from "@/components/FeeComparison";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import CompanyInfo from "@/components/CompanyInfo";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <FeeComparison />
        <Results />
        <Testimonials />
        <Flow />
        <FAQ />
        <ContactForm />
        <FinalCTA />
        <CompanyInfo />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
