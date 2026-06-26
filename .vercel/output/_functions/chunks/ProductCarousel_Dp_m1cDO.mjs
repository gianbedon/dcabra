import { t as ProductCard } from "./ProductCard_DvPydjKY.mjs";
import { clsx } from "clsx";
import * as React$1 from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
//#region lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region components/ui/carousel.tsx
var CarouselContext = React$1.createContext(null);
function useCarousel() {
	const context = React$1.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React$1.useState(false);
	const [canScrollNext, setCanScrollNext] = React$1.useState(false);
	const onSelect = React$1.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = React$1.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React$1.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React$1.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React$1.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React$1.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			...props,
			children
		})
	});
}
function CarouselContent({ className, ...props }) {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("flex", orientation === "horizontal" ? "-ml-4 pt-2" : "-mt-4 flex-col", className),
			...props
		})
	});
}
function CarouselItem({ className, ...props }) {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
}
function CarouselPrevious({ className, variant = "outline", size = "icon-sm", ...props }) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		"data-slot": "carousel-previous",
		variant,
		size,
		className: cn("absolute touch-manipulation rounded-full", orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ChevronLeftIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
}
function CarouselNext({ className, variant = "outline", size = "icon-sm", ...props }) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		"data-slot": "carousel-next",
		variant,
		size,
		className: cn("absolute touch-manipulation rounded-full", orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ChevronRightIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
}
//#endregion
//#region src/components/ProductCarousel.tsx
function ProductCarousel({ title, products }) {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);
	const autoplayTimer = useRef(null);
	const startAutoplay = useCallback(() => {
		stopAutoplay();
		autoplayTimer.current = setInterval(() => {
			if (api) api.scrollNext();
		}, 4e3);
	}, [api]);
	const stopAutoplay = useCallback(() => {
		if (autoplayTimer.current) clearInterval(autoplayTimer.current);
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
	}, [
		api,
		startAutoplay,
		stopAutoplay
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-16 px-4 md:px-12",
		onMouseEnter: stopAutoplay,
		onMouseLeave: startAutoplay,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 mb-2",
				children: [/* @__PURE__ */ jsx("div", { className: "w-[3px] h-10 bg-primary" }), /* @__PURE__ */ jsx("h3", {
					className: "font-sans text-[24px] md:text-[26px] text-primary uppercase",
					children: title
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative w-full",
				children: /* @__PURE__ */ jsxs(Carousel, {
					setApi,
					opts: {
						align: "start",
						loop: true
					},
					className: "w-full",
					children: [
						/* @__PURE__ */ jsx(CarouselContent, {
							className: "-ml-4 md:-ml-6 px-2",
							children: products.map((product) => /* @__PURE__ */ jsx(CarouselItem, {
								className: "\n                  pl-4 md:pl-6\n                  basis-full\n                  sm:basis-1/2\n                  lg:basis-1/3 \n                ",
								children: /* @__PURE__ */ jsx(ProductCard, { product })
							}, product.id))
						}),
						/* @__PURE__ */ jsx(CarouselPrevious, { className: "\n              hidden md:flex\n              -left-6 lg:-left-10\n              border-primary\n              text-primary\n              hover:bg-primary/10\n              transition-colors\n            " }),
						/* @__PURE__ */ jsx(CarouselNext, { className: "\n              hidden md:flex\n              -right-6 lg:-right-10\n              border-primary\n              text-primary\n              hover:bg-primary/10\n              transition-colors\n            " })
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center gap-2 mt-6",
				children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsx("button", {
					onClick: () => {
						api?.scrollTo(index);
						stopAutoplay();
					},
					className: `
              h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${current === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"}
            `,
					"aria-label": `Ir al producto ${index + 1}`
				}, index))
			})
		]
	});
}
//#endregion
export { ProductCarousel as t };
