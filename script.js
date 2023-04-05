const mainContainer = document.querySelector("#mainContainer");
let squaresPerSite = 16;
let squareWidth = mainContainer.clientWidth / squaresPerSite;

for (let i = 1; i <= 256; i++) {
  const artDiv = document.createElement("div");
  artDiv.classList.toggle("divArt");
  artDiv.style.width = squareWidth + "px";
  artDiv.innerHTML = i;
  artDiv.addEventListener("mouseover", () => {
    artDiv.style.background = "blue";
  });
  artDiv.addEventListener("mouseout", () => {
    artDiv.style.background = "white";
  });
  mainContainer.appendChild(artDiv);
}

function removeSheet() {
  const divArt = document.querySelectorAll(".divArt");
  mainContainer.removeChild(divArt);
}

// for (let i = 1; i <= squaresPerSite * squaresPerSite; i++) {
//   // const artDiv = document.createElement("div");
//   // artDiv.classList.toggle("divArt");
//   // artDiv.style.width = squareWidth + "px";
//   // artDiv.innerHTML = i;

//   // artDiv.addEventListener("mouseover", () => {
//   //   artDiv.style.background = "blue";
//   // });
//   // artDiv.addEventListener("mouseout", () => {
//   //   artDiv.style.background = "white";
//   // });
//   // mainContainer.appendChild(artDiv);
// }
//}

// function userInput() {
//   let squaresPerSite = +prompt("Squares: ");
//   mainContainer.removeChild(artDiv);
// }
