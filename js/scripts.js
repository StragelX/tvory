$(document).ready(function () {
  $(".burger").on("click", function () {
    $(this).toggleClass("active");
    $(".index .logo").toggleClass("fill-white");
    $(".index .logo").toggleClass("fill-black");
    $("nav").toggleClass("hidden");
    $(".lang_switch").toggleClass("!text-black");
    $(".burger > div").toggleClass("bg-black");

    if ($("header").hasClass("index")) {
      $("header").toggleClass("show_black");
    }
  });

  $(".text_select").click(function () {
    $(".text_select").removeClass("active first");
    $(this).addClass("active");

    let id = $(this).data("id");

    $(".desc_text").removeClass("active");
    $(".desc_text").each(function () {
      if ($(this).data("id") == id) {
        $(this).addClass("active");
      }
    });

    $(".video_link").removeClass("active");
    $(".video_link").each(function () {
      if ($(this).data("id") == id) {
        $(this).addClass("active");
      }
    });
  });

  const url = new URL(window.location.href);
  if (url.pathname === "/stratagy.html") {
    if (url.hash) {
      let hash = url.hash;
      $(hash).addClass("first active");
      $(hash).trigger("click");
    } else {
      $(".text_select").first().addClass("first active");
    }
  }

  $(".workers_switch button").click(function () {
    $(this).siblings().removeClass("active");

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".workers_wrap > div").show();
    } else {
      $(this).addClass("active");
      SortWorkers($(this).data("id"));
    }
  });

  $(".logo_moldviz").mouseenter(function () {
    $("main").addClass("bg-green");
    $("header").addClass("whited");
  });

  $(".logo_moldviz").mouseleave(function () {
    $("main").removeClass("bg-green");
    $("header").removeClass("whited");
  });

  $(".logo_lab").mouseenter(function () {
    $("main").addClass("bg-blue");
    $("header").addClass("whited");
  });

  $(".logo_lab").mouseleave(function () {
    $("main").removeClass("bg-blue");
    $("header").removeClass("whited");
  });

  $(".logo_px").mouseenter(function () {
    $("main").addClass("bg-purple");
    $("header").addClass("whited");
  });

  $(".logo_px").mouseleave(function () {
    $("main").removeClass("bg-purple");
    $("header").removeClass("whited");
  });

  $(".logo_camp").mouseenter(function () {
    $("main").addClass("bg-camp_blue");
    $("header").addClass("whited");
  });

  $(".logo_camp").mouseleave(function () {
    $("main").removeClass("bg-camp_blue");
    $("header").removeClass("whited");
  });

  var owl = $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
  });

  owl.on("changed.owl.carousel", function (event) {
    var secondItem = $(".owl-item.active").eq(2).find("div").data("date");
    $(".dates").html(secondItem);
  });

  $(".owl_next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".owl_prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  AOS.init({
    once: true,
    // delay: 400,
    // anchorPlacement: "bottom-bottom",
  });
});

function SortWorkers(id) {
  $(".workers_wrap > div").each(function () {
    $(this).hide();
    if ($(this).data("id") == id) {
      $(this).show();
    }
  });
}
