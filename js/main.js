!(function (e) {
  "use strict";
  var a, t;
  e("#current_date").length &&
    (document.getElementById("current_date").innerHTML =
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][(a = new Date()).getDay()] +
      " , " +
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ][a.getMonth()] +
      " " +
      a.getDate() +
      " , " +
      a.getFullYear()),
    (-1 != (t = navigator.userAgent.toLowerCase()).indexOf("msie") ||
      -1 != t.indexOf("trident")) &&
      e("body").addClass("ie");
  var n = e(".popup-youtube");
  function o() {
    var a = e("body").find(">#wrapper"),
      t = e("#side-menu-trigger a.menu-times");
    a.removeClass("open").find(".offcanvas-mask").remove(),
      e("#offcanvas-body-wrapper").attr("style", ""),
      t.prev(".menu-bar").removeClass("open"),
      t.addClass("close");
  }
  n.length &&
    n.magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    e(".zoom-gallery").length &&
      e(".zoom-gallery").each(function () {
        e(this).magnificPopup({
          delegate: "a.ne-zoom",
          type: "image",
          gallery: { enabled: !0 },
        });
      }),
    e(document).on("click", "#top-search-form .search-button", function (a) {
      return (
        a.preventDefault(),
        e(this)
          .prev("input.search-input")
          .animate(
            {
              width: ["toggle", "swing"],
              height: ["toggle", "swing"],
              opacity: "toggle",
            },
            500,
            "linear"
          ),
        !1
      );
    }),
    e(".loadmore").on("click", "a", function (a) {
      a.preventDefault();
      var t = e(this),
        n = t
          .parents(".menu-list-wrapper")
          .find(".menu-list")
          .find(".menu-item.hidden")
          .slice(0, 3);
      return (
        n.length
          ? (n.animate({ opacity: 0 }),
            n.promise().done(function () {
              n.removeClass("hidden"), n.show().animate({ opacity: 1 }, 1e3);
            }))
          : t.text("No more item to display"),
        !1
      );
    }),
    e("nav#dropdown").meanmenu({
      siteLogo:
        "<div class='mobile-menu-nav-back'><a href='index.html' class='logo-mobile'>'</a></div>",

       
    }),
    new WOW().init(),
    e.scrollUp({
      scrollText: '<i class="fa fa-angle-double-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    }),
    e("#wrapper").on("click", "#side-menu-trigger a.menu-bar", function (a) {
      a.preventDefault();
      var t = e(this),
        n = e(this).parents("body").find(">#wrapper"),
        o = e("<div />").addClass("offcanvas-mask");
      return (
        n.addClass("open").append(o),
        t.addClass("open"),
        t.next(".menu-times").removeClass("close"),
        (document.getElementById("offcanvas-body-wrapper").style.right = "0"),
        !1
      );
    }),
    e("#wrapper").on("click", "#side-menu-trigger a.menu-times", function (a) {
      a.preventDefault();
      var t = e(this);
      return (
        e("#offcanvas-body-wrapper").attr("style", ""),
        t.prev(".menu-bar").removeClass("open"),
        t.addClass("close"),
        o(),
        !1
      );
    }),
    e("#wrapper").on("click", "#offcanvas-nav-close a", function (e) {
      return o(), !1;
    }),
    e(document).on("click", "#wrapper.open .offcanvas-mask", function () {
      o();
    }),
    e(document).on("keyup", function (e) {
      27 === e.which && (e.preventDefault(), o());
    }),
    e("#archive-search select.select2").length &&
      e("#archive-search select.select2").select2({
        theme: "classic",
        dropdownAutoWidth: !0,
        width: "100%",
      }),
    e(window).on("load", function () {
      e("#preloader").fadeOut("slow", function () {
        e(this).remove();
      });
      var a = e(".ne-isotope");
      a.length > 0 &&
        a.each(function () {
          var a = e(this),
            t = a.find(".isotope-classes-tab a.current").attr("data-filter"),
            n = a
              .find(".featuredContainer")
              .isotope({
                filter: t,
                animationOptions: {
                  duration: 750,
                  easing: "linear",
                  queue: !1,
                },
              });
          a.find(".isotope-classes-tab").on("click", "a", function () {
            var a = e(this);
            a.parent(".isotope-classes-tab").find("a").removeClass("current"),
              a.addClass("current");
            var t = a.attr("data-filter");
            return (
              n.isotope({
                filter: t,
                animationOptions: {
                  duration: 750,
                  easing: "linear",
                  queue: !1,
                },
              }),
              !1
            );
          });
        });
      var t = e(".ne-isotope-all");
      if (t.length > 0) {
        var n = t.find(".isotope-classes-tab a.current").attr("data-filter");
        console.log(n);
        var o = t
          .find(".featuredContainer")
          .isotope({
            filter: n,
            animationOptions: { duration: 750, easing: "linear", queue: !1 },
          });
        t.find(".isotope-classes-tab").on("click", "a", function () {
          var a = e(this);
          a.parent(".isotope-classes-tab").find("a").removeClass("current"),
            a.addClass("current");
          var t = a.attr("data-filter");
          return (
            o.isotope({
              filter: t,
              animationOptions: { duration: 750, easing: "linear", queue: !1 },
            }),
            !1
          );
        });
      }
    });
  var s = e("#accordion");
  s
    .children(".panel")
    .children(".panel-collapse")
    .each(function () {
      e(this).hasClass("in") &&
        e(this).parent(".panel").children(".panel-heading").addClass("active");
    }),
    s
      .on("show.bs.collapse", function (a) {
        e(a.target).prev(".panel-heading").addClass("active");
      })
      .on("hide.bs.collapse", function (a) {
        e(a.target).prev(".panel-heading").removeClass("active");
      });
  var i = e("#contact-form");
  i.length &&
    i.validator().on("submit", function (a) {
      var t = e(this),
        n = i.find(".form-response");
      if (!a.isDefaultPrevented())
        return (
          e.ajax({
            url: "vendor/php/contact-form-process.php",
            type: "POST",
            data: i.serialize(),
            beforeSend: function () {
              n.html("<div class='alert alert-info'><p>Loading ...</p></div>");
            },
            success: function (e) {
              "success" === e
                ? (t[0].reset(),
                  n.html(
                    "<div class='alert alert-success'><p>Message has been sent successfully.</p></div>"
                  ))
                : n.html(
                    "<div class='alert alert-success'><p>" + e + "</p></div>"
                  );
            },
          }),
          !1
        );
      n.html(
        "<div class='alert alert-success'><p>Please select all required field.</p></div>"
      );
    }),
    e("#login-button").on("click", function (a) {
      a.preventDefault();
      var t = e(this),
        n = t.next("#login-form");
      t.hasClass("open")
        ? (n.slideUp("slow"), t.removeClass("open"))
        : (n.slideDown("slow"), t.addClass("open"));
    }),
    e("#login-form").on("click", ".form-cancel", function (a) {
      a.preventDefault();
      var t = e(this).parents("#login-form"),
        n = t.prev("#login-button");
      t.slideUp("slow"), n.removeClass("open");
    }),
    e("#googleMap").length &&
      (window.onload = function () {
        var e = {
            mapTypeControlOptions: { mapTypeIds: ["Styled"] },
            center: new google.maps.LatLng(-37.81618, 144.95692),
            zoom: 11,
            disableDefaultUI: !0,
            mapTypeId: "Styled",
          },
          a = document.getElementById("googleMap"),
          t = new google.maps.Map(a, e),
          n =
            (new google.maps.Marker({
              position: t.getCenter(),
              animation: google.maps.Animation.BOUNCE,
              icon: "img/map-marker.png",
              map: t,
            }),
            new google.maps.StyledMapType(
              [
                {
                  featureType: "water",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#b7d0ea" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#c2c2aa" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#b6d1b0" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
              ],
              { name: "Styled" }
            ));
        t.mapTypes.set("Styled", n);
      }),
    e(".ne-carousel").each(function () {
      var a = e(this),
        t = a.data("loop"),
        n = a.data("items"),
        o = a.data("margin"),
        s = (a.data("stage-padding"), a.data("autoplay")),
        i = a.data("autoplay-timeout"),
        r = a.data("smart-speed"),
        l = a.data("dots"),
        d = a.data("nav"),
        p = a.data("nav-speed"),
        c = a.data("r-x-small"),
        m = a.data("r-x-small-nav"),
        u = a.data("r-x-small-dots"),
        f = a.data("r-x-medium"),
        g = a.data("r-x-medium-nav"),
        v = a.data("r-x-medium-dots"),
        h = a.data("r-small"),
        y = a.data("r-small-nav"),
        w = a.data("r-small-dots"),
        b = a.data("r-medium"),
        C = a.data("r-medium-nav"),
        T = a.data("r-medium-dots"),
        k = a.data("r-Large"),
        x = a.data("r-Large-nav"),
        D = a.data("r-Large-dots"),
        S = a.data("center");
      a.owlCarousel({
        loop: !!t,
        items: n || 4,
        lazyLoad: !0,
        margin: o || 0,
        autoplay: !!s,
        autoplayTimeout: i || 1e3,
        smartSpeed: r || 250,
        dots: !!l,
        nav: !!d,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        navSpeed: !!p,
        center: !!S,
        responsiveClass: !0,
        responsive: {
          0: { items: c || 1, nav: !!m, dots: !!u },
          480: { items: f || 2, nav: !!g, dots: !!v },
          768: { items: h || 3, nav: !!y, dots: !!w },
          992: { items: b || 4, nav: !!C, dots: !!T },
          1200: { items: k || 5, nav: !!x, dots: !!D },
        },
      });
    }),
    e(window).on("load resize", function () {
      var a = e(window).height();
      e("a.logo-mobile").outerHeight();
      (a -= 50), e(".mean-nav > ul").css("height", a + "px");
      var t = e(".add-top-margin"),
        n = e(".header-menu-fixed").outerHeight();
      t.css({ "margin-top": n + "px" }),
        e(window).width() < 991 &&
          e("body.mean-container").css("margin-top", 0);
    }),
    e(window).on("scroll", function () {
      var a = e("#sticker"),
        t = a.outerHeight(),
        n = e(window).scrollTop(),
        o = e(window).width(),
        s = e("#header-layout1"),
        i = e("#header-layout2");
      if (o > 991) {
        var r = 1;
        i.length && (r = i.find(".header-top-bar").outerHeight()),
          n >= r
            ? (s.length && a.addClass("stick"),
              i.length &&
                (a.addClass("stick"),
                e(".main-menu-area").addClass("header-menu-fixed"),
                e("body").css({ "margin-top": t + "px" })))
            : (a.removeClass("stick"),
              i.length &&
                (a.removeClass("stick"),
                e(".main-menu-area").removeClass("header-menu-fixed"),
                e("body").css({ "margin-top": 0 })));
      }
    }),
    e(".masonry-items").masonry({
      itemSelector: ".masonry-item",
      columnWidth: ".masonry-item",
    });
})(jQuery);
