import { n as $$Image } from "./_astro_assets_jhm8mN5i.mjs";
import { C as createAstro, _ as renderHead, a as renderComponent, f as renderTemplate, g as maybeRenderHead, l as renderSlot, n as renderScript, t as spreadAttributes, v as addAttribute, w as createComponent } from "./server_CjeR4gZE.mjs";
//#region src/assets/logo.png
var logo_default = new Proxy({
	"src": "/_astro/logo.9im4Tvle.png",
	"width": 800,
	"height": 407,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/assets/logo.png";
	return target[name];
} });
//#endregion
//#region node_modules/@lucide/astro/src/defaultAttributes.ts
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/@lucide/astro/src/utils/hasA11yProp.ts
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/@lucide/astro/src/Icon.astro
createAstro("https://astro.build");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { color = "currentColor", size = 24, "stroke-width": strokeWidth = 2, absoluteStrokeWidth = false, iconNode = [], class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes({
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		"stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		...!hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	})}${addAttribute(["lucide", className], "class:list")}>${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)}${renderSlot($$result, $$slots["default"])}</svg>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/node_modules/@lucide/astro/src/Icon.astro", void 0);
//#endregion
//#region node_modules/@lucide/astro/src/utils/mergeClasses.ts
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/@lucide/astro/src/utils/toKebabCase.ts
/**
* Converts string to kebab case
*
* @param {string} string
* @returns {string} A kebabized string
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/@lucide/astro/src/createLucideIcon.ts
var createLucideIcon_default = (iconName, iconNode) => {
	return createComponent(($$result, $$props, $$slots) => {
		const { class: className, ...restProps } = $$props;
		return renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			class: mergeClasses(Boolean(iconName) && `lucide-${toKebabCase(iconName)}`, Boolean(className) && className),
			iconNode,
			...restProps
		}, { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
	}, void 0, "none");
};
//#endregion
//#region node_modules/@lucide/astro/src/icons/book-open.ts
/**
* @component @name BookOpen
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgN3YxNCIgLz4KICA8cGF0aCBkPSJNMyAxOGExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWg1YTQgNCAwIDAgMSA0IDQgNCA0IDAgMCAxIDQtNGg1YTEgMSAwIDAgMSAxIDF2MTNhMSAxIDAgMCAxLTEgMWgtNmEzIDMgMCAwIDAtMyAzIDMgMyAwIDAgMC0zLTN6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-open
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var BookOpen = createLucideIcon_default("book-open", [["path", { "d": "M12 7v14" }], ["path", { "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/briefcase.ts
/**
* @component @name Briefcase
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMjBWNGEyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yIDJ2MTYiIC8+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiB4PSIyIiB5PSI2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/briefcase
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Briefcase = createLucideIcon_default("briefcase", [["path", { "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }], ["rect", {
	"width": "20",
	"height": "14",
	"x": "2",
	"y": "6",
	"rx": "2"
}]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/chef-hat.ts
/**
* @component @name ChefHat
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTcgMjFhMSAxIDAgMCAwIDEtMXYtNS4zNWMwLS40NTcuMzE2LS44NDQuNzI3LTEuMDQxYTQgNCAwIDAgMC0yLjEzNC03LjU4OSA1IDUgMCAwIDAtOS4xODYgMCA0IDQgMCAwIDAtMi4xMzQgNy41ODhjLjQxMS4xOTguNzI3LjU4NS43MjcgMS4wNDFWMjBhMSAxIDAgMCAwIDEgMVoiIC8+CiAgPHBhdGggZD0iTTYgMTdoMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chef-hat
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ChefHat = createLucideIcon_default("chef-hat", [["path", { "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }], ["path", { "d": "M6 17h12" }]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/house.ts
/**
* @component @name House
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiIC8+CiAgPHBhdGggZD0iTTMgMTBhMiAyIDAgMCAxIC43MDktMS41MjhsNy02YTIgMiAwIDAgMSAyLjU4MiAwbDcgNkEyIDIgMCAwIDEgMjEgMTB2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/house
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var House = createLucideIcon_default("house", [["path", { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/map-pin.ts
/**
* @component @name MapPin
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var MapPin = createLucideIcon_default("map-pin", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", {
	"cx": "12",
	"cy": "10",
	"r": "3"
}]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/menu.ts
/**
* @component @name Menu
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Menu = createLucideIcon_default("menu", [
	["path", { "d": "M4 5h16" }],
	["path", { "d": "M4 12h16" }],
	["path", { "d": "M4 19h16" }]
]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/milk.ts
/**
* @component @name Milk
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAyaDgiIC8+CiAgPHBhdGggZD0iTTkgMnYyLjc4OWE0IDQgMCAwIDEtLjY3MiAyLjIxOWwtLjY1Ni45ODRBNCA0IDAgMCAwIDcgMTAuMjEyVjIwYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi05Ljc4OWE0IDQgMCAwIDAtLjY3Mi0yLjIxOWwtLjY1Ni0uOTg0QTQgNCAwIDAgMSAxNSA0Ljc4OFYyIiAvPgogIDxwYXRoIGQ9Ik03IDE1YTYuNDcyIDYuNDcyIDAgMCAxIDUgMCA2LjQ3IDYuNDcgMCAwIDAgNSAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/milk
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Milk = createLucideIcon_default("milk", [
	["path", { "d": "M8 2h8" }],
	["path", { "d": "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" }],
	["path", { "d": "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/shopping-basket.ts
/**
* @component @name ShoppingBasket
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTEtMSA5IiAvPgogIDxwYXRoIGQ9Im0xOSAxMS00LTciIC8+CiAgPHBhdGggZD0iTTIgMTFoMjAiIC8+CiAgPHBhdGggZD0ibTMuNSAxMSAxLjYgNy40YTIgMiAwIDAgMCAyIDEuNmg5LjhhMiAyIDAgMCAwIDItMS42bDEuNy03LjQiIC8+CiAgPHBhdGggZD0iTTQuNSAxNS41aDE1IiAvPgogIDxwYXRoIGQ9Im01IDExIDQtNyIgLz4KICA8cGF0aCBkPSJtOSAxMSAxIDkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shopping-basket
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ShoppingBasket = createLucideIcon_default("shopping-basket", [
	["path", { "d": "m15 11-1 9" }],
	["path", { "d": "m19 11-4-7" }],
	["path", { "d": "M2 11h20" }],
	["path", { "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }],
	["path", { "d": "M4.5 15.5h15" }],
	["path", { "d": "m5 11 4-7" }],
	["path", { "d": "m9 11 1 9" }]
]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/x.ts
/**
* @component @name X
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var X = createLucideIcon_default("x", [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]]);
//#endregion
//#region src/components/Header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const currentPath = Astro.url.pathname;
	const navLinks = [
		{
			href: "/",
			label: "Inicio",
			icon: House
		},
		{
			href: "/productos",
			label: "Productos",
			icon: ShoppingBasket
		},
		{
			href: "/historia",
			label: "Nuestra historia",
			icon: BookOpen
		},
		{
			href: "/recetas",
			label: "Recetas",
			icon: ChefHat
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100"><div class="container mx-auto px-5"><div class="flex items-center justify-between h-18"><!-- Logo --><a href="/" class="flex items-center">${renderComponent($$result, "Image", $$Image, {
		"src": logo_default,
		"alt": "D'Cabra Logo",
		"width": 120,
		"height": 50,
		"class": "h-10 w-auto"
	})}</a><!-- Desktop Menu --><nav class="hidden md:flex items-center gap-8"><nav class="hidden md:flex items-center gap-8">${navLinks.map((link) => {
		const Icon = link.icon;
		return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`group relative flex items-center gap-2 px-3 py-2 rounded-full text-md font-medium transition-all duration-300 ${currentPath === link.href ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100 hover:text-primary"}`, "class")}>${renderComponent($$result, "Icon", Icon, { "size": 18 })}<span>${link.label}</span><div${addAttribute(`absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300 -translate-x-1/2 ${currentPath === link.href ? "w-8" : "w-0 group-hover:w-8"}`, "class")}></div></a>`;
	})}</nav></nav><!-- Desktop WhatsApp --><a href="https://wa.me/51900154196" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-md font-semibold text-white hover:opacity-90 transition">Pedir por WhatsApp</a><!-- Mobile Button --><button id="menu-btn" class="md:hidden p-2 text-gray-700" aria-label="Abrir menú">${renderComponent($$result, "Menu", Menu, {
		"id": "menu-open",
		"size": 24
	})}${renderComponent($$result, "X", X, {
		"id": "menu-close",
		"size": 24,
		"class": "hidden"
	})}</button></div></div><!-- Mobile Menu --><div id="mobile-menu" class="hidden md:hidden border-t border-gray-100 bg-white"><nav class="flex flex-col px-5 py-4">${navLinks.map((link) => {
		const Icon = link.icon;
		return renderTemplate`<a${addAttribute(link.href, "href")} class="flex items-center gap-3 py-3 text-gray-700 font-medium border-b border-gray-100 last:border-none">${renderComponent($$result, "Icon", Icon, { "size": 18 })}${link.label}</a>`;
	})}<a href="https://wa.me/51900154196" target="_blank" rel="noopener noreferrer" class="mt-4 rounded-full bg-primary text-white text-center py-3 font-semibold">Pedir por WhatsApp</a></nav></div>${renderScript($$result, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/Header.astro?astro&type=script&index=0&lang.ts")}</header>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-primary text-white border-t border-white/10"><div class="container mx-auto px-5 py-16"><div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4"><!-- Marca --><div class="space-y-5"><a href="/">${renderComponent($$result, "Image", $$Image, {
		"src": logo_default,
		"alt": "D'Cabra",
		"class": "h-12 w-auto"
	})}</a><p class="text-sm text-white/70 leading-relaxed max-w-xs mt-5">Productos artesanales elaborados con leche de cabra. Calidad, tradición y nutrición para toda la familia.</p></div><!-- Productos --><div><p class="font-semibold mb-5">Productos</p><ul class="space-y-3"><li><a href="/productos" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "Milk", Milk, { "size": 16 })}Leche</a></li><li><a href="/productos" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "Milk", Milk, { "size": 16 })}Yogurt Griego</a></li><li><a href="/productos" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "Milk", Milk, { "size": 16 })}Yogurt Frutado</a></li><li><a href="/productos" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "Milk", Milk, { "size": 16 })}Quesos</a></li></ul></div><!-- Empresa --><div><p class="font-semibold mb-5">Empresa</p><ul class="space-y-3"><li><a href="/historia" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "BookOpen", BookOpen, { "size": 16 })}Nuestra Historia</a></li><li><a href="#" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "MapPin", MapPin, { "size": 16 })}Puntos de Venta</a></li><li><a href="#" class="flex items-center gap-2 text-white/70 hover:text-white transition">${renderComponent($$result, "Briefcase", Briefcase, { "size": 16 })}Trabaja con Nosotros</a></li></ul></div><!-- Redes --><div><p class="font-semibold mb-5">Síguenos</p><div class="flex gap-3"><a href="https://www.instagram.com/dcabraperu/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path></svg></a><a href="https://www.facebook.com/dcabraperu" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V4.9c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V11H6.5v3h3v8h4z"></path></svg></a><a href="https://www.tiktok.com/@dcabra.per" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-1.92V15.3a5.3 5.3 0 11-5.3-5.3c.2 0 .4.01.59.03v2.61a2.69 2.69 0 10 2.1 2.63V2h2.58a4.83 4.83 0 003.8 4.69v2z"></path></svg></a></div></div></div><!-- Separador --><div class="mt-12 pt-6 border-t border-white/10"><div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50"><p>© ${(/* @__PURE__ */ new Date()).getFullYear()} D'Cabra. Todos los derechos reservados.</p><p>Hecho en Perú 🐐</p></div></div></div></footer>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/ContactForm.astro
var $$ContactForm = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="contacto" class="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 select-none"><!-- Card Container with purple border and rounded corners --><div class="relative bg-white border-3 border-primary/20 rounded-[2rem] shadow-xl overflow-hidden p-8 sm:p-12 md:p-16"><!-- Goat Head SVG Silhouette watermark in the background (Right side) --><div class="absolute right-0 bottom-0 top-0 w-2/5 opacity-[0.05] pointer-events-none hidden md:flex items-center justify-end pr-8"></div><!-- Content --><div class="relative z-10 max-w-3xl mx-auto"><h3 class="text-primary text-3xl sm:text-4xl text-center uppercase tracking-wider mb-12">Contáctanos</h3><form id="whatsapp-contact-form" class="space-y-6 sm:space-y-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"><!-- NOMBRE --><div class="flex flex-col gap-2 md:col-span-1"><label for="form-nombre" class="text-primary text-xs font-black uppercase tracking-wider ml-1">Nombre</label><input type="text" id="form-nombre" name="nombre" required placeholder="Nombre completo" class="w-full px-5 py-3.5 rounded-full bg-white border-2 border-primary/45 text-gray-800 text-sm font-semibold placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-hidden"></div><!-- DISTRITO --><div class="flex flex-col gap-2 md:col-span-1"><label for="form-distrito" class="text-primary text-xs font-black uppercase tracking-wider ml-1">Distrito</label><input type="text" id="form-distrito" name="distrito" required placeholder="Distrito de entrega" class="w-full px-5 py-3.5 rounded-full bg-white border-2 border-primary/45 text-gray-800 text-sm font-semibold placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-hidden"></div><!-- PRODUCTO --><div class="flex flex-col gap-2 md:col-span-1"><label for="form-producto" class="text-primary text-xs font-black uppercase tracking-wider ml-1">Producto</label><div class="relative"><select id="form-producto" name="producto" required class="w-full px-5 py-3.5 rounded-full bg-white border-2 border-primary/45 text-gray-800 text-sm font-semibold focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-hidden appearance-none cursor-pointer"><option value="Y. Griego">Y. Griego</option><option value="Leche de Cabra">Leche de Cabra</option><option value="Yogurt Frutado">Yogurt Frutado</option><option value="Queso de Cabra">Queso de Cabra</option></select><!-- Select arrow indicator --><div class="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-primary"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-end"><!-- CANTIDAD --><div class="flex flex-col gap-2 md:col-span-1"><label for="form-cantidad" class="text-primary text-xs font-black uppercase tracking-wider ml-1">Cantidad</label><input type="number" id="form-cantidad" name="cantidad" required min="1" value="1" class="w-full px-5 py-3.5 rounded-full bg-white border-2 border-primary/45 text-gray-800 text-sm font-semibold focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-hidden"></div><!-- Submit Button --><div class="md:col-span-1"><button id="btn-whatsapp-submit" type="button" class="w-full py-3.5 bg-primary text-white font-bold rounded-full hover:bg-tertiary transition-colors text-sm uppercase tracking-wider shadow-sm flex items-center justify-center cursor-pointer">Enviar</button></div></div></form></div></div></section>${renderScript($$result, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/components/ContactForm.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "D'Cabra – Lácteos de Cabra 100% Naturales", description = "Yogurt griego, leche de cabra y más. Productos artesanales sin azúcar añadida, con probióticos naturales. Directo desde nuestra granja hasta tu mesa." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main class="mt-[73px]">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "ContactForm", $$ContactForm, {})}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/User/Desktop/Proyectos - Desarrollo de Software/dcabra/src/layouts/Layout.astro", void 0);
//#endregion
//#region lib/wordpress.ts
var WORDPRESS_URL = "https://cms.dcabra.com/graphql";
async function fetchGraphQL(query, variables = {}) {
	const response = await fetch(WORDPRESS_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query,
			variables
		})
	});
	if (!response.ok) throw new Error(`Error HTTP WordPress GraphQL: ${response.status}`);
	const json = await response.json();
	if (json.errors) {
		console.error("Errores GraphQL:", JSON.stringify(json.errors, null, 2));
		throw new Error("WordPress GraphQL devolvió errores");
	}
	return json;
}
//#endregion
//#region lib/queries.ts
var GET_CATEGORIES = `
query GetCategories($slugs: [String]) {
  categoriasDeProducto(where: { slug: $slugs }) {
    nodes {
      id
      name
      slug
      camposCategoriaProducto {
        imagenDeCategoria {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`;
var GET_PRODUCTS = `
query GetProducts {
  productos(first: 100) {
    nodes {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      categoriasDeProducto {
        nodes {
          name
          slug
        }
      }
      atributosDeLosProductos {
        precio
        stock
      }
    }
  }
}
`;
var GET_RECIPES = `
query GetRecipes($first: Int) {
  posts(first: $first) {
    nodes {
      id
      title
      slug
      content
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
`;
var GET_RECIPES_PAGINATED = `
query GetRecipesPaginated {
  posts(first: 100) {
    nodes {
      id
      title
      slug
      content
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
`;
var GET_PRODUCT_BY_SLUG = `
  query GetProductBySlug($slug: String!) {
    productoBy(slug: $slug) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categoriasDeProducto {
        nodes {
          name
          slug
        }
      }
      atributosDeLosProductos {
        precio
        stock
        beneficios
        detalleDeConsumo
      }
    }
  }
`;
var GET_RECIPE_BY_SLUG = `
query GetRecipeBySlug($slug: String!) {
  postBy(slug: $slug) {
    id
    title
    slug
    content
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
}
`;
//#endregion
export { GET_RECIPES_PAGINATED as a, $$Layout as c, GET_RECIPES as i, GET_PRODUCTS as n, GET_RECIPE_BY_SLUG as o, GET_PRODUCT_BY_SLUG as r, fetchGraphQL as s, GET_CATEGORIES as t };
