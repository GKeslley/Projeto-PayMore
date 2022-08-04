export default function totalInformations() {
  const sendButton = document.querySelector("#formButton");
  const inputTotal = document.querySelector("#valor");
  const buttonClear = document.querySelector("#clearValue");

  const totalSubtraido = document.querySelector("#valorIndex");
  const total = localStorage.getItem("total");
  const gastoTotal = localStorage.getItem("totalComGasto");

  if (document.body.classList.contains("total")) {
    sendButton.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem("total", inputTotal.value);
    });

    buttonClear.classList.add("ativo");
    buttonClear.addEventListener("click", () => {
      Object.keys(localStorage).forEach((item) => {
        localStorage.removeItem(item);
      });
    });
  }

  if (document.body.classList.contains("home")) {
    const totalElement = totalSubtraido;

    if (localStorage.total && !gastoTotal) {
      const valueTotal = total;
      totalElement.innerText = `R$ ${valueTotal}`;
    }
  }
}
