
// import ProductCards from "./Products/page";
// import Header from "./components/Header";
// import Footer from "./components/footer";
// import  { ImageSection,Hero,BlogSection, Hero1 } from "./components/hero";



// export default function Home() {
//   return(
// <div>
//   <Header/>
//   <ImageSection/>
//   <Hero/>
//   <BlogSection/>
//   <Hero1/>

//   <ProductCards/>
//   <Footer/>
  
  
// </div>
//   )
// };

// import { client } from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   name?: string;
//   imagePath?: string;
//   description?: string;
//   price?: number;
//   category?: string;
//   stockLevel?: string;
//   isFeaturedProduct?: boolean;
// }

// // Server Component ke andar fetch karna
// const fetchProducts = async () => {
//   return await client.fetch(`*[_type == 'product']`);
// };

// const Home = async () => {
//   const products: Product[] = await fetchProducts(); // Fetch data

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h2>{product.name || "Unnamed Product"}</h2>
//             {product.imagePath ? (
//               <img src={product.imagePath} alt={product.name} width="200" />
//             ) : (
//               <p>No Image Available</p>
//             )}
//             <p>{product.description || "No description available"}</p>
//             <p>Price: ${product.price || "N/A"}</p>
//             <p>Category: {product.category || "Uncategorized"}</p>
//             <p>Stock Level: {product.stockLevel || "Unknown"}</p>
//             <p>Featured: {product.isFeaturedProduct ? "Yes" : "No"}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

import Shopproducts from "./Products/page";
import ProductCards from "./Products/page";
import Header from "./components/Header";
import Footer from "./components/footer";
import { ImageSection, Hero, BlogSection, Hero1 } from "./components/hero";


  export default function Home() {
      return(
    <div>
      <Header />
      <ImageSection />
      <Hero />
      <BlogSection />
      <Hero1 />
      <ProductCards/>

    

      <Footer /> 
    </div>
  );
}
