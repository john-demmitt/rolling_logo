$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $(".transL");
    var resL = $(".resL");
    var dWidth = $(document).width();
    var offscreen = 2 * dWidth;
    var star = $(".star");
    var transW = $(".transW");
    var resW = $(".resW");
    var letters = $([resL, transL]);
    var wheels = $([resW, transW]);
    var all = $([resL, resW, transL, transW]);
    var tl = new TimelineMax();

    tl.staggerFrom(resL, 4.2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power3.easeOut"}, -0.5250, "rollin")
        .staggerFrom(transL, 4.2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power3.easeOut" }, -0.3, "rollin")
        .staggerFrom(resW, 4.2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power3.easeOut"}, -0.5250, "rollin")
        .staggerFrom(transW, 4.2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power3.easeOut"}, -0.3, "rollin")
        .from(letters, 4.2, {opacity:0, ease: "Power2.easeOut"}, "rollin+=2")
        .from(wheels, 4.2, {opacity:1, ease: "Power2.easeOut"}, "rollin+=2");



    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});