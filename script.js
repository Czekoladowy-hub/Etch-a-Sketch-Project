const mainContainer = document.querySelector("#mainContainer");
let squaresPerSite = 16;
let squareWidth = mainContainer.clientWidth / squaresPerSite;
const minInput = 2;
const maxInput = 100;
let userInput = "";

// create basic sheet
for (let i = 1; i <= 256; i++) {
  const artDiv = document.createElement("div");
  artDiv.classList.toggle("divArt");
  artDiv.style.width = squareWidth + "px";

  artDiv.addEventListener("mouseover", () => {
    artDiv.style.background = "blue";
  });
  artDiv.addEventListener("mouseout", () => {
    artDiv.style.background = "white";
  });
  mainContainer.appendChild(artDiv);
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
    artDiv.addEventListener("mouseover", () => {
      artDiv.style.background = "blue";
    });
    artDiv.addEventListener("mouseout", () => {
      artDiv.style.background = "white";
    });
    mainContainer.appendChild(artDiv);
  }
}
