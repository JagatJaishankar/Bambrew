import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import BundleSection from "@/components/BundleSection";
import ProductScience from "@/components/ProductScience";
import Education from "@/components/Education";
import SeedLabs from "@/components/SeedLabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <BundleSection />
        <ProductScience />
        <Education />
        <SeedLabs />
      </main>
      <Footer />
    </>
  );
}
