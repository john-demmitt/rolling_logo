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

console.log(letters);
console.log(wheels);
console.log(dWidth);

    tl.staggerFrom(resL, 2.5, { cycle:{x:[ -offscreen, offscreen], rotation:[ -2000, 2000]},transformOrigin: "50% 50%", ease: "Power0.easeOut"}, -0.3, "rollin")
        .staggerFrom(transL, 2.5, { x: -offscreen, rotation: -2000, transformOrigin: "50% 50%", ease: "Power0.easeOut" }, -0.15, "rollin")
        .staggerFrom(resW, 2.5, { cycle:{x:[ -offscreen, offscreen], rotation:[ -2000, 2000]}, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.3, "rollin")
        .staggerFrom(transW, 2.5, { x: -offscreen, rotation: -2000, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.15, "rollin")
        .staggerFrom(resL, 0.2, {opacity:0, ease: "Power0.easeOut"}, -0.3, "rollin+=2.3")
        .staggerFrom(resW, 0.2, {opacity:1, ease: "Power0.easeOut"}, 0.3, "rollin+=2.3")
        .staggerFrom(transL, 0.2, {opacity:0, ease: "Power0.easeOut"}, -0.1, "rollin+=2.3")
        .staggerFrom(transW, 0.2, {opacity:1, ease: "Power0.easeOut"}, 0.1, "rollin+=2.3");
tl.timeScale(0.5);


    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});