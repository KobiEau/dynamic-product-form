const productsContainer = document.getElementById("products");

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    category: "beauty",
    price: 9.99,
    rating: 2.56,
    stock: 99,
    brand: "Essence",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks.",
    category: "beauty",
    price: 19.99,
    rating: 2.86,
    stock: 34,
    brand: "Glamour Beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine.",
    category: "beauty",
    price: 14.99,
    rating: 4.64,
    stock: 89,
    brand: "Velvet Touch",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent.",
    category: "fragrances",
    price: 49.99,
    rating: 4.37,
    stock: 29,
    brand: "Calvin Klein",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials.",
    category: "furniture",
    price: 1899.99,
    rating: 4.77,
    stock: 88,
    brand: "Annibale Colombo",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
  },
  {
    id: 16,
    title: "Apple",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "groceries",
    price: 1.99,
    rating: 4.19,
    stock: 8,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
  },
  {
    id: 20,
    title: "Cooking Oil",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    category: "groceries",
    price: 4.99,
    rating: 4.8,
    stock: 10,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
  },
  {
    id: 28,
    title: "Ice Cream",
    description:
      "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "groceries",
    price: 5.49,
    rating: 3.39,
    stock: 27,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
  },
];

function displayProducts(products) {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="price">Price: $${product.price.toFixed(2)}</p>
                <p>Rating: ${product.rating}</p>
                <p>Stock: ${product.stock}</p>
                <p>Brand: ${product.brand}</p>
                `;

    productsContainer.appendChild(productCard);
  });
}

displayProducts(products);
