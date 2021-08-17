$(document).ready(function () {
    $("#back").mouseover(function () {
        $("#back").css({ "transform": "matrix(1.1, 0, 1.1, 1, 720, 0)", "-webkit-transform": "matrix(1.1, 0, 0, 1.1, 720, 0)", "transition-duration": "0.9s" });
    });
    $("#back").mouseout(function () {
        $("#back").css({ "transform": "matrix(1, 0, 0, 1, 720, 0)", "-webkit-transform": "matrix(1, 0, 0, 1, 720, 0)", "transition-duration": "0.7s" });
    });



    $("#next").mouseover(function () {
        $("#next").css({ "transform": "matrix(1.1, 0, 1.1, 1, 720, 0)", "-webkit-transform": "matrix(1.1, 0, 0, 1.1, 720, 0)", "transition-duration": "0.9s" });
    });
    $("#next").mouseout(function () {
        $("#next").css({ "transform": "matrix(1, 0, 0, 1, 720, 0)", "-webkit-transform": "matrix(1, 0, 0, 1, 720, 0)", "transition-duration": "0.7s" });
    });



    $("#logo").mouseover(function () {
        $("#logo").css({ "transform": "matrix(1.1, 0, 0, 1.1, 0, -50)", "-webkit-transform": "matrix(1.1, 0, 0, 1.1, 0, -50)", "transition-duration": "0.9s" });
    });
    $("#logo").mouseout(function () {
        $("#logo").css({ "transform": "matrix(1, 0, 0, 1, 0, -50)", "-webkit-transform": "matrix(1, 0, 0, 1, 0, -50)", "transition-duration": "0.7s" });
    });
});