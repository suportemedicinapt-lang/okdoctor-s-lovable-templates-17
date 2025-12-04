import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Procedures from "@/components/Procedures";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Procedures />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
