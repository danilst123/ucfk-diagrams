$(function () {
  var counterOptions = {
    useEasing: true,
    useGrouping: true,
    separator: " ",
    decimal: " ",
    prefix: "",
    suffix: "",
  };

  var barOptions = {
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
  };

  var doughnutOptions = {
    cutoutPercentage: 75,
    legend: {
      display: false,
    },
  };

  var cards = [
    {
      title: "Количество \n действующих сертификатов",
      icon: "../img/medal.svg",
      infoList: [
        {
          title: "Физ. лица",
          count: 705894,
        },
        {
          title: "Юр. лица",
          count: 123,
        },
        {
          title: "ИП",
          count: 123,
        },
      ],
      diagram: {
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
        options: doughnutOptions,
      },
      additionalCard: {
        title: "Сертификаты, \n созданные в 2020 году",
        icon: "../img/medal.svg",
        infoList: [
          {
            title: "Физ. лица",
            count: 705894,
          },
          {
            title: "Юр. лица",
            count: 123,
          },
          {
            title: "ИП",
            count: 123,
          },
        ],
      },
    },
    {
      title: "Запросы на сертификаты, созданные за 24 часа",
      icon: "../img/medal.svg",
      subtitle:
        "Рейтинг 5-ти ТОФК, в которые были поданы запросы на создание сертификатов",
      infoList: [
        {
          title: "Физ. лица",
          count: 7894,
        },
        {
          title: "Юр. лица",
          count: 123,
        },
        {
          title: "ИП",
          count: 123,
        },
      ],
      diagram: {
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
        options: barOptions,
      },
    },
    {
      title: "Сертификаты, созданные за 24 часа",
      icon: "../img/medal.svg",
      subtitle:
        "Рейтинг 5-ти ТОФК, в которые были поданы запросы на создание сертификатов",
      infoList: [
        {
          title: "Физ. лица",
          count: 123,
        },
        {
          title: "Юр. лица",
          count: 123,
        },
        {
          title: "ИП",
          count: 123,
        },
      ],
      diagram: {
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
        options: barOptions,
      },
    },
    {
      title: "Количество зарегистрированных организаций",
      icon: "../img/house.svg",
      infoList: [
        {
          title: "Физ. лица",
          count: 12314,
        },
        {
          title: "Юр. лица",
          count: 123,
        },
        {
          title: "ИП",
          count: 123,
        },
      ],
      diagram: {
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
        options: doughnutOptions,
      },
    },
  ];

  var app = new Vue({
    el: "#app",
    data: {
      cards: cards,
    },
    mounted: function () {
      new WOW().init();

      var canvases = this.$refs.canvas;

      setTimeout(function () {
        for (var index = 0; index < cards.length; index++) {
          new Chart(canvases[index], cards[index].diagram);
        }
      }, 1900);

      $("[data-counter]").each(function () {
        var num = parseInt($(this).data("counter")); //end count
        var counts = new CountUp(this, 0, num, null, 1, counterOptions);

        setTimeout(function () {
          counts.start();
        }, 1900);
      });
    },
    methods: {
      totalCount: function (card) {
        var arr = card.infoList;
        var sum = 0;

        for (var index = 0; index < arr.length; index++) {
          sum += arr[index].count;
        }

        return sum;
      },
    },
  });
});
