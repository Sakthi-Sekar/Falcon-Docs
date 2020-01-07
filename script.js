
/*--To read the json file--*/
$(function () {
    $.getJSON('JsonFiles/content.json', function (data) {
        var template = $("#my_template").html();
        var text = Mustache.render(template, data);
        $("#my_panel").html(text);

        var title_template = $("#title").html();
        var header = Mustache.render(title_template, data);
        $("#my_title").html(header);

    });

});
























