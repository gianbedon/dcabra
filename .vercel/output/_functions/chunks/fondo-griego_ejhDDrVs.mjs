import { n as $$Image } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, w as createComponent } from "./server_CjeR4gZE.mjs";
//#region src/components/HeroNavegacion.astro
createAstro("https://astro.build");
var $$HeroNavegacion = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$HeroNavegacion;
	const { imageBackground, title, eyebrow, badge, showOverlay = true } = Astro.props;
	const hasTitle = typeof title === "string" && title.trim().length > 0;
	const hasEyebrow = typeof eyebrow === "string" && eyebrow.trim().length > 0;
	const hasBadge = typeof badge === "string" && badge.trim().length > 0;
	const hasContent = hasTitle || hasEyebrow || hasBadge;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative h-[350px] md:h-[500px] overflow-hidden">${renderComponent($$result, "Image", $$Image, {
		"src": imageBackground,
		"alt": hasTitle ? `Fondo ${title}` : "Fondo principal",
		"class": "absolute inset-0 w-full h-full object-cover object-center"
	})}${showOverlay && renderTemplate`<div class="absolute inset-0 bg-primary/70"></div>`}${hasContent && renderTemplate`<div class="relative z-10 flex h-full items-center justify-center px-6 md:px-12 max-w-7xl mx-auto"><div class="text-white text-center">${hasEyebrow && renderTemplate`<p class="text-lg md:text-2xl font-light tracking-wide mb-2">${eyebrow}</p>`}${hasTitle && renderTemplate`<h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-none uppercase">${title}</h1>`}${hasBadge && renderTemplate`<p class="inline-block mt-4 rounded-full bg-white/20 backdrop-blur-sm px-5 py-2 text-sm md:text-base font-semibold tracking-wider">${badge}</p>`}</div></div>`}</section>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/HeroNavegacion.astro", void 0);
//#endregion
//#region src/assets/fondo-griego.jpg
var fondo_griego_default = new Proxy({
	"src": "/_astro/fondo-griego.DCdhvxFY.jpg",
	"width": 990,
	"height": 1320,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/assets/fondo-griego.jpg";
	return target[name];
} });
//#endregion
export { $$HeroNavegacion as n, fondo_griego_default as t };
