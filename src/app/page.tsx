import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Work />
      <CTA />
    </>
  );
}
