export const GET_CATEGORIES = `
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

export const GET_PRODUCTS = `
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

export const GET_RECIPES = `
query GetRecipes($first: Int) {
  posts(first: $first) {
    nodes {
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
    }
  }
}
`;

export const GET_RECIPES_PAGINATED = `
query GetRecipesPaginated {
  posts(first: 100) { # Traemos un pool grande para paginar estática/dinámicamente en Astro
    nodes {
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
    }
  }
}
`;