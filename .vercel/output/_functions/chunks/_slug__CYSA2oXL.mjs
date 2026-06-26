import { s as __exportAll } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, o as Fragment, v as addAttribute, w as createComponent, x as unescapeHTML } from "./server_CjeR4gZE.mjs";
import { a as GET_RECIPES_PAGINATED, c as $$Layout, o as GET_RECIPE_BY_SLUG, s as fetchGraphQL } from "./queries_BJ6iqp9h.mjs";
import { n as $$HeroNavegacion, t as fondo_griego_default } from "./fondo-griego_ejhDDrVs.mjs";
import { t as $$RecipeCard } from "./RecipeCard_ByOfgClM.mjs";
//#region src/pages/recetas/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	Astro.response.headers.set("Cache-Control", "no-store");
	const { slug } = Astro.params;
	const [recipeResponse, allRecipesResponse] = await Promise.all([fetchGraphQL(GET_RECIPE_BY_SLUG, { slug }), fetchGraphQL(GET_RECIPES_PAGINATED)]);
	const receta = recipeResponse?.data?.postBy;
	if (!receta) return Astro.redirect("/404");
	const sugeridas = (allRecipesResponse?.data?.posts?.nodes || []).filter((r) => r.slug !== slug).slice(0, 3);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${receta.title} – Recetas D'Cabra`,
		"description": "Prepara platos deliciosos y saludables utilizando los mejores lácteos de cabra."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroNavegacion", $$HeroNavegacion, {
		"imageBackground": fondo_griego_default,
		"eyebrow": "Cocina Saludable",
		"title": receta.title,
		"badge": "Recetario Natural"
	})}${maybeRenderHead($$result)}<article class="max-w-[800px] mx-auto px-6 py-16"><h1 class="font-[Luckiest_Guy] text-4xl text-[#632d90] text-center mb-8 uppercase tracking-wide">${receta.title}</h1>${receta.featuredImage?.node?.sourceUrl && renderTemplate`<img${addAttribute(receta.featuredImage.node.sourceUrl, "src")}${addAttribute(receta.title, "alt")} class="w-full h-[400px] object-cover rounded-[2rem] shadow-md mb-12">`}<div class="prose max-w-none font-sans text-gray-700 leading-relaxed
                prose-headings:font-bold prose-headings:text-[#632d90]
                prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(receta.content)}` })}</div><div class="mt-12 text-center"><a href="/recetas" class="inline-block border-2 border-[#632d90] text-[#632d90] hover:bg-[#632d90] hover:text-white font-bold py-2 px-6 rounded-full transition-colors no-underline text-sm">← Volver al recetario</a></div></article><section class="bg-[#faf8fc] py-16 border-t border-gray-100"><div class="max-w-[1200px] mx-auto px-6"><h2 class="text-center font-[Luckiest_Guy] text-3xl text-[#632d90] mb-12 uppercase tracking-wide">Otras Recetas que te Encantarán</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8">${sugeridas.map((r) => renderTemplate`${renderComponent($$result, "RecipeCard", $$RecipeCard, { "recipe": r })}`)}</div></div></section>` })}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/recetas/[slug].astro", void 0);
var $$file = "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/recetas/[slug].astro";
var $$url = "/recetas/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/recetas/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
