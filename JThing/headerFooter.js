let flag = 0;
$(document).ready(function () {
    $('.top-content').hide();
    $("#switch").click(function () {
        if (flag == 0) {
            $('.top-content').slideDown(1000);
            $('#switch').css({ "transform": "matrix(-1, 0, 0, -1, 0, 0)", "-webkit-transform": "matrix(-1, 0, 0, -1, 0, 0)", "transition-duration": "1s" });
            flag = 1;
        }
        else {
            $('.top-content').slideUp(1000);
            $('#switch').css({ "transform": "matrix(1, 0, 0, 1, 0, 0)", "-webkit-transform": "matrix(1, 0, 0, 1, 0, 0)", "transition-duration": "1s" });
            flag = 0;
        }
    });
});