$("#tabs").on("click", ".tab", function () {
    $("#tabs .tab").removeClass("active");
    $(this).addClass("active");
});

$("#tabs-2").on("click", ".tab-2", function () {
    $("#tabs-2 .tab-2").removeClass("active");
    $(this).addClass("active");
});

$("#tabs-3").on("click", ".tab-3", function () {
    $("#tabs-3 .tab-3").removeClass("active-img");
    $(this).addClass("active-img");
});
