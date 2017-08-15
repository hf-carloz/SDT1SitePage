$(document).ready(function () {
    $(".project").addClass("hide");
    $("#project_content").removeClass("hide");
    $("#projects").removeClass("hide");


    $(".project_icons td > img").click(function () {
        $("#projects").addClass("hide");
        $("#JComFITS").removeClass("hide");
    });

    $("a[title='back']").click(function () {
        $(this).parent().addClass("hide");

    });
});