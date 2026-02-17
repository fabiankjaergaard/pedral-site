import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Philosophy from "@/components/sections/Philosophy";
import CollectionShowcase from "@/components/sections/CollectionShowcase";
import Featured from "@/components/sections/Featured";
import Numbers from "@/components/sections/Numbers";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <CollectionShowcase />
      <Featured />
      <Numbers />
      <Newsletter />
    </>
  );
}
