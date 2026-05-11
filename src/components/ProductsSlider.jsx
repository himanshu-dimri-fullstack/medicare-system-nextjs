"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { categories } from "../data/products";

const ProductSlider = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const trackRef = useRef(null);

    const sliderData = [...categories, ...categories];

    useEffect(() => {
        if (!trackRef.current) return;

        if (selectedCategory) {
            document.body.style.overflow = "hidden";
            trackRef.current.style.animationPlayState = "paused";
        } else {
            document.body.style.overflow = "auto";
            trackRef.current.style.animationPlayState = "running";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedCategory]);

    return (
        <>
            <div className="overflow-hidden py-10">
                <div
                    ref={trackRef}
                    className="marquee-track flex w-max gap-6"
                    onMouseEnter={() => {
                        if (trackRef.current) {
                            trackRef.current.style.animationPlayState = "paused";
                        }
                    }}
                    onMouseLeave={() => {
                        if (!selectedCategory && trackRef.current) {
                            trackRef.current.style.animationPlayState = "running";
                        }
                    }}
                >
                    {sliderData.map((cat, index) => (
                        <div
                            key={`${cat.name}-${index}`}
                            onClick={() => setSelectedCategory(cat)}
                            className="w-65 shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex w-full justify-center p-4">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    width={80}
                                    height={80}
                                    className="h-20 w-20 object-contain"
                                />
                            </div>

                            <h3 className="py-3 text-center text-sm font-semibold sm:text-md">
                                {cat.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-md">
                    <div className="relative w-full max-w-lg animate-fadeIn rounded-3xl bg-white p-6 shadow-2xl">

                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="absolute top-4 right-4 text-xl text-gray-400 transition hover:text-red-500"
                        >
                            ✕
                        </button>

                        <h2 className="mb-2 text-2xl font-bold text-[#1c9d36]">
                            {selectedCategory.name}
                        </h2>

                        <div className="mb-4 h-1 w-16 rounded-full bg-[#1c9d36]"></div>

                        <div className="grid max-h-75 grid-cols-2 gap-3 overflow-y-auto">
                            {selectedCategory.subProducts.map((item, i) => (
                                <div
                                    key={i}
                                    className="cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm transition hover:bg-[#1c9d36]/10"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 w-full rounded-xl bg-[#1c9d36] py-3 font-semibold text-white transition hover:bg-[#15852c]">
                            Explore Category
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default ProductSlider;