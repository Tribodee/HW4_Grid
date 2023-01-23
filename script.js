const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Fab", "Mar", "Apr",
    "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
      label: 'Months',
      backgroundColor: 'rgba(161, 198, 247, 1)',
      borderColor: 'rgb(47, 128, 237)',
      data: [8, 18, 30, 18, 10, 18, 30, 18, 10, 30, 18, 10],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});

const ctx1 = document.getElementById("chart1").getContext('2d');
const myChart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    datasets: [{
      label: 'food Items',
      backgroundColor: 'rgba(161, 198, 247, 1)',
      borderColor: 'rgb(47, 128, 237)',
      data: [30, 40, 20, 50, 80, 90, 20],
    }]
  },
});