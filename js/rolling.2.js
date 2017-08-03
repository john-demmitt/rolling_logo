$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $("#trans g");
    var resL = $("#res g");
    var dWidth = $(document).width();
    var dCenter = 0.375 * dWidth;
    var star = $(".star")
    var tl = new TimelineMax();

    tl.staggerTo(resL, 1.4, { x: dCenter }, -0.175, "rollin")
        .staggerTo(transL, 1.4, { x: dCenter }, -0.1, "rollin")
        .to(star, 3.7, { rotation: 2400, transformOrigin: "50% 50%", ease: "Power4.easeOut" }, "rollin");



    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});