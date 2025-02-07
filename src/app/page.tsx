
import Header from "./components/Header";
import Footer from "./components/footer";
import { ImageSection, Hero, BlogSection, Hero1 } from "./components/hero";
import ProductCards from "./products/page";



  export default function Home() {
      return(
    <div>
      <Header />
      <ImageSection />
      <Hero />
      <BlogSection />
      <Hero1 />
      <ProductCards  />
         

      <Footer /> 
    </div>
  );
}

