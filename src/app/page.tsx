import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { WhatIDo } from "@/components/WhatIDo";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Work />
      <About />
      <Process />
      <Contact />
    </>
  );
}
