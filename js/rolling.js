$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $("#trans g");
    var resL = $("#res g");
    var dWidth = $(document).width();
    var dCenter = 0.375 * dWidth;
    var star = $(".star")
    var tl = new TimelineMax();

    tl.staggerFromTo([resL, transL], 5, { x: -dWidth, opacity: 0, ease:false }, { x: dCenter, opacity: 1 },  0.3, "rollin")
    .to(star, 5, {rotation:1800, transformOrigin: "50% 50%"}, "rollin");
    



    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});