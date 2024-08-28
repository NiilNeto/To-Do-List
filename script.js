const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("Você tem que escrever algo!");
  } else {
    const container = document.querySelector("#container-fluid");

    const card = document.createElement("div");
    const cardHeader = document.createElement("div");
    const cardBody = document.createElement("div");

    card.classList.add("card");
    card.style.maxWidth = "18rem";

    cardHeader.classList.add("card-header");
    cardHeader.textContent = ".....";
    cardBody.classList.add("card-body");

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    container.appendChild(card);

    const cTexto = document.createElement("h3");
    cTexto.textContent = "Tarefa";
    cardBody.appendChild(cTexto);

    const cardTexto = document.createElement("p");
    cardTexto.classList.add("card-text");
    cardTexto.textContent = inputBox.value;

    const tittleCard = document.createElement("h5");
    tittleCard.textContent = "Tarefa";

    cardBody.appendChild(cardTexto);

    const buttonCard = document.createElement("button");
    buttonCard.textContent = "Atualizar";
    card.appendChild(buttonCard);

    // const cTexto = document.createElement("h3");
    // cTexto.textContent = inputBox.value;
    // cardBody.appendChild(cTexto);
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
