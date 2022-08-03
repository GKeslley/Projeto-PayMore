export default function totalInformations() {
  const sendButton = document.querySelector("#formButton");
  const inputTotal = document.querySelector("#valor");
  const buttonClear = document.querySelector("#clearValue");

  if (document.body.classList.contains("total")) {
    sendButton.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem("total", inputTotal.value);
    });
    if (localStorage.getItem("total")) {
      buttonClear.classList.add("ativo");
    }
    buttonClear.addEventListener("click", () => {
      Object.keys(localStorage).forEach((item) => {
        localStorage.removeItem(item);
      });
    });
  }

  if (document.body.classList.contains("home")) {
    const totalElement = document.querySelector("#valorIndex");
    if (localStorage.total && !localStorage.getItem("totalComGasto")) {
      const valueTotal = localStorage.getItem("total");
      totalElement.innerText = `R$ ${valueTotal}`;
    }
  }
}
