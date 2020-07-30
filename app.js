// Toute l'application JS développée se retrouve à
// l'intérieur d'un objet
var app = {};

// Tout le code de notre application
// est encapsulé dans une IIFE pour des raisons de sécurité
(function($){

    "use strict";

    // Predefined variables
    var $document = $(document),
    $body = $("body");

    // Le code est organisé en méthodes objet
    app.afficherText = function() {
        $("#bouton").click(function() {

            $.ajax({
                url:"info.txt",
                dataType: "text",
                success : (data) => {
                    $("#demo").html(data);
                    // Equivalent en JS natif
                    //document.getElementById("demo").innerHTML = data;
                }
                // success : function(code_html, statut){ // code_html contient le HTML renvoyé
           
                // }
            });

        });
    };

    app.faireDisparaitreLeText = function(){
        $("#bouton2").click(function() {
            $("#demo").html("");
        });
    };

    // Tant que la page n'est pas entièrrement chargée
    // Je ne charge pas mes méthodes objet
    $document.ready(function(){
        app.afficherText();
        app.faireDisparaitreLeText();
    });

})(jQuery);