const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

export async function fetchGraphQL(query: string, variables = {}) {
    if (!WORDPRESS_URL) {
        throw new Error("Falta configurar WORDPRESS_URL en .env o en Vercel");
    }

    const response = await fetch(WORDPRESS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error HTTP WordPress GraphQL: ${response.status}`);
    }

    const json = await response.json();

    if (json.errors) {
        console.error("Errores GraphQL:", JSON.stringify(json.errors, null, 2));
        throw new Error("WordPress GraphQL devolvió errores");
    }

    return json;
}