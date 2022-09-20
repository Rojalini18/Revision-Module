let container = document.querySelector(".container");
let count = 1;
const getData = () => {
  for (let i = 0; i < 25; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "elem");
    div.innerText = `Masai Student ${count++}`;
    div.addEventListener("click", () => {
      modalOpen(count);
    });
    container.append(div);
  }
};

getData();

container.addEventListener("scroll", () => {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    getData();
  }
});

const scroll = () => {
  container.scrollTop = 0;
};

let modal_container = document.createElement("div");
modal_container.setAttribute("class", "modal");
modal_container.innerHTML = `
<div>Rojalini Das<button onclick="modalClose()">X</button></div>
<button onclick="modalClose()">Continue</button>
`;
document.querySelector("body").append(modal_container);
function modalOpen() {
  modal_container.style.display = "block";
}

function modalClose() {
  modal_container.style.display = "none";
}
