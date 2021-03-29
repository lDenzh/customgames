$(() => {

    const inputliste = "<table class=\"table \">\n" +
        "               <tr><th style='color: white'>Participants</th></tr>\n" +
        "                <tr><td><input type=\"text\" id='p1' class='form-control' placeholder=\"Player 1\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p2' class='form-control' placeholder=\"Player 2\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p3' class='form-control' placeholder=\"Player 3\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p4' class='form-control' placeholder=\"Player 4\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p5' class='form-control' placeholder=\"Player 5\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p6' class='form-control' placeholder=\"Player 6\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p7' class='form-control' placeholder=\"Player 7\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p8' class='form-control' placeholder=\"Player 8\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p9' class='form-control' placeholder=\"Player 9\"></td></tr>\n" +
        "                <tr><td><input type=\"text\" id='p10' class='form-control' placeholder=\"Player 10\"></td></tr>\n" +
        "            </table>"


    $("#knapp").click(() => {
        $("#hidden").html(inputliste);
        $("#knapp").hide();
        $("#teams").show();
    });

    //Her skal jeg putte deltagerne i en liste, for så og printe ut to lister, en på hver side, med deltagerne
    $("#teams").click(() => {

        $("#team1").css('background-color', 'rgba(0,255,255, .60)');
        $("#team1").show();

        $("#team2").css("background-color", "rgba(255,0,0, .60)");
        $("#team2").show();

        const spillere = [$("#p1").val(), $("#p2").val(), $("#p3").val(), $("#p4").val(), $("#p5").val(), $("#p6").val(), $("#p7").val(), $("#p8").val(), $("#p9").val(), $("#p10").val()];
        console.log(spillere);

        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        shuffle(spillere);

        let i;
        let ut = "";
        for(i=0; i < 5; i++) {
           ut += "<li><p>"+spillere[i]+"</p></li> </br>";
        }
        $("#team1").html("<h1>Team 1</h1></br><ul>"+ut+"</ul>");

        let k;
        let ut2 = "";
        for(k=5; k < spillere.length; k++) {
            ut2 += "<li><p>"+spillere[k]+"</p></li> </br>";
        }
        $("#team2").html("<h1>Team 2</h1></br><ul>"+ut2+"</ul>");
    });
});