"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/home-slideshow/slideshow-01.jpg",
    alt: "Mameza professionally staged interior",
  },
  {
    src: "/images/home-slideshow/slideshow-02.jpg",
    alt: "Mameza staged living room",
  },
  {
    src: "/images/home-slideshow/slideshow-03.jpg",
    alt: "Mameza staged property",
  },
  {
    src: "/images/home-slideshow/slideshow-04.jpg",
    alt: "Mameza interior design",
  },
  {
    src: "/images/home-slideshow/slideshow-05.jpg",
    alt: "Mameza home staging project",
  },
];

export default function HomeSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#1F2A24]">
      <div className="relative h-[45vh] min-h-[360px] max-h-[700px] w-full md:h-[60vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Previous */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() =>
            setCurrentSlide(
              (currentSlide - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/50"
        >
          ‹
        </button>

        {/* Next */}
        <button
          type="button"
          aria-label="Next slide"
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % slides.length)
          }
          className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/50"
        >
          ›
        </button>
      </div>
    </section>
  );
}