window.onload = createSheet;
const mainContainer = document.querySelector("#mainContainer");

// Take user input about how much squares per site he wants
let squaresPerSite = +prompt("Squares: ");

// Function to create whole sheet
function createSheet() {
  // Take div container width and devide it by user input to calculate space for 1 square
  let squareWidth = mainContainer.clientWidth / squaresPerSite;

  for (let i = 1; i <= squaresPerSite * squaresPerSite; i++) {
    const artDiv = document.createElement("div");
    artDiv.classList.toggle("divArt");
    artDiv.style.width = squareWidth + "px";
    artDiv.innerHTML = i;
    // Add listeners to control if cursore is hovering div and change color
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
