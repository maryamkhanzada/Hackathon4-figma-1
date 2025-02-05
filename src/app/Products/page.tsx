//  "use client"; 
// import React, {useEffect, useState} from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";


// const sanity = sanityClient({
//     projectId: "4c9svhu8",
//     dataset: "production",
//     apiVersion: "2025-02-03",
//     useCdn: true,
// });

// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     imageUrl: string;
//     productImage: {
//         assest: {
//             _ref: string;
//         };
//     };
//     tags: string[];
// }

// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<Product[]>([]);

//     const fetchProducts = async () => {
//         try {
//             const query = `
//             *[type == "product"] {
//             _id,
//             title,
//             price,
//             description,
//             discountPercentage,
//             "imageUrl": productImage.assets->url,
//             tags
//             }
//             `;
//             const data = await sanity.fetch(query);
//             setProducts(data);
//         } catch (error) {
//             console.error("Error Fetching Products:", error);
//         }
//     };

//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.title} has been added to your cart!`);
//     };

    // function truncateDescription(description: string): React.ReactNode | Iterable<React.ReactNode> {
    //     throw new Error("Function not implemented.");
    // }


    // useEffect(() =>{
    //     fetchProducts();
    // }, []);

   
    // return(
    //     <div className="p-4">
    //         <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>

    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //             {products.map((product) => (
    //                 <div
    //                 key={product._id}
    //                 className="g-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">

    //                 <Image
    //                 src={product.imageUrl}
    //                 alt={product.title}
    //                 width={300}
    //                 height={300}
    //                 className="w-full h-48 object-cover rounded-md"/>

    //                 <div className="mt-4">
    //                     <h2 className="text-lg font-semibold">{product.title}</h2>
    //                     <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
    //                     <div className="flex justify-between items-center mt-4">
                        //     <div>
                        //          <p className="text-slate-600 font-bold">{product.price}</p>
                        //          {product.discountPercentage > 0 && (
                        //             <p className="text-sm text-green-600">
                        //                 {product.discountPercentage}% OFF
                        //             </p>
                        //         )}
                        //     </div>

                        // </div>
                        // <div className="mt-2 flex flex-wrap gap-2">
                        //     {product.tags.map((tag, index) =>(
                        //         <span
                        //         key={index}
                        //         className="text-xs bg-slate-400 text-black px-2 py-1">
                        //             {tag}

                        //         </span>
                        //     ))}

                               

                        // </div>

                        // {/* Add to cart functionality */}

                        //  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        // onClick={() => addToCart(product)}
                        // >
                        //     Add To Cart



            //             </button>


            //         </div>

            //         </div>
            //     ))}


            //  </div>
            // {/* cart summary */}
            // <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md ">
            //     <h2 className="text-lg font-black text-red-800"> Cart Summary </h2>                {cart.length > 0 ? (
            //          <ul className="space-y-4">
            //             {cart.map((item, index) => (
            //                 <li
            //                key={index}
            //                  className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
            //                     <div>
            //                          <p className="font-medium text-slate-900">{item.title}</p>
            //                          <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
            //                      </div>
            //                      <Image
    //                             src={item.imageUrl}
    //                             alt={item.title}
    //                             width={50}
    //                             height={50}
    //                             className="rounded-md"/>

    //                          </li>
    //                     ))}

    //                   </ul>
    //             ) : (
    //                 <p className="text-black text-center">Your Cart Is Empty Please Add Products</p>
    //             )}

    //         </div>

    //      </div>
    //  );
//  };
//  export default ProductCards;

// "use client"; 
// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";

// // Sanity client setup
// const sanity = sanityClient({
//     projectId: "4c9svhu8",
//     dataset: "production",
//     apiVersion: "2025-02-03",
//     useCdn: true,
// });

// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     imageUrl: string | null;
//     productImage: {
//         asset: {
//             _ref: string;
//         };
//     };
//     tags?: string[]; // Make tags optional
// }

// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<Product[]>([]);

//     // Fetch products from Sanity
//     const fetchProducts = async () => {
//         try {
//             const query = `
//               *[_type == "product"] {
//                 _id,
//                 title,
// //                 price,
// //                 description,
// //                 discountPercentage,
// //                 "imageUrl": productImage.asset->url,
// //                 tags
// //               }
// //             `;
//             const data = await sanity.fetch(query);
//             setProducts(data);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     // Add to cart function
//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.title} has been added to your cart!`);
//     };

//     // Save cart in localStorage
//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);

//     // Load cart from localStorage on mount
//     useEffect(() => {
//         const storedCart = localStorage.getItem("cart");
//         if (storedCart) {
//             setCart(JSON.parse(storedCart));
//         }
//         fetchProducts();
//     }, []);

//     // Truncate long descriptions
//     const truncateDescription = (description: string, length = 50) => {
//         return description.length > length ? description.substring(0, length) + "..." : description;
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product._id}
//                         className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//                     >
// //                         <Image
//                             src={product.imageUrl || "/fallback-image.jpg"} // Fallback image if imageUrl is null
//                             alt={product.title}
//                             width={300}
//                             height={300}
//                             className="w-full h-48 object-cover rounded-md"
//                         />

//                         <div className="mt-4">
//                             <h2 className="text-lg font-semibold">{product.title}</h2>
//                             <p className="text-slate-800 mt-2 text-sm">
//                                 {truncateDescription(product.description)}
//                             </p>
// //                             <div className="flex justify-between items-center mt-4">
// //                                 <div>
// //                                     <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
// //                                     {product.discountPercentage > 0 && (
//                                         <p className="text-sm text-green-600">
//                                             {product.discountPercentage}% OFF
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="mt-2 flex flex-wrap gap-2">
//                                 {/* Ensure tags is an array before mapping */}
//                                 {(product.tags || []).map((tag, index) => (
//                                     <span key={index} className="text-xs bg-slate-400 text-black px-2 py-1">
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* Add to Cart Button */}
//                             <button
//                                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                                 onClick={() => addToCart(product)}
//                             >
// //                                 Add To Cart
// //                             </button>
// //                         </div>
// //                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductCards;
// "use client";
// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";

// // Sanity client setup
// const sanity = sanityClient({
//     projectId: "4c9svhu8",
//     dataset: "production",
//     apiVersion: "2025-02-03", // Ensure the API version matches your Sanity version
//     useCdn: true,
// });

// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     imageUrl: string | null;
//     productImage: {
//         asset: {
//             _ref: string;
//         };
//     };
//     tags?: string[];
// }

// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<Product[]>([]);

//     // Fetch products from Sanity
//     const fetchProducts = async () => {
//         try {
//             const query = `
//                 *[_type == "product"] {
//                     _id,
//                     title,
//                     price,
//                     description,
//                     discountPercentage,
//                     "imageUrl": productImage.asset->url,
//                     tags
//                  }
//             `;
//             const data = await sanity.fetch(query);
//             setProducts(data);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     // Add to cart function
//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.title} has been added to your cart!`);
//     };

//     // Save cart in localStorage
//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);

//     // Load cart from localStorage on mount
//     useEffect(() => {
//         const storedCart = localStorage.getItem("cart");
//         if (storedCart) {
//             setCart(JSON.parse(storedCart));
//         }
//         fetchProducts();
//     }, []);

//     // Truncate long descriptions
//     const truncateDescription = (description: string, length = 50) => {
//         return description.length > length ? description.substring(0, length) + "..." : description;
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product._id}
//                         className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//                     >
//                         {/* Handle Image Rendering */}
//                         <Image
//                             src={product.imageUrl || "/fallback-image.jpg"}  // Use fallback image if imageUrl is null
//                             alt={product.title}
//                             width={300}
//                             height={300}
//                             className="w-full h-48 object-cover rounded-md"
//                         />

//                         <div className="mt-4">
//                             <h2 className="text-lg font-semibold">{product.title}</h2>
//                             <p className="text-slate-800 mt-2 text-sm">
//                                 {truncateDescription(product.description)}
//                             </p>
//                             <div className="flex justify-between items-center mt-4">
//                                 <div>
//                                     <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
//                                      {product.discountPercentage > 0 && (
//                                         <p className="text-sm text-green-600">
//                                             {product.discountPercentage}% OFF
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="mt-2 flex flex-wrap gap-2">
//                                 {/* Ensure tags is an array before mapping */}
//                                 {(product.tags || []).map((tag, index) => (
//                                     <span key={index} className="text-xs bg-slate-400 text-black px-2 py-1">
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* Add to Cart Button */}
//                             <button
//                                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                                 onClick={() => addToCart(product)}
//                             >
//                                 Add To Cart
//                             </button>
//                          </div>
//                      </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductCards;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";


interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    image:{ asset: { _ref: string; url: string }; alt?: string };
    tags?: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = `
                *[_type == "product"] {
                _id,
                title,
                price,
                description,
                discountPercentage,
                image{
                 asset,
                  alt
                  },
                tags
                }
                `;
                
                const data = await client.fetch(query);
                console.log("Fetched Data:", data);
                setProducts(data);
               } catch (error) {
                console.error("Error Fetching Products:", error);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`);
    };

    function truncateDescription(description: string) {
        return description.length > 50 ? description.substring(0, 50) + "..." : description;
    }

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API&apos;s Data</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        {product.image ? (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded-md"
                            />
                        ) : null}

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-slate-600 font-bold">${product.price}</p>
                                    {product.discountPercentage > 0 && (
                                        <p className="text-sm text-green-600">
                                            {product.discountPercentage}% OFF
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-slate-400 text-black px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Add to cart button */}
                            <button 
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                onClick={() => addToCart(product)}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                                <div>
                                    <p className="font-medium text-slate-900">{item.title}</p>
                                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                                </div>
                                {item.image ? (
                                    <Image
                                    src={urlFor(item.image).url()}
                                        alt={item.title}
                                        width={50}
                                        height={50}
                                        className="rounded-md"
                                    />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-black text-center">Your Cart Is Empty. Please Add Products.</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;
