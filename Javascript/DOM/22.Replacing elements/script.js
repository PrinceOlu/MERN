// lets create a function to replace the article
function replaceArticle(articleID, newContent) {
  // find the existing article using its ID
  const existingArticle = document.getElementById(articleID);
  //   create a new div element for the updated article
  const newArticleDiv = document.createElement("div");
  //   lets add the css ctyle to the newly created div
  newArticleDiv.className = "article";
  //   keep the ID as same for the new article
  newArticleDiv.id = articleID;
  // create a text Node for the new content
  const newTextNode = document.createTextNode(newContent);
  // append the new text Node to the new article div
  newArticleDiv.appendChild(newTextNode);
  // lets replace the existing article with the new one
  existingArticle.parentNode.replaceChild(newArticleDiv, existingArticle);
  // console.log(newArticleDiv);
}
replaceArticle("article1", "segun ojugbele");
replaceArticle("article2", "segun ojugbele 2");
