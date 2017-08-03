$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $(".transL");
    var resL = $(".resL");
    var dWidth = $(document).width();
    var dCenter = 0.375 * dWidth;
    var star = $(".star")
    var tl = new TimelineMax();

    tl.staggerFrom(resL, 1.4, { x: -dWidth, rotation: -3600, transformOrigin: "50% 50%", ease: "Power4.easeOut", opacity:0 }, -0.175, "rollin")
        .staggerFrom(transL, 1.4, { x: -dWidth, rotation: -3600, transformOrigin: "50% 50%", ease: "Power4.easeOut", opacity:0 }, -0.1, "rollin");



    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});