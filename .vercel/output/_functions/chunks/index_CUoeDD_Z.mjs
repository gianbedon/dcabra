import { s as __exportAll } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createComponent } from "./server_CjeR4gZE.mjs";
import { a as GET_RECIPES_PAGINATED, c as $$Layout, n as GET_PRODUCTS, s as fetchGraphQL } from "./queries_BJ6iqp9h.mjs";
import { t as ProductCarousel } from "./ProductCarousel_Dp_m1cDO.mjs";
import { n as $$HeroNavegacion, t as fondo_griego_default } from "./fondo-griego_ejhDDrVs.mjs";
import { t as $$RecipeCard } from "./RecipeCard_ByOfgClM.mjs";
//#region src/pages/recetas/index.astro
var recetas_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	Astro.response.headers.set("Cache-Control", "no-store");
	const url = new URL(Astro.request.url);
	const currentPage = parseInt(url.searchParams.get("page") || "1", 10);
	const recipesPerPage = 6;
	const [productsResponse, recipesResponse] = await Promise.all([fetchGraphQL(GET_PRODUCTS), fetchGraphQL(GET_RECIPES_PAGINATED)]);
	const allProducts = productsResponse?.data?.productos?.nodes || [];
	const allRecipes = recipesResponse?.data?.posts?.nodes || [];
	const totalRecipes = allRecipes.length;
	const totalPages = Math.ceil(totalRecipes / recipesPerPage);
	const startIndex = (currentPage - 1) * recipesPerPage;
	const endIndex = startIndex + recipesPerPage;
	const recetasPaginadas = allRecipes.slice(startIndex, endIndex);
	const productosCarrusel = allProducts.slice(0, 9);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Recetas D'Cabra – Alimentación Saludable con Lácteos de Cabra",
		"description": "Descubre nuestras deliciosas recetas preparadas con yogurt griego, leche de cabra y más productos D'Cabra. Alimentación saludable y natural."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroNavegacion", $$HeroNavegacion, {
		"imageBackground": fondo_griego_default,
		"eyebrow": "Disfruta tu",
		"title": "Yogurt Griego",
		"badge": "100% leche de cabra"
	})}${maybeRenderHead($$result)}<section class="bg-[#faf8fc] py-10 sm:py-14 md:py-16"><div class="max-w-[1200px] mx-auto px-4 sm:px-6"><div class="text-center mb-8 sm:mb-10 md:mb-12"><p class="font-sans text-sm sm:text-base text-gray-500 font-medium mb-1">Alimentación saludable con</p><h2 class="font-['Luckiest_Guy'] text-3xl sm:text-4xl md:text-5xl text-[#632d90] tracking-wide m-0">NUESTRAS RECETAS</h2><div class="w-14 h-1 bg-gradient-to-r from-[#632d90] to-[#a855f7] rounded-sm mx-auto mt-2"></div></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">${recetasPaginadas.map((receta) => renderTemplate`${renderComponent($$result, "RecipeCard", $$RecipeCard, { "recipe": receta })}`)}</div>${totalPages > 1 && renderTemplate`<nav class="flex flex-wrap justify-center items-center gap-2 mt-10 sm:mt-12" aria-label="Paginación de recetas"><a${addAttribute(currentPage > 1 ? `?page=${currentPage - 1}` : "#", "href")}${addAttribute(`px-3 sm:px-4 py-2 rounded-lg border font-sans text-xs sm:text-sm font-bold transition-all ${currentPage === 1 ? "opacity-40 pointer-events-none border-gray-200 text-gray-400" : "border-[#632d90] text-[#632d90] bg-white hover:bg-[#632d90] hover:text-white"}`, "class")}>Anterior</a>${Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => renderTemplate`<a${addAttribute(`?page=${page}`, "href")}${addAttribute(`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border font-sans text-xs sm:text-sm font-bold transition-all ${page === currentPage ? "bg-[#632d90] text-white border-[#632d90] shadow-md" : "bg-white text-gray-600 border-gray-200 hover:border-[#632d90] hover:text-[#632d90]"}`, "class")}>${page}</a>`)}<a${addAttribute(currentPage < totalPages ? `?page=${currentPage + 1}` : "#", "href")}${addAttribute(`px-3 sm:px-4 py-2 rounded-lg border font-sans text-xs sm:text-sm font-bold transition-all ${currentPage === totalPages ? "opacity-40 pointer-events-none border-gray-200 text-gray-400" : "border-[#632d90] text-[#632d90] bg-white hover:bg-[#632d90] hover:text-white"}`, "class")}>Siguiente</a></nav>`}</div></section><section class="max-w-[1200px] mx-auto pt-12 relative"><div class="absolute right-4 md:right-12 top-14 z-10 hidden sm:block"><a href="/productos" class="font-sans font-bold text-sm text-[#a855f7] hover:text-[#632d90] transition-colors flex items-center gap-1 no-underline group">Ver todos los productos<span class="transform transition-transform group-hover:translate-x-1">→</span></a></div>${renderComponent($$result, "ProductCarousel", ProductCarousel, {
		"client:load": true,
		"title": "Nuestros Productos",
		"products": productosCarrusel,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ProductCarousel.tsx",
		"client:component-export": "default"
	})}<div class="text-center sm:hidden pb-12"><a href="/productos" class="font-sans font-bold text-sm text-[#a855f7] hover:text-[#632d90] transition-colors no-underline">Ver todos los productos →</a></div></section>` })}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/recetas/index.astro", void 0);
var $$file = "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/recetas/index.astro";
var $$url = "/recetas";
//#endregion
//#region \0virtual:astro:page:src/pages/recetas/index@_@astro
var page = () => recetas_exports;
//#endregion
export { page };
