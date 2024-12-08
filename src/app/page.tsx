import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/footer";
import CardDetails, { Hero } from "./components/hero";


export default function Home() {
  return(
<div>
  <Header/>
  <CardDetails/>
  <Hero/>
  <Footer/>
  
  
</div>
  )
};
  
   
     