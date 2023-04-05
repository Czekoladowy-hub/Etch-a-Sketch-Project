window.onload = createSheet;
const mainContainer = document.querySelector("#mainContainer");

function createSheet() {
  for (let i = 1; i <= 256; i++) {
    const artDiv = document.createElement("div");
    artDiv.classList.toggle("divArt");
    artDiv.innerHTML = i;
    artDiv.addEventListener("mouseover", () => {
      artDiv.style.background = "blue";
    });
    artDiv.addEventListener("mouseout", () => {
      artDiv.style.background = "white";
    });
    mainContainer.appendChild(artDiv);
  }
}
