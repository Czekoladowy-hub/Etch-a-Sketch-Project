const mainContainer = document.querySelector("#squereContainer");
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

  artDiv.addEventListener("mouseover", () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    artDiv.style.background = "#" + randomColor;
    artDiv.style.brightness = 0.5;
  });
  // artDiv.addEventListener("mouseout", () => {
  //   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   console.log(randomColor);
  // });
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
    artDiv.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      artDiv.style.background = "#" + randomColor;
    });
    // artDiv.addEventListener("mouseout", () => {
    //   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //   console.log(randomColor);
    // });
    mainContainer.appendChild(artDiv);
  }
}

function resetSheet() {
  newArray.forEach((object) => (object.style.background = "white"));
}
