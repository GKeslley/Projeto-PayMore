import initChart from "./chart.js";

export default function adicionarItem() {
  const button = document.querySelector("[data-buttonAdd]");
  const adicionar = document.querySelector("#adicionar");
  const price = document.querySelector("#price");
  const select = document.querySelector("select");

  const historico = document.querySelector(".historico");

  if (document.body.classList.contains("home")) {
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    let value4 = 0;
    let start = 0;

    function chartsProparties(event) {
      event.preventDefault();

      const elements = {
        name: adicionar.value,
        price: price.value,
        select: select.options[select.selectedIndex].text,
        index: select.value,
      };

      if (elements.select === "Lazer") {
        elements.total = value1 += 1;
        localStorage.setItem("lazer", elements.total);
      } else if (elements.select === "Importante") {
        elements.total = value2 += 1;
        localStorage.setItem("importante", elements.total);
      } else if (elements.select === "Necessario") {
        elements.total = value3 += 1;
        localStorage.setItem("necessario", elements.total);
      } else if (elements.select === "Desnecessario") {
        elements.total = value4 += 1;
        localStorage.setItem("desnecessario", elements.total);
      }

      localStorage.setItem(elements.name, elements.price);

      addElementsInStorage(elements);
    }

    function addElementsInStorage(elements) {
      const mapItens = Object.keys(localStorage).filter((item) => {
        if (elements.name === item) {
          const ulElement = document.createElement("ul");
          const elementosDoHistorico = `<li>Objeto: ${item}</li> <li>Preço: R$ ${elements.price}</li> <li>Prioridade: ${elements.select}</li>`;
          start += +elements.price;
          localStorage.setItem("gasto", start);
          ulElement.innerHTML = elementosDoHistorico;
          historico.appendChild(ulElement);
          const historicoStorage = historico.innerHTML;
          localStorage.setItem("historico", historicoStorage);

          if (Object.keys(localStorage).includes("gasto")) {
            const totalComGasto =
              +localStorage.getItem("total") - +localStorage.getItem("gasto");
            localStorage.setItem("totalComGasto", totalComGasto);
            const totalSubtraido = document.querySelector("#valorIndex");
            gastoElement.innerText = `R$ ${localStorage.getItem("gasto")}`;
            totalSubtraido.innerText = `R$ ${totalComGasto}`;
          }
        }
      });
      initChart();
      addPrioridade();
    }

    function addPrioridade() {
      const prioridade = Math.max(
        ...[
          +localStorage.getItem("importante"),
          +localStorage.getItem("lazer"),
          +localStorage.getItem("necessario"),
          +localStorage.getItem("desnecessario"),
        ]
      );

      const prioridadeValue = document.querySelector("[data-prioridade]");
      function trocarPrioridade(item) {
        if (+localStorage.getItem(item) === prioridade) {
          prioridadeValue.innerText = `${item
            .slice(0, 1)
            .toUpperCase()}${item.slice(1)}`;
        }
      }

      const labels = [
        "importante",
        "lazer",
        "necessario",
        "desnecessario",
        "Prioridade",
      ];

      labels.forEach((item) => {
        trocarPrioridade(item);
      });
    }

    button.addEventListener("click", chartsProparties);

    const gastoElement = document.querySelector("[data-gasto]");
    const totalSubtraido = document.querySelector("#valorIndex");
    historico.innerHTML = localStorage.getItem("historico");
    if (
      localStorage.getItem("total") &&
      !localStorage.getItem("totalComGasto") &&
      !localStorage.getItem("gasto")
    ) {
      totalSubtraido.innerText = `R$ ${localStorage.getItem("total")}`;
    } else if (localStorage.getItem("totalComGasto")) {
      gastoElement.innerText = `R$ ${localStorage.getItem("gasto")}`;
      totalSubtraido.innerText = `R$ ${localStorage.getItem("totalComGasto")}`;
    }

    initChart();
    addPrioridade();
  }
}
