$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = [$("#t1O"),  $("#t2R"), $("#tP"), $("#t2T"), $("#tS"), $("#t2A"), $("#t1N"), $("#t3T"), $("#t1A"), $("#tI"), $("#t1R"), $("#t2O"), $("#t1T"), $("#t2N")];     
    var resL = [$("#rL"), $("#rO"), $("#rU"), $("#rS"), $("#rT"), $("#r1E"), $("#r2E"), $("#rR")];
    var dWidth = $(document).width();
    var offscreen = 2 * dWidth;
    var star = $(".star");
    var transW = [$("#wT1O"),  $("#wT2R"), $("#wTP"), $("#wT2T"), $("#wTS"), $("#wT2A"), $("#wT1N"), $("#wT3T"), $("#wT1A"), $("#wTI"), $("#wT1R"), $("#wT2O"), $("#wT1T"), $("#wT2N")];     
    var resW = [$("#wRL"), $("#wRO"), $("#wRU"), $("#wRS"), $("#wRT"), $("#wR1E"), $("#wR2E"), $("#wRR")];
    var letters = $([resL, transL]);
    var wheels = $([resW, transW]);
    var all = $([resL, resW, transL, transW]);
    var tl = new TimelineMax();

console.log(resL);
console.log(wheels);
console.log(dWidth);

    tl.staggerFrom(resL, 2.5, { cycle:{x:[ -offscreen, offscreen], rotation:[ -2000, 2000]},transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.3, "rollin")
        .staggerFrom(transL, 2.5, { x: -offscreen, rotation: -2000, transformOrigin: "50% 50%", ease: "Power0.easeOut" }, -0.15, "rollin")
        .staggerFrom(resW, 2.5, { cycle:{x:[ -offscreen, offscreen], rotation:[ -2000, 2000]}, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.3, "rollin")
        .staggerFrom(transW, 2.5, { x: -offscreen, rotation: -2000, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.15, "rollin")
        .staggerFrom(resL, 0.3, {opacity:0, ease: "Power0.easeOut"}, 0.3, "rollin+=2.2")
        .staggerFrom(resW, 0.3, {opacity:1, ease: "Power0.easeOut"}, 0.3, "rollin+=2.2")
        .staggerFrom(transL, 0.3, {opacity:0, ease: "Power0.easeOut"}, -0.1, "rollin+=2.2")
        .staggerFrom(transW, 0.3, {opacity:1, ease: "Power0.easeOut"}, 0.1, "rollin+=2.2");
tl.timeScale(1);


    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});