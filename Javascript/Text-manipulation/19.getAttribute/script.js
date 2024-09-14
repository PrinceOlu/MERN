// for this example, lets consider a gallery of images where each image has an associated data attribute called 'data-author' that stores the author's name. We want to filter the images by author.

// step1: get all the images
const imageGallery = document
  .getElementById("imageGallery")
  .querySelectorAll("img");
// console.log(imageGallery);

// lets create an array to store the images of Alice
const imageAlice = [];
// use forEach loop to loop through and filter images with authour 'Alice'
imageGallery.forEach((img) => {
  //   using the getAttribute to get the author
  const author = img.getAttribute("data-author");
  if (author === "Alice") {
    imageAlice.push(img);
  }
});
// console.log(imageAlice);
imageAlice.forEach((img) => {
  console.log(img);
});
// let us hide images that the author is not Alice.
// firstly let us loop though the entire collection of images
imageGallery.forEach((img) => {
  // lets now look for images that are not alice
  if (!imageAlice.includes(img)) {
    // then use css display none to hide it
    img.style.display = "none";
  }
});
