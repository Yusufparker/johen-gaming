import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Slide = {
    id: number;
    image: string;
    url: string;
};

const slides: Slide[] = [
    {
        id: 1,
        image: "/images/banner/1.webp",
        url: "#",
    },
    {
        id: 2,
        image: "/images/banner/2.webp",
        url: "#",
    },
    {
        id: 3,
        image: "/images/banner/3.webp",
        url: "#",
    },
    {
        id: 4,
        image: "/images/banner/4.webp",
        url: "#",
    },

];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(autoSlide);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="relative p-4 w-full md:px-10 overflow-hidden ">
            <div className="relative mx-auto max-w-7xl h-45 md:h-87.5 lg:h-112.5">
                {slides.map((slide, index) => (
                    <Link
                        key={slide.id}
                        to={slide.url}
                        className={`absolute inset-0 transition-all duration-700 ${
                        index === currentSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={`banner-${slide.id}`}
                            className="h-full w-full object-cover rounded-lg md:rounded-3xl"
                        />

                    </Link>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/40"
            >
                <ChevronLeft size={22} />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/40"
            >
                <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50"
                    }`}
                />
                ))}
            </div>
        </section>
    );
};

export default Hero;