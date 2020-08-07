$(function () {
  function setSizes() {
    setTimeout(function () {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", vh + "px");
      //document.body.style.setProperty("--vh", vh + "px");
    }, 50);
  }

  setSizes();

  $(window).resize(function () {
    setSizes();
  });

  new WOW().init();

  var chart1 = document.getElementById("chart1");
  var chart2 = document.getElementById("chart2");
  var chart3 = document.getElementById("chart3");
  var chart4 = document.getElementById("chart4");

  var myChart1 = new Chart(chart1, {
    type: "doughnut",
    data: {
      labels: ["Физ. лица", "Юр. лица", "ИП"],
      datasets: [
        {
          label: "Pints",
          data: [705894, 95980, 2474],
          backgroundColor: [
            "#2999d6",
            "#7bbee2",
            "#29c8d6",
            "#0ac883",
            "#dac42f",
            "#46a06a",
          ],
        },
      ],
    },
    options: {
      cutoutPercentage: 75,
      legend: {
        display: false,
      },
    },
    plugins: {
      deferred: {
        // enabled by default
        xOffset: 150, // defer until 150px of the canvas width are inside the viewport
        yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
        delay: 500, // delay of 500 ms after the canvas is considered inside the viewport
      },
    },
  });

  var myChart2 = new Chart(chart2, {
    type: "bar",
    data: {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          data: [716, 416, 316, 308, 308],
          backgroundColor: [
            "#2999d6",
            "#7bbee2",
            "#29c8d6",
            "#0ac883",
            "#dac42f",
            "#46a06a",
          ],
        },
      ],
    },
    options: {
      cutoutPercentage: 75,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: { display: false },
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            gridLines: { display: false },
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  var myChart3 = new Chart(chart3, {
    type: "bar",
    data: {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          data: [654, 356, 302, 298, 290],
          backgroundColor: [
            "#2999d6",
            "#7bbee2",
            "#29c8d6",
            "#0ac883",
            "#dac42f",
            "#46a06a",
          ],
        },
      ],
    },
    options: {
      cutoutPercentage: 75,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: { display: false },
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            gridLines: { display: false },
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  var myChart4 = new Chart(chart4, {
    type: "doughnut",
    data: {
      labels: [
        "Федеральный орган исполнительной власти",
        "Территориальный орган федерального органа исполнительной власти",
        "Региональный орган исполнительной власти",
        "Муниципальный орган власти",
        "Крестьянское (фермерское) хозяйство",
        "Иная организация",
      ],
      datasets: [
        {
          label: "Pints",
          data: [716, 416, 316, 308, 308, 716],
          backgroundColor: [
            "#2999d6",
            "#7bbee2",
            "#29c8d6",
            "#0ac883",
            "#dac42f",
            "#46a06a",
          ],
        },
      ],
    },
    options: {
      cutoutPercentage: 75,
      legend: {
        display: false,
      },
    },
  });
});
