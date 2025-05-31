
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCategories from "@/components/ProductCategories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProductCategories />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
