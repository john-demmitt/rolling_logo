$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $("#trans g");
    var resL = $("#res g");
    var width = $(document).width();
    var center = 0.375 * width;

    var tl = new TimelineMax();

    tl.staggerFromTo(transL, 2, { x: -width, autoAlpha: 0 }, { x: center, autoAlpha: 1 }, 0.1, "rollin");




    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});