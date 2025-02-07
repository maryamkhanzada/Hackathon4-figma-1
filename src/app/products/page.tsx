
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    image: { asset: { _ref: string; url: string }; alt?: string };
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
                {products.map((product, id) => (
                    <Link href={`/products/${product._id}`} key={id}>
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
                        </Link>
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
