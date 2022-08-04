export default function totalInformations() {
  const sendButton = document.querySelector("#formButton");
  const inputTotal = document.querySelector("#valor");
  const buttonClear = document.querySelector("#clearValue");

  const totalSubtraido = document.querySelector("#valorIndex");
  const total = localStorage.getItem("total");
  const gastoTotal = localStorage.getItem("totalComGasto");
  const eventos = ["click", "touchstart"];

  if (document.body.classList.contains("total")) {
    sendButton.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem("total", inputTotal.value);
      window.location.href = localStorage.getItem("hrefPrincipal");
    });

    buttonClear.classList.add("ativo");
    eventos.forEach((event) => {
      buttonClear.addEventListener(event, () => {
        window.location.href = localStorage.getItem("hrefPrincipal");
        Object.keys(localStorage).forEach((item) => {
          localStorage.removeItem(item);
        });
      });
    });
  }

  if (document.body.classList.contains("home")) {
    const totalElement = totalSubtraido;
    const hrefPrincipal = window.location.href;
    localStorage.setItem("hrefPrincipal", hrefPrincipal);

    if (localStorage.total && !gastoTotal) {
      const valueTotal = total;
      totalElement.innerText = `R$ ${valueTotal}`;
    }
  }
}
