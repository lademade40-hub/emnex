import { Footer, Header } from "@/components/emnex/chrome";
import { Hero } from "@/components/emnex/hero";
import { Problem, Process, Services, Solution } from "@/components/emnex/sections";
import { About, Faq, FinalCta } from "@/components/emnex/trust";
import { CloserLook, SelectedWork } from "@/components/emnex/work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SelectedWork />
        <Services />
        <Process />
        <CloserLook />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
