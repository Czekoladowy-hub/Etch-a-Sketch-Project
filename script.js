const mainContainer = document.querySelector("#squereContainer");
const randomColorBtn = document.querySelector("#randomColorBtn");
let squaresPerSite = 16;
let squareWidth = mainContainer.clientWidth / squaresPerSite;
const minInput = 2;
const maxInput = 100;
let userInput = "";
let newArray = [];

// create basic sheet
for (let i = 1; i <= 256; i++) {
  const artDiv = document.createElement("div");
  artDiv.classList.toggle("divArt");
  artDiv.style.width = squareWidth + "px";

  mainContainer.appendChild(artDiv);
  newArray.push(artDiv);
}

function removeSheet() {
  mainContainer.innerHTML = "";
  userInput = +prompt("Enter value");
  while (!(userInput >= minInput && userInput <= maxInput)) {
    userInput = prompt("Value must be between 2 and 100: ");
  }
  createCustomSheet(userInput);
}

function createCustomSheet(userInput) {
  let squareWidth = mainContainer.clientWidth / userInput;
  for (let i = 1; i <= userInput * userInput; i++) {
    const artDiv = document.createElement("div");
    artDiv.classList.toggle("divArt");
    artDiv.style.width = squareWidth + "px";

    mainContainer.appendChild(artDiv);
    newArray.push(artDiv);
  }
}

function randomColor() {
  newArray.forEach((div) => {
    div.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      div.style.background = "#" + randomColor;
      console.log("random");
    });
  });
}

function resetSheet() {
  newArray.forEach((object) => (object.style.background = "white"));
}
