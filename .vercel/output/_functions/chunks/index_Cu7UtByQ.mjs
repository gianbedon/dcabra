import { n as $$Image, s as __exportAll } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, n as renderScript, v as addAttribute, w as createComponent } from "./server_CjeR4gZE.mjs";
import { c as $$Layout, n as GET_PRODUCTS, s as fetchGraphQL, t as GET_CATEGORIES } from "./queries_BJ6iqp9h.mjs";
import { t as ProductCarousel } from "./ProductCarousel_Dp_m1cDO.mjs";
//#region src/assets/portada1.jpg
var portada1_default = new Proxy({
	"src": "/_astro/portada1.BvD11ZyU.jpg",
	"width": 1250,
	"height": 478,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/assets/portada1.jpg";
	return target[name];
} });
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="w-full overflow-hidden bg-secondary/10"><div class="w-full mx-auto">${renderComponent($$result, "Image", $$Image, {
		"src": portada1_default,
		"alt": "Disfruta tu Yogurt Griego D'Cabra",
		"class": "w-full object-cover",
		"loading": "eager"
	})}</div></section>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/Categories.astro
var $$Categories = createComponent(async ($$result, $$props, $$slots) => {
	const categorias = (await fetchGraphQL(GET_CATEGORIES, { slugs: [
		"leche",
		"yogurt-frutado",
		"yogurt-griego",
		"quesos"
	] }))?.data?.categoriasDeProducto?.nodes || [];
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-10 sm:py-14 md:py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 text-center"><span class="block text-gray-500 font-semibold text-base sm:text-lg tracking-wide mb-1">Descubre</span><h2 class="text-primary text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-8 sm:mb-10 md:mb-12">Nuestras Categorías</h2><div class="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">${categorias.map((categoria) => {
		const imagenUrl = categoria.camposCategoriaProducto?.imagenDeCategoria?.node?.sourceUrl;
		const imagenAlt = categoria.camposCategoriaProducto?.imagenDeCategoria?.node?.altText || categoria.name;
		return renderTemplate`<a${addAttribute(`/productos?categoria=${categoria.slug}`, "href")} class="group flex flex-col items-center"><div class="border-4 border-primary rounded-[1.5rem] sm:rounded-[2rem] w-full h-52 min-[420px]:h-56 sm:h-64 md:h-72 flex items-center justify-center p-5 sm:p-6 bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg relative overflow-hidden">${imagenUrl ? renderTemplate`<img${addAttribute(imagenUrl, "src")}${addAttribute(imagenAlt, "alt")} class="max-h-full max-w-full object-contain" loading="lazy">` : renderTemplate`<span class="text-gray-400 text-sm">Sin imagen</span>`}</div><div class="bg-primary text-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 -mt-5 font-extrabold uppercase text-xs sm:text-sm md:text-base text-center shadow-md z-10 min-w-[75%] sm:min-w-[80%] transition-transform duration-300 group-hover:scale-105">${categoria.name}</div></a>`;
	})}</div></div></section>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/Categories.astro", void 0);
//#endregion
//#region src/assets/portada-chacrita.jpg
var portada_chacrita_default = new Proxy({
	"src": "/_astro/portada-chacrita.uCevaky9.jpg",
	"width": 1080,
	"height": 720,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/assets/portada-chacrita.jpg";
	return target[name];
} });
//#endregion
//#region src/components/VisitUs.astro
var $$VisitUs = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="visitanos" class="py-16 bg-white select-none"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"><!-- Text Content Column --><div class="col-span-1 md:col-span-6 flex flex-col items-start text-left"><h2 class="text-primary text-3xl sm:text-5xl uppercase tracking-wider mb-2">Puedes Visitarnos</h2><!-- Subtitle pill banner --><div class="bg-primary text-white text-sm sm:text-base font-black px-6 py-2 rounded-full mb-6 uppercase tracking-wider inline-block">Feria Mi Chacrita - Jesús María</div><p class="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 font-medium font-sans max-w-lg">Ven y disfruta de los mejores productos de cabra en Lima, D'Cabra. Como leche, yogurt natural, yogurt frutado, nuestro riquísimo yogurt griego y queso en sus diferentes presentaciones como fresco, andino y mantecoso.</p><!-- Google Maps Link Button --><a href="https://maps.google.com/?q=Feria+La+Chacrita+Jesus+Maria" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-tertiary text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-200 shadow-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Ver en Google Maps</a></div><!-- Image Column with Pet Friendly stamp --><div class="col-span-1 md:col-span-6 flex justify-center relative"><div class="relative w-full max-w-md"><!-- Image frame --><div class="overflow-hidden rounded-3xl border-4 border-white shadow-xl aspect-4/3 flex items-center justify-center">${renderComponent($$result, "Image", $$Image, {
		"src": portada_chacrita_default,
		"alt": "Feria La Choclita Stand D'Cabra",
		"class": "w-full h-full object-cover"
	})}</div><!-- Pet Friendly Stamp Badge --><div class="absolute -bottom-6 -left-6 w-28 h-28 bg-white rounded-full border-4 border-primary shadow-lg flex items-center justify-center p-2 transform -rotate-12 select-none z-10"><!-- Circular rotating text layout using SVG path --><svg class="w-full h-full text-primary" viewBox="0 0 100 100"><defs><path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path></defs><!-- Paw print icon in center --><g transform="translate(50, 50) scale(0.9)"><!-- Paw SVG path --><path fill="currentColor" d="M -12,-5 C -15,-5 -18,-2 -18,2 C -18,6 -15,9 -12,9 C -9,9 -6,6 -6,2 C -6,-2 -9,-5 -12,-5 Z M 12,-5 C 9,-5 6,-2 6,2 C 6,6 9,9 12,9 C 15,9 18,6 18,2 C 18,-2 15,-5 12,-5 Z M -5,-15 C -8,-15 -10,-12 -10,-9 C -10,-6 -8,-3 -5,-3 C -2,-3 0,-6 0,-9 C 0,-12 -2,-15 -5,-15 Z M 5,-15 C 2,-15 0,-12 0,-9 C 0,-6 2,-3 5,-3 C 8,-3 10,-6 10,-9 C 10,-12 8,-15 5,-15 Z M 0,5 C -6,5 -11,9 -11,15 C -11,18 -8,20 -5,20 L 5,20 C 8,20 11,18 11,15 C 11,9 6,5 0,5 Z" transform="translate(0, -7)"></path></g><!-- Circular text --><text font-size="8" font-weight="900" fill="currentColor"><textPath href="#circlePath" startOffset="0%">• PET FRIENDLY • PET FRIENDLY • PET FRIENDLY</textPath></text></svg></div></div></div></div></div></section>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/VisitUs.astro", void 0);
//#endregion
//#region src/components/Marquee.astro
var $$Marquee = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-full bg-secondary/35 py-4 overflow-hidden border-t border-b border-primary/10 select-none" data-astro-cid-543bmuqs><div class="marquee-container flex whitespace-nowrap" data-astro-cid-543bmuqs><div class="marquee-content flex gap-8 text-primary font-black uppercase text-base sm:text-lg tracking-widest font-sans" data-astro-cid-543bmuqs><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span></div><div class="marquee-content flex gap-8 text-primary font-black uppercase text-base sm:text-lg tracking-widest font-sans" aria-hidden="true" data-astro-cid-543bmuqs><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span><span data-astro-cid-543bmuqs>•</span><span data-astro-cid-543bmuqs>Concurso en el Salon Del Queso</span></div></div></div>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/Marquee.astro", void 0);
//#endregion
//#region src/assets/cabra-campo-historia.jpg
var cabra_campo_historia_default = new Proxy({
	"src": "/_astro/cabra-campo-historia.B9I0Tvr_.jpg",
	"width": 1622,
	"height": 790,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/assets/cabra-campo-historia.jpg";
	return target[name];
} });
//#endregion
//#region src/components/VideoShowcase.astro
var $$VideoShowcase = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative bg-white select-none overflow-hidden py-16" data-astro-cid-oqbvmsnw><div class="w-full" data-astro-cid-oqbvmsnw><div class="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[830px] overflow-hidden" data-astro-cid-oqbvmsnw><video id="historiaVideo" class="w-full h-full object-cover" src="/videos/video-web-evento.mp4"${addAttribute(cabra_campo_historia_default.src, "poster")} autoplay muted loop playsinline preload="metadata" aria-label="Video Establo D'Cabra" data-astro-cid-oqbvmsnw></video><div class="absolute top-0 left-0 w-full h-[90px] md:h-[120px] overflow-hidden z-20 pointer-events-none" data-astro-cid-oqbvmsnw><div class="wave-track absolute top-0 left-0 flex w-[200%] h-full" data-astro-cid-oqbvmsnw><svg class="w-1/2 h-full flex-none" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-oqbvmsnw><path d="M0,0 H1200 V55 C1050,110 930,20 780,55 C620,92 520,110 360,55 C220,10 120,110 0,55 Z" fill="white" data-astro-cid-oqbvmsnw></path></svg><svg class="w-1/2 h-full flex-none" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-oqbvmsnw><path d="M0,0 H1200 V55 C1050,110 930,20 780,55 C620,92 520,110 360,55 C220,10 120,110 0,55 Z" fill="white" data-astro-cid-oqbvmsnw></path></svg></div></div></div></div></section>${renderScript($$result, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/VideoShowcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/VideoShowcase.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	Astro.response.headers.set("Cache-Control", "no-store");
	const categoriesData = await fetchGraphQL(GET_CATEGORIES, { slugs: [
		"yogurt-griego",
		"yogurt-frutado",
		"leche",
		"yogurt-natural"
	] });
	const productsData = await fetchGraphQL(GET_PRODUCTS);
	categoriesData?.data?.categoriasDeProducto?.nodes;
	const productos = productsData?.data?.productos?.nodes || [];
	const seccionesHome = [
		{
			title: "Yogurt Griego",
			slugs: ["yogurt-griego"]
		},
		{
			title: "Yogurt Frutado",
			slugs: ["yogurt-frutado"]
		},
		{
			title: "Leche y Yogurt Natural",
			slugs: ["leche", "yogurt-natural"]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "D'Cabra – Yogurt Griego y Lácteos de Cabra 100% Naturales" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Categories", $$Categories, {})}${maybeRenderHead($$result)}<section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4"><h2 class="text-center text-primary text-4xl md:text-6xl uppercase mb-4">Nuestros Productos</h2><div class="w-16 h-1 bg-primary mx-auto mb-16"></div>${seccionesHome.map((seccion) => {
		const productosCategoria = productos.filter((producto) => producto.categoriasDeProducto?.nodes?.some((cat) => seccion.slugs.includes(cat.slug)));
		if (!productosCategoria.length) return null;
		return renderTemplate`${renderComponent($$result, "ProductCarousel", ProductCarousel, {
			"client:visible": true,
			"title": seccion.title,
			"products": productosCategoria,
			"client:component-hydration": "visible",
			"client:component-path": "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ProductCarousel",
			"client:component-export": "default"
		})}`;
	})}</div></section>${renderComponent($$result, "VisitUs", $$VisitUs, {})}${renderComponent($$result, "Marquee", $$Marquee, {})}${renderComponent($$result, "VideoShowcase", $$VideoShowcase, {})}` })}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/index.astro", void 0);
var $$file = "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
