export default function initChart() {
  if (document.body.classList.contains("home")) {
    const ctx = document.getElementById("myChart").getContext("2d");

    if (Chart.getChart("myChart")) {
      Chart.getChart("myChart").destroy();
    }

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Importante", "Lazer", "Necessario", "Desnecessario"],
        datasets: [
          {
            label: "My First Dataset",
            data: [
              localStorage.getItem("importante"),
              localStorage.getItem("lazer"),
              localStorage.getItem("necessario"),
              localStorage.getItem("desnecessario"),
            ],
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
    console.log(myChart);
  }
}
