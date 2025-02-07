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
  image: { asset: { _ref: string; url: string }; alt?: string };
  tags?: string[];
}

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          // Use a parameterized query with $id and pass { id: slug }
          const query = `
            *[_type == "product" && _id == $id] {
              _id,
              title,
              price,
              description,
              discountPercentage,
              image {
                asset,
                alt
              },
              tags
            }
          `;
          const data: Product[] = await client.fetch(query, { id: slug });
          console.log("Fetched Product Data:", data);

          // Extract the first product (if exists) from the returned array
          if (data && data.length > 0) {
            setProduct(data[0]);
          } else {
            console.error("No product found with the given id");
          }
        } catch (error) {
          console.error("Error Fetching Product:", error);
        }
      };
      fetchProduct();
    }
  }, [slug]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">{product.title}</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
        )}

        <div className="mt-4">
          <p className="text-slate-800 mt-2 text-sm">{product.description}</p>
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
              <span key={index} className="text-xs bg-slate-400 text-black px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Add to cart button */}
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                )}
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

export default ProductDetail;
