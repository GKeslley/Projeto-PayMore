export default function initChart() {
  if (document.body.classList.contains("home")) {
    const ctx = document.getElementById("myChart").getContext("2d");

    const importante = localStorage.getItem("importante");
    const lazer = localStorage.getItem("lazer");
    const necessario = localStorage.getItem("necessario");
    const desnecessario = localStorage.getItem("desnecessario");

    if (Chart.getChart("myChart")) {
      Chart.getChart("myChart").destroy();
    }

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Importante", "Lazer", "Necessario", "Desnecessario"],
        datasets: [
          {
            label: "My First Dataset",
            data: [importante, lazer, necessario, desnecessario],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(89, 5, 114)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        title: {},
      },
    });
  }
}
