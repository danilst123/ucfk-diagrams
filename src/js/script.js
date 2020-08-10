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
      title: "Количество <br> действующих <br> сертификатов",
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
        title: "Сертификаты, <br> созданные в 2020 году",
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
      title: "Запросы <br> на сертификаты, <br> созданные за 24 часа",
      icon: "../img/medal.svg",
      subtitle:
        "Рейтинг 5-ти ТОФК, в которые <br> были поданы запросы <br> на создание сертификатов",
      infoList: [
        {
          title: "Федеральное <br> казначейство",
          count: 716,
        },
        {
          title: "Межрегиональное <br> операционное <br> управление ФК",
          count: 416,
        },
        {
          title: "Управление ФК <br> по г. Санкт- <br> Петербургу",
          count: 316,
        },
        {
          title: "Управление ФК <br> по Новгородской <br> области",
          count: 308,
        },
        {
          title: "Управление ФК <br> по Омской области",
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
      title: "Сертификаты, <br> созданные за 24 часа",
      icon: "../img/medal.svg",
      subtitle:
        "Рейтинг 5-ти ТОФК, в которые <br> были поданы запросы <br> на создание сертификатов",
      infoList: [
        {
          title: "Федеральное <br> казначейство",
          count: 654,
        },
        {
          title: "Межрегиональное <br> операционное <br> управление ФК",
          count: 356,
        },
        {
          title: "Управление ФК <br> по г. Санкт- <br> Петербургу",
          count: 302,
        },
        {
          title: "Управление ФК <br> по Новгородской <br> области",
          count: 298,
        },
        {
          title: "Управление ФК <br> по Омской области",
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
      title: "Количество <br> зарегистрированных <br> организаций",
      icon: "../img/house.svg",
      infoList: [
        {
          title: "Федеральный орган <br> исполнительной <br> власти",
          count: 716,
        },
        {
          title:
            "Территориальный орган<br>федерального органа<br>исполнительной власти",
          count: 416,
        },
        {
          title: "Региональный орган <br> исполнительной <br> власти",
          count: 316,
        },
        {
          title: "Муниципальный <br> орган власти",
          count: 308,
        },
        {
          title: "Крестьянское <br> (фермерское) <br> хозяйство",
          count: 308,
        },
        {
          title: "Иная <br> организация",
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

  var isMobile = window.innerWidth < 940;

  var app = new Vue({
    el: "#app",
    data: {
      cards: cards,
      isMounted: false,
    },
    mounted: function () {
      var delay = isMobile ? 800 : 2000;
      var canvases = this.$refs.canvas;

      $(".grid").on("init", function () {
        var activeSlide = $(".slick-active");

        addAnimation($(".card"));
        addAnimation($(".slick-cloned").find(".animated"));
        addAnimation(activeSlide.find(".animated"));

        buildCounter($(".slick-cloned"), delay);
        buildCounter(activeSlide, delay);

        buildDiagram(activeSlide, delay);
      });

      $(".grid").on("afterChange", function (slick, index, currentSlide) {
        var activeSlide = $("[data-slick-index=" + currentSlide + "]");

        if (!activeSlide.hasClass("SLIDE_ANIMATED")) {
          addAnimation(activeSlide.find(".animated"));
          buildCounter(activeSlide, delay);
          buildDiagram(activeSlide, delay);
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
            breakpoint: 969,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              infinite: true,
              variableWidth: true,
            },
          },
        ],
      });

      function buildCounter(target, delay) {
        target.find("[data-counter]").each(function () {
          var num = parseInt($(this).data("counter"));
          var counts = new CountUp(this, 0, num, null, 1, counterOptions);

          setTimeout(function () {
            counts.start();
            target.addClass("SLIDE_ANIMATED");
          }, delay);
        });
      }

      function buildDiagram(target, delay) {
        target.each(function (index, element) {
          var i = $(this).data("index");

          setTimeout(function () {
            new Chart(canvases[i], cards[i].diagram);
          }, delay);
        });
      }

      function addAnimation(target) {
        target.css({ "animation-name": "fadeIn", visibility: "visible" });
      }
    },
    methods: {
      totalCount: function (card) {
        var arr = card.infoList;
        var sum = 0;

        for (var i = 0; i < arr.length; i++) {
          sum += arr[i].count;
        }

        return sum;
      },
      animationDelay: function (index, indent) {
        var k = isMobile ? 0.1 : 0.2;
        index = isMobile ? 0.1 : index;
        var delay = k * (index + indent);

        return delay.toFixed(1) + "s";
      },
    },
  });
});
