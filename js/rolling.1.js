$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $("#trans g");
    var resL = $("#res g");
    var dWidth = $(document).width();
    var dCenter = 0.375 * dWidth;
    var star = $(".star")
    var tl = new TimelineMax();

    var resRoll = TweenMax.staggerFromTo(resL, 2.8, { x: dCenter, opacity: 1, ease: false, immediateRender: false }, { x: -dWidth, opacity: 0 }, -0.35, "rollin");
    var transRoll = TweenMax.staggerFromTo(transL, 2.8, { x: dCenter, opacity: 1, ease: false, immediateRender: false }, { x: -dWidth, opacity: 0 }, -0.2, "rollin");
    var rimRoll = TweenMax.to(star, 5.6, { rotation: -1800, transformOrigin: "50% 50%", immediateRender: false }, "rollin");

    tl.addLabel("rollin", 0);
    tl.add(resRoll);
    tl.add(transRoll);
    tl.add(rimRoll);

    tl.reverse(0);

    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});