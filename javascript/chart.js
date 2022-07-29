export default function initChart() {
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Importante", "Lazer", "Necessário", "Besteira"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100, 200],
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
      title: {
        text: "aa",
      },
    },
  });
}
