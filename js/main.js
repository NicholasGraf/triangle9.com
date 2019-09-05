// Custom Javascript
// Nicholas Graf
// v1
$(function() {
  // START

  /* Service Worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('service-worker.js').then(function (registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        };
    */

  moment().locale();

  //  Open Sidebar Settings
  $(document).on("click", ".open-sidebar", function() {
    var target = $(this).attr("data-sidebar");
    $(".sidebar:not(#" + target + ")").sidebar("hide");
    $("#" + target).sidebar("show");
  });

  // Close Sidebar
  $(document).on("click", ".close-sidebar", function() {
    $(this)
      .closest(".sidebar")
      .sidebar("hide");
  });

  // Create Triangle
  function setTri(el, polygon) {
    var triWidth = $(el).innerWidth();
    var triHeight = $(el).innerHeight();
    var triHalf = triWidth / 2;
    $(polygon).attr({
      points: triHalf + ",0 " + triWidth + "," + triHeight + " 0," + triHeight + ""
    });
  }

  setTri(".triangle", ".tri-poly");

  function changeTri(x) {
    $(".triangle").css("transform", "scale(" + x + ")");
  }

  setTimeout(function() {
    changeTri(5);
  }, 3000);

  // END
});
