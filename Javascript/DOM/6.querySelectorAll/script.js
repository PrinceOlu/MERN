// Select all product cards
const ProductCards = document.querySelectorAll(".product-card");
// console.log(ProductCards);
// Extract and log all  names of the products
const productNames = document.querySelectorAll(".product-name");
// console.log(productNames);

// let us loop through using forEach and not map
productNames.forEach((productName) => {
  //   console.log(productName.innerHTML);
});

// select and log all prices of laptop category products
const laptopPrices = document.querySelectorAll(
  "[data-category='laptop'] .product-price"
);
// console.log(laptopPrices);
// let us loop through to grab the prices
laptopPrices.forEach((prices) => {
  //   console.log(prices.innerHTML);
});

// lets select product with a rating above 4.6
const HighestRating = document.querySelectorAll(
  "[data-rating='4.7'], [data-rating='4.8']"
);
// console.log(HighestRating);
// use forEach loop to loop through the element and log the highest ratings
HighestRating.forEach((el) => {
  console.log(el.innerHTML);
});
