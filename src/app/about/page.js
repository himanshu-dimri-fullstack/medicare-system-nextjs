import React from "react";

const AboutPage = () => {
    return (
        <>

            <div className="sticky top-20 z-40">
                <div className="w-40 h-1 bg-[#1c9d36] rounded-full"></div>
            </div>
            <div className="w-full min-h-screen bg-linear-to-br from-[#e9f7ef] to-white px-6 md:px-16 py-12">
                {/* Header */}
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1c9d36] mb-3 tracking-wide">
                        About Us
                    </h1>

                    {/* Theme Line */}
                    <div className="w-28 h-1 bg-[#1c9d36] mx-auto rounded-full mb-5"></div>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
                        Delivering intelligent healthcare and technical solutions since 2008
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6 leading-relaxed text-gray-700 border border-[#1c9d36]/10">

                    <p className="text-[16px] md:text-[17px] font-medium">
                        <span className="font-bold text-[#1c9d36]">
                            Medicare Systems Inc.
                        </span>{" "}
                        has been at the forefront of delivering intelligent healthcare and
                        technical solutions since 2008. What began as a commitment to solving
                        complex business challenges has evolved into a trusted partnership
                        model—serving organizations not just across India, but extending our
                        expertise to international markets as well.
                    </p>

                    <p className="text-[16px] md:text-[17px] font-medium">
                        We specialize in designing solutions that are not only technically
                        sound, but also economically viable and operationally efficient. Our
                        strength lies in understanding real-world challenges and crafting
                        systems that work seamlessly in high-pressure environments—from
                        hospitals to defense sectors.
                    </p>

                    <p className="text-[16px] md:text-[17px] font-medium">
                        Over the years, we have proudly supported critical institutions
                        including the Indian Defence Services, working closely with the Army
                        and Air Force, where precision, reliability, and speed are
                        non-negotiable.
                    </p>

                    <p className="text-[16px] md:text-[17px] font-medium">
                        In the healthcare sector, our solutions are trusted by some of India’s
                        most respected hospitals such as{" "}
                        <span className="font-bold text-[#1c9d36]">
                            Medanta, Apollo Hospitals, Max Healthcare, Fortis Healthcare,
                            AIIMS, and Manipal Hospitals
                        </span>.
                    </p>

                    <p className="text-[16px] md:text-[17px] font-medium">
                        Our wide marketing and distribution network ensures that our solutions
                        reach where they are needed most—efficiently and reliably. But what
                        truly defines us is our long-term commitment: many of our clients have
                        been with us for years, and some since our inception.
                    </p>

                    <p className="text-[16px] md:text-[17px] font-medium">
                        We continuously evolve with emerging technologies, but we do not chase
                        trends blindly. Every solution we propose is driven by one simple
                        principle: what works best for our clients. When required, we innovate
                        and develop our own technologies to bridge gaps and deliver excellence.
                    </p>

                    <p className="text-[16px] md:text-[17px] font-medium">
                        Behind everything we do is a team of highly skilled, dedicated
                        professionals who believe that success is built not just on
                        systems—but on trust, service, and lasting relationships.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-14">

                    {/* Mission */}
                    <div className="bg-white border border-[#1c9d36]/20 p-8 rounded-3xl shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-extrabold text-[#1c9d36] mb-2">
                            Mission
                        </h2>

                        <div className="w-10 h-1 bg-[#1c9d36] rounded-full mb-5"></div>

                        <p className="text-gray-700 text-[15px] leading-relaxed font-bold">
                            To achieve excellence through integrity, innovation, and
                            commitment—creating value for our clients, empowering our workforce,
                            and contributing responsibly to society.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white border border-[#1c9d36]/20 p-8 rounded-3xl shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-extrabold text-[#1c9d36] mb-2">
                            Vision
                        </h2>

                        <div className="w-10 h-1 bg-[#1c9d36] rounded-full mb-5"></div>

                        <p className="text-gray-700 text-[15px] leading-relaxed font-bold">
                            To strengthen India’s healthcare ecosystem by delivering
                            world-class, accessible, fast, cost-effective, and sustainable
                            solutions—while proudly serving the nation, including its defence
                            forces, with unwavering dedication.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutPage;