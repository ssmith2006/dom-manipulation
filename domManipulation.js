"use strict";

const mainParagraph = document.getElementById("mainParagraph");
mainParagraph.innerText = "The text in the main paragraph has been changed.";

const mainClass = document.querySelector(".mainClass");
mainClass.style.backgroundColor = "blue";

const mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click", () => {
  alert("Clicked!");
});

const mainLink = document.querySelector(".mainLink");
mainLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Link clicked but action was stopped!");
});
