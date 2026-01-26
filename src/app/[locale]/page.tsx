
import About from "@/components/about";
import ContactSection from "@/components/call";
import DemoSection from "@/components/demo";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
export default function HomePage() {


  return (
    <main className="mt-2   ">
      <div id="home">
        <Hero/>
      </div>
      <div id="pricing">
        <Pricing/>
      </div>
     
     <div id="about">
      <About/>
     </div>

     <div>
      <DemoSection/>
     </div>
     <div id="contact">
      <ContactSection/>
     </div>

    </main>
  );
}
