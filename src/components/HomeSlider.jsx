"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HomeSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Slider {...settings}>

                <div className="relative w-full h-60 sm:h-75 md:h-120">
                    <Image
                        src="/assets/SLIDER-IMAGES/slider1.jpg"
                        alt="Slider Image 1"
                        fill
                        priority
                        className="object-fill object-[center_20%]"
                    />
                </div>

                <div className="relative w-full h-60 sm:h-75 md:h-120">
                    <Image
                        src="/assets/SLIDER-IMAGES/slider2.png"
                        alt="Slider Image 2"
                        fill
                        className="object-fill object-[center_20%]"
                    />
                </div>

            </Slider>
        </div>
    );
};

export default HomeSlider;