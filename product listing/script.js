const products = [
  // ELECTRONICS
  {
    name: "Macbook air",
    category: "electronics",
    price: 999,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    category: "electronics",
    price: 349,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg"
  },
  {
    name: "Fire-Boltt Smartwatch",
    category: "electronics",
    price: 59,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg"
  },
  {
    name: "boAt Airdopes 141",
    category: "electronics",
    price: 29,
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg"
  },
  {
    name: "Zebronics Webcam",
    category: "electronics",
    price: 25,
    rating: 4.1,
    img: "https://m.media-amazon.com/images/I/71qnZFqFM9L._SX679_.jpg"
  },
  {
    name: "TP-Link WiFi Router",
    category: "electronics",
    price: 49,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/71Hu0MLbxqL._SL1500_.jpg"
  },

  // CLOTHING
  {
    name: "Men's Cotton T-Shirt",
    category: "clothing",
    price: 15,
    rating: 4.2,
    img: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/422989/item/ingoods_09_422989.jpg"
  },
  {
    name: "Denim Jeans for Men",
    category: "clothing",
    price: 39,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/616xchp1ECL._SY879_.jpg"
  },
  {
    name: "Leather Biker Jacket",
    category: "clothing",
    price: 89,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/41uGN-tWs3L._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "Nike Running Shoes",
    category: "clothing",
    price: 75,
    rating: 4.6,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26674200/2023/12/26/766ec772-101d-4161-9d17-9953cf8e966c1703612190337NikeAirMaxAlphaTrainer5MensWorkoutShoes1.jpg"
  },

  // BOOKS
  {
    name: "The Alchemist by Paulo Coelho",
    category: "books",
    price: 12,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    name: "Atomic Habits by James Clear",
    category: "books",
    price: 18,
    rating: 4.9,
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    name: "Deep Work by Cal Newport",
    category: "books",
    price: 16,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/41G4-FBs1YS._SY445_SX342_.jpg"
  },

  // HOME
  {
    name: "Furny Tulip Fabric Sofa",
    category: "home",
    price: 299,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/41zCrTBWpzL.jpg"
  },
  {
    name: "Study Desk Table",
    category: "home",
    price: 99,
    rating: 4.2,
    img: "https://ii1.pepperfry.com/media/catalog/product/c/o/1100x1210/corbyn-l-shape-study-table-in-brown-maple---white-finish-corbyn-l-shape-study-table-in-brown-maple---2zzynu.jpg"
  },
  {
    name: "Decorative Table Lamp",
    category: "home",
    price: 25,
    rating: 4.1,
    img: "https://res.cloudinary.com/makerinc/image/fetch/f_auto,q_auto,fl_preserve_transparency,c_fit,dpr_1,w_1600,h_1080/https%3A%2F%2Fwww.whisperinghomes.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Fa%2Fbaelee_lamp_main.jpg%3Ft%3D20231103"
  },

  // TOYS
  {
    name: "LEGO Classic Bricks",
    category: "toys",
    price: 45,
    rating: 4.9,
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/5/f5398ca10698_Large_Creative_Brick_Box_V29_1.jpg?rnd=20200526195200&tr=w-1080"
  },
  {
    name: "Rubik's Cube 3x3",
    category: "toys",
    price: 8,
    rating: 4.5,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZQw8pSE6vQie3F9Ifv187aXQ9Fa38QpggzyqBkd_9Ubx0aX6b_5Zse8yEv3VdmmvO8_Ga7Erhq6Pk3Nk1AfLzoNq_SJnwLD1cp--V974YpykTuTC2pCiHmA"
  },
  {
    name: "Remote Control Racing Car",
    category: "toys",
    price: 35,
    rating: 4.4,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbHOxEQTe0Eh1gSgTRGIKy7rNcYm47MOgnSgLccGNQNgQ5fzlgGzS2KK7gT8WZWZMuKfAHiMZhfnJqxgSv0UXbTK1THAQXwssadnDnI6eIExw8YeYsINokRQ"
  }
];


const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function populateCategoryOptions() {
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });
}

function displayProducts(filteredProducts) {
  container.innerHTML = "";
  filteredProducts.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ${p.rating}</p>
      </div>
    `;
  });
}

function applyFilters() {
  let filtered = [...products];
  const selectedCategory = categoryFilter.value;
  const sort = sortOption.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  switch (sort) {
    case "priceLowHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "ratingHighLow":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortOption.addEventListener("change", applyFilters);

populateCategoryOptions();
displayProducts(products);
