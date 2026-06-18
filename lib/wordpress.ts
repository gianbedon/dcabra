const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

export async function fetchGraphQL(query: string, variables = {}) {
    console.log("🌐 URL:", WORDPRESS_URL);

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

    const json = await response.json();

    console.log("📦 GraphQL Response:");
    console.dir(json, { depth: null });

    return json;
}