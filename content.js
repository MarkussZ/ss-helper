$("a > b").filter(function() {
    return $(this).text() === "Remonts" || $(this).text() === "Ремонт" || $(this).text() === "куплю" || $(this).text() === "pērku";
}).parent().parent().parent().remove();

$("a").filter(function() {
    return $(this).text() === "Remonts" || $(this).text() === "Ремонт" || $(this).text() === "куплю" || $(this).text() === "pērku";
}).parent().parent().remove();
//console.log($("a:contains('Remonts')").parent().parent().html());
//$("tr#tr_*").css("background-color", "red");