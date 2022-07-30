export default function initBarraLateral() {
  const bar = document.querySelector("[data-bar]");
  const imgsBar = document.querySelectorAll("[data-bar] img");
  const elementsBar = document.querySelectorAll("[data-bar] a");

  function showBar() {
    elementsBar.forEach((item) => {
      item.classList.add("ativo");
    });

    imgsBar.forEach((img) => {
      img.style.marginRight = 15 + "px";
    });

    bar.style.position = "absolute";
    bar.classList.add("animation");
    const innerBottom = Math.abs(bar.getBoundingClientRect().top);
    bar.style.paddingBottom = innerBottom + "px";
    outsideBar(this);
  }

  function outsideBar(element) {
    onMouseLeave.element = element;
    element.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.element.removeEventListener("mouseover", onMouseLeave);
      this.element.style.position = "initial";
      this.element.style.paddingBottom = 0 + "px";
      this.element.classList.remove("animation");

      elementsBar.forEach((item) => {
        item.classList.remove("ativo");
      });

      imgsBar.forEach((img) => {
        img.style.marginRight = 0 + "px";
      });
    },
  };

  if (window.matchMedia("(min-width: 920px)").matches) {
    console.log(true);

    bar.addEventListener("mouseover", showBar);

    window.addEventListener("resize", () => {
      if (!window.matchMedia("(min-width: 920px)").matches) {
        bar.removeEventListener("mouseover", showBar);
      } else {
        bar.addEventListener("mouseover", showBar);
      }
    });
  }
}
