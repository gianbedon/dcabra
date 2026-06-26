import { n as $$Image } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, o as Fragment, v as addAttribute, w as createComponent } from "./server_CjeR4gZE.mjs";
//#region src/components/RecipeCard.astro
createAstro("https://astro.build");
var $$RecipeCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RecipeCard;
	const { recipe } = Astro.props;
	const cleanDesc = recipe.content ? recipe.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 120) + "..." : "Descubre cómo preparar esta deliciosa alternativa natural.";
	const imageSrc = recipe.featuredImage?.node?.sourceUrl;
	const imageAlt = recipe.featuredImage?.node?.altText || recipe.title;
	const recipeLabel = recipe.tags?.nodes?.[0]?.name || recipe.categories?.nodes?.[0]?.name || "Receta";
	return renderTemplate`${maybeRenderHead($$result)}<article class="group overflow-hidden rounded-[1.75rem] border border-[#ede7f6] bg-white shadow-[0_8px_30px_rgba(99,45,144,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(99,45,144,0.14)]"><div class="relative h-[240px] overflow-hidden"><span class="absolute left-4 top-4 z-20 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white">${recipeLabel}</span>${imageSrc ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 600,
		"height": 300,
		"src": imageSrc,
		"alt": imageAlt,
		"loading": "lazy",
		"class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
	})}<div class="absolute inset-0 pointer-events-none" style="
            background:
              linear-gradient(
                to top,
                rgba(99,45,144,.5) 0%,
                rgba(99,45,144,.3) 20%,
                rgba(99,45,144,.15) 40%,
                transparent 70%
              );
          "></div>` })}` : renderTemplate`<div class="flex h-full items-center justify-center bg-[#f5f0fc] text-[#632d90]/40">D'Cabra Recetas</div>`}</div><div class="flex flex-1 flex-col p-6 gap-2"><h3 class="!font-sans text-[14px] font-bold leading-tight text-[#1c1a14] line-clamp-2">${recipe.title}</h3><p class="flex-1 text-[12px] leading-[1.7] text-gray-500 line-clamp-2">${cleanDesc}</p><a${addAttribute(`/recetas/${recipe.slug}`, "href")} class="inline-flex w-fit items-center justify-center rounded-full bg-[#632d90] px-4 text-[12px] py-1 font-bold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#4b1a70]">Ver más</a></div></article>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/RecipeCard.astro", void 0);
//#endregion
export { $$RecipeCard as t };
