"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  image: {
    asset: {
      url: string;
    };
  };
  quantity: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    country: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    paymentMethod: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderTracking, setOrderTracking] = useState({
    status: "Pending",
    estimatedDeliveryDate: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]").map(
      (product: Product) => ({
        ...product,
        quantity: product.quantity || 1,
      })
    );
    setCart(savedCart);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setOrderTracking({
      status: "Shipped",
      estimatedDeliveryDate: "2025-02-05", // Example date
    });

    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden bg-white">
      <div className="min-h-screen flex justify-center items-center md:mt-20">
        <div className="w-full max-w-[1440px]">
          <h1 className="text-center font-poppins font-bold text-[36px] leading-[54px] text-[#000000]">
            Get In Touch With Us
          </h1>
          <p className="text-center font-poppins text-[16px] text-[#9f9f9f] mt-4 mb-8 px-6 md:px-0">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-20 w-full md:h-full">
            <div className="w-full mt-10 order-1 px-10 md:px-0">
              <form>
                <div className="mb-4 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex flex-col w-full">
                    <label htmlFor="firstName" className="block font-poppins font-medium text-[16px] pb-4">
                      First Name
                    </label>
                    <input id="firstName" type="text" name="firstName" value={userDetails.firstName} onChange={handleInputChange} className="w-full p-3 border border-[#9f9f9f] rounded-[10px] text-[#9f9f9f]" required />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="lastName" className="block font-poppins font-medium text-[16px] pb-4">
                      Last Name
                    </label>
                    <input id="lastName" type="text" name="lastName" value={userDetails.lastName} onChange={handleInputChange} className="w-full p-3 border border-[#9f9f9f] rounded-[10px] text-[#9f9f9f]" required />
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <button type="button" className="w-full bg-[#a57159] text-white py-2 rounded-md shadow-lg" onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full p-6 mb-5 pt-8">
              <h2 className="text-center font-poppins font-bold text-[24px] mb-6">Your Cart</h2>
              {cart.length === 0 ? (
                <div className="flex flex-col justify-center items-center text-center">
                  <Image src="/sofa.png" alt="Empty Cart" width={180} height={180} />
                  <p className="font-poppins text-[20px] font-bold text-[#9f9f9f] mt-4">Your cart is empty</p>
                  <p className="font-poppins text-[16px] text-[#9f9f9f] mt-2">It looks like you have not added anything to your cart yet.</p>
                  <Link href="/shop">
                    <button className="mt-4 bg-[#a57159] text-white py-2 px-6 rounded-md">Start Shopping</button>
                  </Link>
                </div>
              ) : (
                <div>
                  {cart.map((product) => (
                    <div key={product.id} className="flex justify-between items-center mb-6 p-4 border border-[#e0e0e0] rounded-lg shadow-md">
                      <div className="flex items-center gap-4">
                        <Image src={product.image.asset.url} alt={product.name} width={80} height={80} className="object-cover" />
                        <div>
                          <p className="font-poppins text-[16px] font-semibold text-[#000000]">{product.name}</p>
                          <p className="font-poppins text-[14px] text-[#9f9f9f]">Qty: {product.quantity}</p>
                        </div>
                      </div>
                      <p className="font-poppins text-[16px] font-semibold text-[#000000]">{product.price}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {isOrderPlaced && (
              <div className="mt-10 text-center">
                <h3 className="font-poppins font-bold text-[20px]">Order Status: {orderTracking.status}</h3>
                <p className="font-poppins text-[16px] text-[#9f9f9f]">Estimated Delivery: {orderTracking.estimatedDeliveryDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
