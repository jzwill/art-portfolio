const products = [
  {
    name: "Gengar",
    price: 35,
    img: "project3/images/gengar.webp",
    shipping: "Free shipping!",
  },
  {
    name: "Long Pikachu",
    price: 75,
    img: "project3/images/pikachu.webp",
    shipping: "$10.99 shipping.",
  },
  {
    name: "Shaymin",
    price: 25,
    img: "project3/images/shaymin.webp",
    shipping: "Free shipping!",
  },
  {
    name: "The Smilers",
    price: 55,
    img: "project3/images/smilers.webp",
    shipping: "$10.99 shipping.",
  },
  {
    name: "Sad Golbat",
    price: 15,
    img: "project3/images/golbat.webp",
    shipping: "$1.99 shipping.",
  },
  {
    name: "Dino Squirtle",
    price: 15,
    img: "project3/images/squirtle.webp",
    shipping: "Free shipping!",
  },
  {
    name: "Real Mewtwo",
    price: 45,
    img: "project3/images/mewtwo.webp",
    shipping: "$4.99 shipping.",
  },
  {
    name: "Silly Pikachu",
    price: 15,
    img: "project3/images/pikasilly.webp",
    shipping: "Free shipping!",
  },
];

for (let i = 0; i < products.length; i++) {
  const productCard = document.createElement("div");
  const cardInfo = document.createElement("div");
  const cardNameDiv = document.createElement("div");
  const cardName = document.createElement("p");
  const cardShipping = document.createElement("p");
  const cardPriceDiv = document.createElement("div");
  const cardPrice = document.createElement("h1");
  const cardPriceLabel = document.createElement("p");

  cardName.innerText = products[i].name;
  cardShipping.innerText = products[i].shipping;
  cardPrice.innerText = products[i].price;
  cardPriceLabel.innerText = "dollars";

  productCard.style.backgroundImage = "url('" + products[i].img + "')";

  productCard.classList.add("product-card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("card-name");
  cardShipping.classList.add("card-shipping");
  cardPriceDiv.classList.add("card-price");

  productCard.appendChild(cardInfo);

  cardInfo.appendChild(cardNameDiv);
  cardInfo.appendChild(cardPriceDiv);

  cardNameDiv.appendChild(cardName);
  cardNameDiv.appendChild(cardShipping);

  cardPriceDiv.appendChild(cardPrice);
  cardPriceDiv.appendChild(cardPriceLabel);

  let shopContent = document.getElementById("shop-content");
  shopContent.appendChild(productCard);
}
