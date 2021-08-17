$(document).ready(function () {
    $("#EN").mouseover(function () {
        $("#EN").css({ "transform": "scale(1.1, 1.1)", "transition-duration": "0.9s" });
    });
    $("#EN").mouseout(function () {
        $("#EN").css({ "transform": "none", "transition-duration": "0.7s" });
    });

    $("#logo").mouseover(function () {
        $("#logo").css({ "transform": "matrix(1.1, 0, 0, 1.1, 0, 0)", "-webkit-transform": "matrix(1.1, 0, 0, 1.1, 0, 0)", "transition-duration": "0.9s" });
    });
    $("#logo").mouseout(function () {
        $("#logo").css({ "transform": "matrix(1, 0, 0, 1, 0, 0)", "-webkit-transform": "matrix(1, 0, 0, 1, 0, 0)", "transition-duration": "0.7s" });
    });
});