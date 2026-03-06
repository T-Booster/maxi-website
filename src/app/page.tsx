import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/SocialProof";
import AppShowcase from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FreeValue";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <AppShowcase />
      <HowItWorks />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
