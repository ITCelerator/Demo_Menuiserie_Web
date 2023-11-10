document.addEventListener("DOMContentLoaded", function () {
    var materiaux = document.getElementById("#Materiaux");
    var Bois = document.getElementById("#CouleurBois");	
    var Alu = document.getElementById("#CouleurAlu");	
    var PVC = document.getElementById("#CouleurPVC");	
    $("#Couleurs").click(function(){ 
        

    });




});





//NE FONCTIONNE PAS
/*
document.addEventListener("DOMContentLoaded", function () {
    $("#Dimensions").click(function(){ 
        var element1 = document.getElementById('Dimensions');
        var element2 = document.getElementById('boxMateriaux');
        var ligne = document.querySelector('.line');

        // Obtenir les positions des éléments
        var posElement1 = element1.getBoundingClientRect();
        var posElement2 = element2.getBoundingClientRect();

        var posIntermediaire1 = {
            top: posElement1.top + posElement1.height,
            left: posElement1.left + posElement1.width / 2
        };

        var posIntermediaire2 = {
            top: posElement1.top + posElement1.height,
            left: posElement2.left + posElement2.width / 2
        };

        var posIntermediaire3 = {
            top: posElement2.top + posElement2.height,
            left: posElement2.left + posElement2.width / 2
        };

        // Définir la position et la longueur de la ligne
        ligne.style.top = posIntermediaire1.top + 'px';
        ligne.style.left = posIntermediaire1.left + 'px';
        ligne.style.width = '2px';
        ligne.style.height = '0';


         // Déclencher la première partie de l'animation
         setTimeout(function () {
            // Ajouter une classe pour l'animation
            ligne.classList.add('animate-line');

            // Mettre à jour la position et la hauteur de la ligne
            ligne.style.top = posIntermediaire2.top + 'px';
            ligne.style.left = posIntermediaire2.left + 'px';
            ligne.style.height = posIntermediaire3.top - posIntermediaire2.top + 'px';
        }, 50);

        // Réinitialiser la classe après l'animation pour permettre la répétition
        setTimeout(function () {
            ligne.classList.remove('animate-line');
        }, 1000); // ajuster selon la durée de l'animation
    })
});
*/
