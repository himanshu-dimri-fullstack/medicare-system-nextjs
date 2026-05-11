"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4">

                <div className="flex h-20 items-center justify-between">

                    <Link href="/" className="flex cursor-pointer flex-col">

                        <Image
                            src="/assets/logo2.png"
                            alt="Logo"
                            width={64}
                            height={48}
                            className="h-12 w-16"
                            priority
                        />

                        <span className="text-sm font-semibold text-[#1c9d36]">
                            Medicare <span className="text-black">System Inc.</span>
                        </span>

                    </Link>

                    <ul className="hidden gap-2 text-lg font-medium md:flex lg:gap-6">
                        {menuItems.map((item, i) => {
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={i}
                                    href={item.path}
                                    className={`rounded-xl px-4 py-2 transition-all duration-300
                    ${isActive
                                            ? "bg-[#1c9d36] text-white"
                                            : "hover:bg-[#1c9d36] hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </ul>

                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-2xl"
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>

                </div>

                {open && (
                    <div className="bg-white pb-4 md:hidden">

                        <ul className="flex flex-col gap-3 text-lg font-medium">

                            {menuItems.map((item, i) => {
                                const isActive = pathname === item.path;

                                return (
                                    <Link
                                        key={i}
                                        href={item.path}
                                        onClick={() => setOpen(false)}
                                        className={`rounded-xl px-4 py-2 transition-all duration-300
                      ${isActive
                                                ? "bg-[#1c9d36] text-white"
                                                : "hover:bg-[#1c9d36] hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                        </ul>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;