import { s as __exportAll } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, o as Fragment, w as createComponent } from "./server_CjeR4gZE.mjs";
import { c as $$Layout, i as GET_RECIPES, n as GET_PRODUCTS, s as fetchGraphQL } from "./queries_BJ6iqp9h.mjs";
import { t as ProductCard } from "./ProductCard_DvPydjKY.mjs";
import { n as $$HeroNavegacion, t as fondo_griego_default } from "./fondo-griego_ejhDDrVs.mjs";
import { t as $$RecipeCard } from "./RecipeCard_ByOfgClM.mjs";
//#region src/pages/productos/index.astro
var productos_exports = /* @__PURE__ */ __exportAll({
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
	const [productsResponse, recipesResponse] = await Promise.all([fetchGraphQL(GET_PRODUCTS), fetchGraphQL(GET_RECIPES, { first: 3 })]);
	const allProducts = productsResponse?.data?.productos?.nodes || [];
	const recetasWP = recipesResponse?.data?.posts?.nodes || [];
	const lecheQueso = allProducts.filter((p) => p.categoriasDeProducto?.nodes?.some((cat) => cat.slug === "leche" || cat.slug === "quesos"));
	const yoguresGriego = allProducts.filter((p) => p.categoriasDeProducto?.nodes?.some((cat) => cat.slug === "yogurt-griego"));
	const yoguresFrutado = allProducts.filter((p) => p.categoriasDeProducto?.nodes?.some((cat) => cat.slug === "yogurt-futado" || cat.slug === "yogurt-frutado"));
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Productos D'Cabra – Lácteos de Cabra 100% Naturales",
		"description": "Descubre todos los productos D'Cabra: yogurt griego, yogurt frutado, leche de cabra y queso artesanal. 100% naturales, sin conservantes."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroNavegacion", $$HeroNavegacion, {
		"imageBackground": fondo_griego_default,
		"eyebrow": "Disfruta todos nuestros",
		"title": "Productos Naturales",
		"badge": "100% leche de cabra"
	})}${maybeRenderHead($$result)}<section class="mx-auto max-w-[1200px] px-6 py-16"><div class="mb-12 text-center"><h2 class="font-['Luckiest_Guy'] text-[clamp(2rem,5vw,3.5rem)] tracking-[0.04em] text-[#632d90] mb-2">LECHE Y QUESO</h2><div class="mx-auto h-1 w-[60px] rounded-sm bg-gradient-to-r from-[#632d90] to-[#a855f7] mt-2"></div></div><div class="mx-auto grid max-w-[700px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">${lecheQueso.slice(0, 2).map((producto) => renderTemplate`${renderComponent($$result, "ProductCard", ProductCard, {
		"client:load": true,
		"product": producto,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ProductCard.tsx",
		"client:component-export": "default"
	})}`)}</div></section><section class="bg-[#faf8fc] py-10 sm:py-14 md:py-16 w-full"><div class="mx-auto max-w-[1200px] px-4 sm:px-6"><div class="mb-12 text-center"><h2 class="font-['Luckiest_Guy'] text-[clamp(2rem,5vw,3.5rem)] tracking-[0.04em] text-[#632d90] mb-2">NUESTROS YOGURES</h2><div class="mx-auto h-1 w-[60px] rounded-sm bg-gradient-to-r from-[#632d90] to-[#a855f7] mt-2"></div><p class="mt-3 text-[1rem] font-semibold text-[#6b7280]">Yogurt Griego con pulpa de fruta</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-7">${yoguresGriego.map((producto) => renderTemplate`${renderComponent($$result, "ProductCard", ProductCard, {
		"client:load": true,
		"product": producto,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ProductCard.tsx",
		"client:component-export": "default"
	})}`)}</div><div class="mx-auto mt-20 mb-12 text-center"><p class="relative inline-block text-[1.15rem] font-bold uppercase tracking-[0.05em] text-[#632d90] after:mt-[0.4rem] after:mx-auto after:block after:h-[3px] after:w-[40px] after:rounded-sm after:bg-[#a855f7]">Yogurt Frutado Bebible</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-7">${yoguresFrutado.map((producto) => renderTemplate`${renderComponent($$result, "ProductCard", ProductCard, {
		"client:load": true,
		"product": producto,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ProductCard.tsx",
		"client:component-export": "default"
	})}`)}</div></div></section><section class="mx-auto max-w-[1200px] px-4 sm:px-6 py-10 sm:py-14 md:py-16"><div class="mb-12 text-center"><h2 class="font-['Luckiest_Guy'] text-[clamp(2rem,5vw,3.5rem)] tracking-[0.04em] text-[#632d90] mb-2">NUESTRAS RECETAS</h2><div class="mx-auto h-1 w-[60px] rounded-sm bg-gradient-to-r from-[#632d90] to-[#a855f7] mt-2"></div></div>${recetasWP && recetasWP.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">${recetasWP.map((receta) => renderTemplate`${renderComponent($$result, "RecipeCard", $$RecipeCard, { "recipe": receta })}`)}</div><div class="text-center mt-12"><a href="/recetas" class="inline-block border-2 border-[#632d90] bg-white text-[#632d90] font-sans font-extrabold text-[0.9rem] px-8 py-3 rounded-full no-underline tracking-wide transition-all duration-250 hover:bg-[#632d90] hover:text-white hover:scale-105 shadow-[0_4px_12px_rgba(99,45,144,0.08)]">Ver más recetas</a></div>` })}` : renderTemplate`<div class="text-center py-16 px-6 bg-[#f5f0fc]/40 rounded-[1.5rem] border border-dashed border-[#ede7f6] max-w-md mx-auto shadow-[inset_0_2px_8px_rgba(99,45,144,0.02)]"><div class="text-4xl mb-4 animate-bounce">🍳</div><h3 class="!font-sans text-[1.2rem] font-bold text-[#1c1a14] mb-2">No existen recetas disponibles</h3><p class="text-[0.875rem] text-gray-500 leading-relaxed">Por el momento no tenemos recetas para mostrar aquí. ¡Estamos cocinando nuevas ideas, vuelve pronto!</p></div>`}</section>` })}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/productos/index.astro", void 0);
var $$file = "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/productos/index.astro";
var $$url = "/productos";
//#endregion
//#region \0virtual:astro:page:src/pages/productos/index@_@astro
var page = () => productos_exports;
//#endregion
export { page };
