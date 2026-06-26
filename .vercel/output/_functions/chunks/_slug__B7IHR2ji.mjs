import { s as __exportAll } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createComponent } from "./server_CjeR4gZE.mjs";
import { c as $$Layout, n as GET_PRODUCTS, r as GET_PRODUCT_BY_SLUG, s as fetchGraphQL } from "./queries_BJ6iqp9h.mjs";
import { t as ProductCard } from "./ProductCard_DvPydjKY.mjs";
import { n as $$HeroNavegacion, t as fondo_griego_default } from "./fondo-griego_ejhDDrVs.mjs";
//#region src/pages/productos/[slug].astro
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
	const [detailResponse, alternativeResponse] = await Promise.all([fetchGraphQL(GET_PRODUCT_BY_SLUG, { slug }), fetchGraphQL(GET_PRODUCTS)]);
	const rawProduct = detailResponse?.data?.productoBy;
	if (!rawProduct) return Astro.redirect("/404");
	const limpiarHtml = (html = "") => {
		return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	};
	const convertirLineasALista = (texto = "") => {
		return texto.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
	};
	const atributos = rawProduct.atributosDeLosProductos || {};
	const descripcionLimpia = rawProduct.content ? limpiarHtml(rawProduct.content) : "Lácteo artesanal 100% natural de cabra.";
	const beneficiosDinamicos = convertirLineasALista(atributos.beneficios || "");
	const producto = {
		nombre: rawProduct.title,
		variedad: rawProduct.categoriasDeProducto?.nodes?.[0]?.name || "Producto D'Cabra",
		descripcion: descripcionLimpia,
		precio: `S/ ${atributos.precio || "0.00"}`,
		imagen: rawProduct.featuredImage?.node?.sourceUrl,
		imagenAlt: rawProduct.featuredImage?.node?.altText || rawProduct.title,
		whatsapp: `https://wa.me/51900154196?text=${encodeURIComponent(`Hola D'Cabra! 🐐 Deseo información sobre el producto: *${rawProduct.title}*`)}`,
		beneficios: beneficiosDinamicos.length > 0 ? beneficiosDinamicos : [
			"Alto en proteína natural",
			"Probióticos naturales directos",
			"Fácil digestión",
			"Excelente fuente de calcio",
			"100% Leche de Cabra seleccionada"
		],
		detalleDeConsumo: atributos.detalleDeConsumo?.trim() || "Pureza y cremosidad natural procesada bajo los estándares más exigentes con 100% Leche de Cabra. Se recomienda mantener siempre en refrigeración constante entre 4°C y 5°C. Consumir preferentemente dentro de los plazos indicados en el empaque para disfrutar de su máxima frescura artesanal."
	};
	const otrosProductos = (alternativeResponse?.data?.productos?.nodes || []).filter((p) => p.slug !== slug).slice(0, 3);
	const pageTitle = `${producto.nombre} – D'Cabra`;
	const pageDescription = producto.descripcion;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": pageTitle,
		"description": pageDescription
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroNavegacion", $$HeroNavegacion, {
		"imageBackground": fondo_griego_default,
		"eyebrow": "Productos Premium",
		"title": producto.nombre,
		"badge": "Calidad Artesanal"
	})}${maybeRenderHead($$result)}<section class="max-w-[1100px] my-10 sm:my-12 mx-auto px-4 sm:px-6 md:px-8"><h2 class="text-center text-2xl sm:text-3xl text-[#632d90] uppercase tracking-wider mb-8 sm:mb-10">${producto.nombre}</h2><div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center justify-items-center md:justify-items-stretch"><div class="w-full max-w-[500px] md:max-w-none"><h3 class="!font-sans text-base font-bold text-[#2c2c2c] uppercase mb-4">Beneficios:</h3><div class="max-h-[190px] overflow-y-auto pr-2 custom-scroll"><ul class="flex flex-col gap-2">${producto.beneficios.map((b) => renderTemplate`<li class="flex items-start gap-2 text-[0.92rem] text-[#2c2c2c] before:content-['✔'] before:text-[#6a1bb3] before:font-bold before:text-[0.85rem] before:mt-[2px]"><span>${b}</span></li>`)}</ul></div></div><div class="flex flex-col items-center gap-[0.6rem] w-full max-w-[280px]">${producto.imagen ? renderTemplate`<img${addAttribute(producto.imagen, "src")}${addAttribute(producto.imagenAlt, "alt")} class="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-contain drop-shadow-[0_8px_20px_rgba(74,14,143,0.2)]">` : renderTemplate`<div class="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] bg-gray-100 rounded-full flex items-center justify-center text-gray-400">Sin Imagen</div>`}<span class="text-[0.78rem] font-bold text-[#4a0e8f] uppercase tracking-[0.5px] text-center mt-2">${producto.variedad}</span><span class="text-[0.82rem] text-[#666] text-center max-w-[240px] leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">${producto.descripcion}</span><span class="text-xl font-extrabold text-[#6a1bb3] my-1">${producto.precio}</span><a${addAttribute(producto.whatsapp, "href")} class="inline-block bg-[#6a1bb3] hover:bg-[#5a14a0] text-white py-[0.55rem] px-6 rounded-full font-bold text-[0.85rem] text-center transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap no-underline shadow-md" target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</a></div><div class="w-full max-w-[500px] md:max-w-none"><h3 class="!font-sans text-base font-bold text-[#2c2c2c] uppercase mb-4">Detalle de Consumo:</h3><div class="max-h-[220px] overflow-y-auto pr-3 custom-scroll"><p class="text-[0.92rem] text-[#444] leading-relaxed">${producto.detalleDeConsumo}</p></div></div></div></section><section class="max-w-[1200px] my-14 sm:my-20 mx-auto px-4 sm:px-6 md:px-8 border-t border-gray-100 pt-12 sm:pt-16"><h2 class="text-center text-2xl sm:text-3xl font-[Luckiest_Guy] text-[#632d90] uppercase tracking-wider mb-10 sm:mb-12">Otros Productos de la Granja</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">${otrosProductos.map((p) => renderTemplate`${renderComponent($$result, "ProductCard", ProductCard, {
		"client:load": true,
		"product": p,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ProductCard",
		"client:component-export": "default"
	})}`)}</div></section>` })}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/productos/[slug].astro", void 0);
var $$file = "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/pages/productos/[slug].astro";
var $$url = "/productos/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/productos/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
