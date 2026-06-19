// src/lib/queries.ts

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

export const GET_RECIPES_PAGINATED = `
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

// ── NUEVAS QUERIES PARA DETALLES (Filtros específicos por Slug) ──────────────────

/**
 * Obtiene un único producto buscando por su slug.
 * Mantiene la misma estructura exacta de atributos y categorías que tu GET_PRODUCTS.
 */
export const GET_PRODUCT_BY_SLUG = `
query GetProductBySlug($slug: String!) {
  productoBy(slug: $slug) {
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
`;

/**
 * Obtiene una única receta buscando por su slug.
 * Mantiene la misma estructura de metadatos (categorías/tags) que tus queries de posts.
 */
export const GET_RECIPE_BY_SLUG = `
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