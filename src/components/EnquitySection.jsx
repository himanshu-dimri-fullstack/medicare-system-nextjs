"use client";

const EnquirySection = () => {

    const handleWhatsAppRedirect = () => {
        const phoneNumber = "919810857534";

        const message = `Hi,

I would like to enquire about your products/services.

Please share:
• Product details & pricing
• Available options
• Delivery timeline

Looking forward to your response. Thanks!`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, "_blank");
    };

    return (
        <div className="px-4 pt-16">

            <div className="mx-auto max-w-3xl space-y-10">

                <div className="flex flex-col items-center text-center">

                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                        Make an <span className="text-[#1c9d36]">Enquiry</span>
                    </h2>

                    <p className="mb-6 max-w-xl leading-relaxed text-gray-600">
                        Have questions about our products or services? Click below
                        and chat with us directly on WhatsApp.
                    </p>

                    <div className="h-1 w-20 rounded-full bg-[#1c9d36]"></div>

                </div>

                <div className="flex justify-center">

                    <button
                        onClick={handleWhatsAppRedirect}
                        className="flex items-center gap-2 rounded-xl bg-[#1c9d36] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-[#15852c]"
                    >
                        💬 Chat on WhatsApp
                    </button>

                </div>

            </div>

        </div>
    );
};

export default EnquirySection;