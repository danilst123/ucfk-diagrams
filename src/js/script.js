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
      title: "Количество действующих сертификатов",
      icon: "../img/medal.svg",
      infoList: [
        {
          title: "Физ. лица",
          count: 705894,
        },
        {
          title: "Юр. лица",
          count: 95980,
        },
        {
          title: "ИП",
          count: 2474,
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
        title: "Сертификаты, созданные в 2020 году",
        icon: "../img/medal.svg",
        infoList: [
          {
            title: "Физ. лица",
            count: 178716,
          },
          {
            title: "Юр. лица",
            count: 59906,
          },
          {
            title: "ИП",
            count: 757,
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
          title: "Федеральное казначейство",
          count: 716,
        },
        {
          title: "Межрегиональное операционное управление ФК",
          count: 416,
        },
        {
          title: "Управление ФК по г. Санкт- Петербургу",
          count: 316,
        },
        {
          title: "Управление ФК по Новгородской области",
          count: 308,
        },
        {
          title: "Управление ФК по Омской области",
          count: 308,
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
          title: "Федеральное казначейство",
          count: 654,
        },
        {
          title: "Межрегиональное операционное управление ФК",
          count: 356,
        },
        {
          title: "Управление ФК по г. Санкт- Петербургу",
          count: 302,
        },
        {
          title: "Управление ФК по Новгородской области",
          count: 298,
        },
        {
          title: "Управление ФК по Омской области",
          count: 290,
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
          title: "Федеральный орган исполнительной власти",
          count: 716,
        },
        {
          title:
            "Территориальный орган федерального органа исполнительной власти",
          count: 416,
        },
        {
          title: "Региональный орган исполнительной власти",
          count: 316,
        },
        {
          title: "Муниципальный орган власти",
          count: 308,
        },
        {
          title: "Крестьянское (фермерское) хозяйство",
          count: 308,
        },
        {
          title: "Иная организация",
          count: 716,
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
      var canvases = this.$refs.canvas;

      setTimeout(function () {
        for (var index = 0; index < cards.length; index++) {
          new Chart(canvases[index], cards[index].diagram);
        }
      }, 1900);

      function buildCounter(activeSlide) {
        activeSlide.find("[data-counter]").each(function () {
          var num = parseInt($(this).data("counter")); //end count
          var counts = new CountUp(this, 0, num, null, 1, counterOptions);

          setTimeout(function () {
            counts.start();
            activeSlide.addClass("ANIM");
          }, 1900);
        });
      }

      $(".grid").on("init", function () {
        var activeSlide = $(".slick-active");
        buildCounter(activeSlide);
      });

      $(".grid").on("afterChange", function (slick, index, currentSlide) {
        var activeSlide = $("[data-slick-index=" + currentSlide + "]");
        if (!activeSlide.hasClass("ANIM")) {
          buildCounter(activeSlide);
        }
      });

      $(".grid").slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              infinite: true,
            },
          },
        ],
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
      animationDealy: function (k, index, indent) {
        var delay = k + 0.1 * index + indent;

        return delay + "s";
      },
    },
  });
});
