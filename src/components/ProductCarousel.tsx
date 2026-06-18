"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";

interface Props {
  title: string;
  products: any[];
}

export default function ProductCarousel({ title, products }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplayTimer = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 4000);
  }, [api]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    startAutoplay();

    api.on("pointerDown", stopAutoplay);

    return () => {
      api.off("select", onSelect);
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <div
      className="mb-16 px-4 md:px-12"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-[3px] h-10 bg-primary" />
        <h3 className="font-sans text-[24px] md:text-[26px] text-primary uppercase">
          {title}
        </h3>
      </div>

      <div className="relative w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 px-2">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="
                  pl-4 md:pl-6
                  basis-full
                  sm:basis-1/2
                  lg:basis-1/3 
                "
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="
              hidden md:flex
              -left-6 lg:-left-10
              border-primary
              text-primary
              hover:bg-primary/10
              transition-colors
            "
          />
          <CarouselNext
            className="
              hidden md:flex
              -right-6 lg:-right-10
              border-primary
              text-primary
              hover:bg-primary/10
              transition-colors
            "
          />
        </Carousel>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              api?.scrollTo(index);
              stopAutoplay();
            }}
            className={`
              h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${current === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"}
            `}
            aria-label={`Ir al producto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}