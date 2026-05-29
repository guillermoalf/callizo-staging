import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { CatalogPreview } from "@/components/sections/catalog-preview";
import { PetsDivision } from "@/components/sections/pets-division";
import { WhyCallizo } from "@/components/sections/why-callizo";
import { FootprintMap } from "@/components/sections/footprint-map";
import { Resources } from "@/components/sections/resources";
import { ContactForm } from "@/components/sections/contact-form";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <CatalogPreview />
      <PetsDivision />
      <WhyCallizo />
      <FootprintMap />
      <Resources />
      <ContactForm />
      <SiteFooter />
    </>
  );
}
