import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { ClawnAI } from "../components/ClawnAI";
import { Videos } from "../components/Videos";
import { Testimonials } from "../components/Testimonials";
import { VisionMission } from "../components/VisionMission";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { TestAuth } from "../components/TestAuth";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ClawnAI />
        <Videos />
        <Testimonials />
        <VisionMission />
        <Contact />
        <div className="container mx-auto px-4 py-8">
          <TestAuth />
        </div>
      </main>
      <Footer />
    </div>
  );
}