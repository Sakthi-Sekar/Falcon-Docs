
        /*--Tab creation according to the size--*/
        function openTab(evt, docData) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(docData).style.display = "block";
            evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it





        /*--To read the json file--*/
        $(function () {
            $.getJSON('content.json', function (data) {
                var template = $("#my_template").html();
                var text = Mustache.render(template, data);
                $("#my_panel").html(text);
            });
        });
  



        /*--To load text in accordance with the tabs--*/
        async function loadText(path, parameterID) {
            text = await fetch(path);
            document.getElementById(parameterID).innerText = await text.text();
        }
        document.getElementById("defaultOpen").click();
   














