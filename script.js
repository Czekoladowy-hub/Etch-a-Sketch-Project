window.onload = createSheet;
const mainContainer = document.querySelector("#mainContainer");

let squaresPerSite = +prompt("Squares: ");

function createSheet() {
  let squareWidth = mainContainer.clientWidth / squaresPerSite;

  for (let i = 1; i <= squaresPerSite * squaresPerSite; i++) {
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
  console.log(squareWidth);
  console.log(mainContainer.clientWidth);

  console.log(squaresPerSite);
}
