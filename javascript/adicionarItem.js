import initChart from "./chart.js";

export default function adicionarItem() {
  const button = document.querySelector("[data-buttonAdd]");
  const adicionar = document.querySelector("#adicionar");
  const price = document.querySelector("#price");
  const select = document.querySelector("select");

  const historico = document.querySelector(".historico");
  const totalSubtraido = document.querySelector("#valorIndex");
  const gastoSelect = "gasto";

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

      const { name, price: valuePrice, select: selectOption } = elements;

      if (selectOption === "Lazer") {
        elements.total = value1 += 1;
        localStorage.setItem("lazer", elements.total);
      } else if (selectOption === "Importante") {
        elements.total = value2 += 1;
        localStorage.setItem("importante", elements.total);
      } else if (selectOption === "Necessario") {
        elements.total = value3 += 1;
        localStorage.setItem("necessario", elements.total);
      } else if (selectOption === "Desnecessario") {
        elements.total = value4 += 1;
        localStorage.setItem("desnecessario", elements.total);
      }

      localStorage.setItem(name, valuePrice);

      addElementsInStorage(valuePrice, selectOption, name);
    }

    function addElementsInStorage(valuePrice, selectOption, name) {
      Object.keys(localStorage).filter((item) => {
        if (name === item) {
          const ulElement = document.createElement("ul");
          const elementosDoHistorico = `<li>Objeto: ${item}</li> <li>Preço: R$ ${valuePrice}</li> <li>Prioridade: ${selectOption}</li>`;
          start += +valuePrice;
          localStorage.setItem(gastoSelect, start);
          ulElement.innerHTML = elementosDoHistorico;
          historico.appendChild(ulElement);
          const historicoStorage = historico.innerHTML;
          localStorage.setItem("historico", historicoStorage);

          if (Object.keys(localStorage).includes(gastoSelect)) {
            const totalComGasto =
              +localStorage.getItem("total") -
              +localStorage.getItem(gastoSelect);
            localStorage.setItem("totalComGasto", totalComGasto);
            gastoElement.innerText = `R$ ${localStorage.getItem(gastoSelect)}`;
            totalSubtraido.innerText = `R$ ${totalComGasto}`;
          }
        }
      });
      initChart();
      addPrioridade();
    }

    function addPrioridade() {
      const importante = +localStorage.getItem("importante");
      const lazer = +localStorage.getItem("lazer");
      const necessario = +localStorage.getItem("necessario");
      const desnecessario = +localStorage.getItem("desnecessario");

      const prioridade = Math.max(
        ...[importante, lazer, necessario, desnecessario]
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

    const total = localStorage.getItem("total");
    const gastoTotal = localStorage.getItem("totalComGasto");
    const gasto = localStorage.getItem(gastoSelect);

    const gastoElement = document.querySelector("[data-gasto]");
    historico.innerHTML = localStorage.getItem("historico");
    if (total && !gastoTotal && !gasto) {
      totalSubtraido.innerText = `R$ ${total}`;
    } else if (gastoTotal) {
      gastoElement.innerText = `R$ ${gasto}`;
      totalSubtraido.innerText = `R$ ${gastoTotal}`;
    }

    initChart();
    addPrioridade();
  }
}
