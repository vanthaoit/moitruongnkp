var CURRENT_URL = window.location.href.split("?")[0],
  $BODY = $("body"),
  $MENU_TOGGLE = $("#menu_toggle"),
  $SIDEBAR_MENU = $("#sidebar-menu"),
  $SIDEBAR_FOOTER = $(".sidebar-footer"),
  $LEFT_COL = $(".left_col"),
  $RIGHT_COL = $(".right_col"),
  $NAV_MENU = $(".nav_menu"),
  $FOOTER = $("footer");

// Sidebar
$(document).ready(function () {
  // var audio = document.getElementById("player");
  // audio.volume = 0.01;

  /*************** Gallery ******************/

  var itemSelector = ".tm-gallery-item";
  var responsiveIsotope = [
    [480, 4],
    [720, 6],
    [1920, 9],
  ];
  var itemsPerPageDefault = 12;
  var itemsPerPage = defineItemsPerPage();
  var currentNumberPages = 1;
  var currentPage = 1;
  var currentFilter = "*";
  var filterValue = "";
  var pageAttribute = "data-page";
  var pagerClass = "tm-paging";
  var $container = $(".tm-gallery").isotope({
    itemSelector: itemSelector,
  });

  $container.imagesLoaded().progress(function () {
    $container.isotope("layout");
  });

  function changeFilter(selector) {
    $container.isotope({ filter: selector });
  }

  function goToPage(n) {
    currentPage = n;
    var selector = itemSelector;
    var exclusives = [];

    if (currentFilter != "*") {
      exclusives.push(selector + "." + currentFilter);
    }

    filterValue = exclusives.length ? exclusives.join("") : "*";

    var wordPage = currentPage.toString();
    filterValue += "." + wordPage;
    changeFilter(filterValue);
  }

  function defineItemsPerPage() {
    var pages = itemsPerPageDefault;

    for (var i = 0; i < responsiveIsotope.length; i++) {
      if ($(window).width() <= responsiveIsotope[i][0]) {
        pages = responsiveIsotope[i][1];
        break;
      }
    }
    return pages;
  }

  function setPagination() {
    var SettingsPagesOnItems = (function () {
      var itemsLength = $container.children(itemSelector).length;
      var pages = Math.ceil(itemsLength / itemsPerPage);
      var item = 1;
      var page = 1;
      var selector = itemSelector;
      var exclusives = [];

      if (currentFilter != "*") {
        exclusives.push(selector + "." + currentFilter);
      }

      filterValue = exclusives.length ? exclusives.join("") : "*";

      $container.children(filterValue).each(function () {
        if (item > itemsPerPage) {
          page++;
          item = 1;
        }
        wordPage = page.toString();

        var classes = $(this).attr("class").split(" ");
        var lastClass = classes[classes.length - 1];

        if (lastClass.length < 4) {
          $(this).removeClass();
          classes.pop();
          classes.push(wordPage);
          classes = classes.join(" ");
          $(this).addClass(classes);
        } else {
          $(this).addClass(wordPage);
        }
        item++;
      });
      currentNumberPages = page;
    })();

    var CreatePagers = (function () {
      var $isotopePager =
        $("." + pagerClass).length == 0
          ? $('<div class="' + pagerClass + '"></div>')
          : $("." + pagerClass);

      $isotopePager.html("");
      if (currentNumberPages > 1) {
        for (var i = 0; i < currentNumberPages; i++) {
          var $pager = "";

          if (currentPage == i + 1) {
            $pager = $(
              '<a href="javascript:void(0);" class="active tm-paging-link" ' +
                pageAttribute +
                '="' +
                (i + 1) +
                '"></a>'
            );
          } else {
            $pager = $(
              '<a href="javascript:void(0);" class="tm-paging-link" ' +
                pageAttribute +
                '="' +
                (i + 1) +
                '"></a>'
            );
          }

          $pager.html(i + 1);

          $pager.click(function () {
            $(".tm-paging-link").removeClass("active");
            $(this).addClass("active");
            var page = $(this).eq(0).attr(pageAttribute);
            goToPage(page);
          });
          $pager.appendTo($isotopePager);
        }
      }
      $container.after($isotopePager);
    })();
  }

  setPagination();
  goToPage(1);

  $(".tm-gallery-link").click(function (e) {
    e.stopPropagation();
    var filter = $(this).data("filter");
    currentFilter = filter;
    setPagination();
    goToPage(1);
    $(".tm-gallery-link").removeClass("active");
    $(e.target).addClass("active");
  });

  // sidebar menu click
  // $(".templatemo-sidebar-menu li.sub a").click(function (e) {
  //   e.stopPropagation();
  //   var openMenu = "open";
  //   var exeJquery = ".sub";
    
  //   var onClick = $(this).parent().hasClass(openMenu);
  //   if (onClick) {
  //     $(this).parent().removeClass(openMenu);
  //     $(this).parent().removeClass("open");
  //   } else {
  //     $(this).parent().addClass(openMenu);
  //     $(this).parent().addClass("open");
  //   }
  //   e.preventDefault();
  // });
   // sidebar menu click

  $(".multi-column-dropdown").click(function (e) {
    e.stopPropagation();
    var exeJquery = ".group-sub-menu";
    var closeMenu = "closeMenu";
    var onClick = $(exeJquery, this).hasClass(closeMenu);
    if (onClick) {
      $(this).css("background-color", "white");
      //$(this).removeClass('onClick');
      $(exeJquery, this).removeClass(closeMenu);
    } else {
      $(this).css("background-color", "#93d2eced");
      //$(this).addClass('onClick');
      $(exeJquery, this).addClass(closeMenu);
    }
  });

  jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
      event.preventDefault();

      $("html,body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1000
      );
    });
  });

  $(".popup-with-zoom-anim").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });

  initialRelativeLoad = function () {
    $("#flexiselDemo").flexisel({
      visibleItems: 3,
      animationSpeed: 1000,
      autoPlay: true,
      autoPlaySpeed: 3000,
      pauseOnHover: true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint: 480,
          visibleItems: 1,
        },
        landscape: {
          changePoint: 640,
          visibleItems: 2,
        },
        tablet: {
          changePoint: 768,
          visibleItems: 2,
        },
      },
    });
  };

  $(".flexslider").flexslider({
    animation: "slide",
    controlNav: "thumbnails",
  });

  // TODO: This is some kind of easy fix, maybe we can improve this
  var setContentHeight = function () {
    // reset height
    $RIGHT_COL.css("min-height", $(window).height());

    var bodyHeight = $BODY.outerHeight(),
      footerHeight = $BODY.hasClass("footer_fixed") ? 0 : $FOOTER.height(),
      leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
      contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

    // normalize content
    contentHeight -= $NAV_MENU.height() + footerHeight;

    $RIGHT_COL.css("min-height", contentHeight);
  };

  $SIDEBAR_MENU
    .find("a")
    .off("click")
    .on("click", function (ev) {
      var $li = $(this).parent();

      if ($li.is(".active")) {
        $li.removeClass("active active-sm");
        $("ul:first", $li).slideUp(function () {
          setContentHeight();
        });
      } else {
        // prevent closing menu if we are on child menu
        if (!$li.parent().is(".child_menu")) {
          $SIDEBAR_MENU.find("li").removeClass("active active-sm");
          $SIDEBAR_MENU.find("li ul").slideUp();
        }

        $li.addClass("active");

        $("ul:first", $li).slideDown(function () {
          setContentHeight();
        });
      }
    });

  // toggle small or large menu
  $MENU_TOGGLE.off("click").on("click", function () {
    if ($BODY.hasClass("nav-md")) {
      $SIDEBAR_MENU.find("li.active ul").hide();
      $SIDEBAR_MENU
        .find("li.active")
        .addClass("active-sm")
        .removeClass("active");
    } else {
      $SIDEBAR_MENU.find("li.active-sm ul").show();
      $SIDEBAR_MENU
        .find("li.active-sm")
        .addClass("active")
        .removeClass("active-sm");
    }

    $BODY.toggleClass("nav-md nav-sm");

    setContentHeight();
  });

  // check active menu
  $SIDEBAR_MENU
    .find('a[href="' + CURRENT_URL + '"]')
    .parent("li")
    .addClass("current-page");

  $SIDEBAR_MENU
    .find("a")
    .filter(function () {
      return this.href == CURRENT_URL;
    })
    .parent("li")
    .addClass("current-page")
    .parents("ul")
    .slideDown(function () {
      setContentHeight();
    })
    .parent()
    .addClass("active");

  // recompute content when resizing
  $(window).smartresize(function () {
    setContentHeight();
  });

  setContentHeight();

  // fixed sidebar
  if ($.fn.mCustomScrollbar) {
    $(".menu_fixed").mCustomScrollbar({
      autoHideScrollbar: true,
      theme: "minimal",
      mouseWheel: { preventDefault: true },
    });
  }
});
// /Sidebar

// Panel toolbox
$(document).ready(function () {
  $(".collapse-link")
    .off("click")
    .on("click", function () {
      var $BOX_PANEL = $(this).closest(".x_panel"),
        $ICON = $(this).find("i"),
        $BOX_CONTENT = $BOX_PANEL.find(".x_content");

      // fix for some div with hardcoded fix class
      if ($BOX_PANEL.attr("style")) {
        $BOX_CONTENT.slideToggle(200, function () {
          $BOX_PANEL.removeAttr("style");
        });
      } else {
        $BOX_CONTENT.slideToggle(200);
        $BOX_PANEL.css("height", "auto");
      }

      $ICON.toggleClass("fa-chevron-up fa-chevron-down");
    });

  $(".close-link").click(function () {
    var $BOX_PANEL = $(this).closest(".x_panel");

    $BOX_PANEL.remove();
  });
});
// /Panel toolbox

// Tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    container: "body",
  });
});
// /Tooltip

// Progressbar
if ($(".progress .progress-bar")[0]) {
  $(".progress .progress-bar").progressbar();
}
// /Progressbar

// Switchery
$(document).ready(function () {
  if ($(".js-switch")[0]) {
    var elems = Array.prototype.slice.call(
      document.querySelectorAll(".js-switch")
    );
    elems.forEach(function (html) {
      var switchery = new Switchery(html, {
        color: "#26B99A",
      });
    });
  }
});
// /Switchery

// iCheck
$(document).ready(function () {
  if ($("input.flat")[0]) {
    $(document).ready(function () {
      $("input.flat").iCheck({
        checkboxClass: "icheckbox_flat-green",
        radioClass: "iradio_flat-green",
      });
    });
  }
});
// /iCheck

// Table
$("table input").on("ifChecked", function () {
  checkState = "";
  $(this).parent().parent().parent().addClass("selected");
  countChecked();
});
$("table input").on("ifUnchecked", function () {
  checkState = "";
  $(this).parent().parent().parent().removeClass("selected");
  countChecked();
});

var checkState = "";

$(".bulk_action input").on("ifChecked", function () {
  checkState = "";
  $(this).parent().parent().parent().addClass("selected");
  countChecked();
});
$(".bulk_action input").on("ifUnchecked", function () {
  checkState = "";
  $(this).parent().parent().parent().removeClass("selected");
  countChecked();
});
$(".bulk_action input#check-all").on("ifChecked", function () {
  checkState = "all";
  countChecked();
});
$(".bulk_action input#check-all").on("ifUnchecked", function () {
  checkState = "none";
  countChecked();
});

function countChecked() {
  if (checkState === "all") {
    $(".bulk_action input[name='table_records']").iCheck("check");
  }
  if (checkState === "none") {
    $(".bulk_action input[name='table_records']").iCheck("uncheck");
  }

  var checkCount = $(".bulk_action input[name='table_records']:checked").length;

  if (checkCount) {
    $(".column-title").hide();
    $(".bulk-actions").show();
    $(".action-cnt").html(checkCount + " Records Selected");
  } else {
    $(".column-title").show();
    $(".bulk-actions").hide();
  }
}

// Accordion
$(document).ready(function () {
  $(".expand")
    .off("click")
    .on("click", function () {
      $(this).next().slideToggle(200);
      $expand = $(this).find(">:first-child");

      if ($expand.text() == "+") {
        $expand.text("-");
      } else {
        $expand.text("+");
      }
    });
});

// NProgress
if (typeof NProgress != "undefined") {
  $(document).ready(function () {
    NProgress.start();
  });

  $(window).on("load", function () {
    NProgress.done();
  });
}
$(window).on("load", function () {
  $(".example1").wmuSlider();
});
/**
 * Resize function without multiple trigger
 *
 * Usage:
 * $(window).smartresize(function(){
 *     // code here
 * });
 */
(function ($, sr) {
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this,
        args = arguments;
      function delayed() {
        if (!execAsap) func.apply(obj, args);
        timeout = null;
      }

      if (timeout) clearTimeout(timeout);
      else if (execAsap) func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  };

  // smartresize
  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr);
  };
})(jQuery, "smartresize");
