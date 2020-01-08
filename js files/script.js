/*--To read first webpage--*/

$(function () {
    $.getJSON('JsonFiles/content.json', function (data) {
        var firstPageTemplate = $("#falcon_homepage").html();
        var firstPageText = Mustache.render(firstPageTemplate, data);
        $("#falcon-firstpage_panel").html(firstPageText);

    });

});
/*--To read the json file--*/
$(function () {
    $.getJSON('JsonFiles/content.json', function (value) {
        var template = $("#my_template").html();
        var text = Mustache.render(template, value);
        $("#my_panel").html(text);
       
        
    });

});