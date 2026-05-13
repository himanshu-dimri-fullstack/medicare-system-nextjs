import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <footer className="bg-[#0f172a] px-4 pt-14 pb-6 text-gray-300">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                {/* About */}
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        Medicare System
                    </h2>

                    <p className="text-sm leading-relaxed">
                        Providing trusted medical equipment and technical solutions since
                        2008. We deliver quality, safety, and innovation for healthcare
                        needs.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        Quick Links
                    </h2>

                    <ul className="space-y-2 text-sm">
                        {menuItems.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.path}
                                    className="transition hover:text-[#1c9d36]"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        Contact
                    </h2>

                    <ul className="space-y-3 text-sm">

                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#1c9d36]" />
                            +91 9810857534
                        </li>

                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#1c9d36]" />
                            medicaresystem@gmail.com
                        </li>

                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        Follow Us
                    </h2>

                    <div className="flex gap-4">

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-[#1c9d36]"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/medicaresystemrgkak?utm_source=qr&igsh=MTJoZnZ0eGFtOGducA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-[#1c9d36]"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-[#1c9d36]"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>
                </div>

            </div>

            <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Medicare System Inc. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;