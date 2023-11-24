// document.addEventListener("DOMContentLoaded", function () {
//     var materiaux = document.getElementById("#Materiaux");
//     var Bois = document.getElementById("#CouleurBois");
//     var Alu = document.getElementById("#CouleurAlu");
//     var PVC = document.getElementById("#CouleurPVC");
//     $("#Couleurs").click(function(){

//     });

// });

//fonctions pour gérer l'affichage des boxs selon la box choisie

function Dimensions() {
  // alert("Vous avez cliqué sur dimensions !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxDimensions");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var div = document.getElementById("boxGammes");
  div.style.display = "none";

  var div = document.getElementById("boxMateriaux");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";
}

function Gammes() {
  // alert("Vous avez cliqué sur gammes !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxGammes");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var div = document.getElementById("boxDimensions");
  div.style.display = "none";

  var div = document.getElementById("boxMateriaux");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";
}

function Materiaux() {
  // alert("Vous avez cliqué sur matériaux !");
  var div = document.getElementById("boxMateriaux");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var div = document.getElementById("boxGammes");
  div.style.display = "none";

  var div = document.getElementById("boxDimensions");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";
}

function Couleurs() {
  // alert("Vous avez cliqué sur couleurs !");
  var div = document.getElementById("boxCouleurs");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var div = document.getElementById("boxDimensions");
  div.style.display = "none";

  var div = document.getElementById("boxMateriaux");
  div.style.display = "none";

  var div = document.getElementById("boxGammes");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";
}

function MiseEnSituation() {
  alert("Vous avez cliqué sur mise en situation !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
}

function Recapitulatif() {
  alert("Vous avez cliqué sur récapitulatif !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
}

//fonction qui permet d'afficher la bonne box de couleur selon le matériau choisi
function Choix_Mat(mat) {
  const recapContainer = document.getElementById("recapMateriauContainer");
  const recapDiv = document.getElementById("recapMateriau");
  const recapIcon = document.querySelector("#recapMateriauIcon img");
  const couleurDiv_PVC = document.getElementById("CouleurPVC");
  const couleurDiv_Bois = document.getElementById("CouleurBois");
  const couleurDiv_Alu = document.getElementById("CouleurAlu");
  couleurDiv_Alu.style.display = "none";
  couleurDiv_Bois.style.display = "none";
  couleurDiv_PVC.style.display = "none";
  recapContainer.style.display = "flex";

  switch (mat) {
    case "pvc":
      couleurDiv_PVC.style.display = "block";
      recapDiv.textContent = "PVC";
      recapIcon.src = "../Images/pvc_blanc.png";
      break;

    case "bois":
      couleurDiv_Bois.style.display = "block";
      recapDiv.textContent = "Bois";
      recapIcon.src = "../Images/wood05_col_256.jpg";
      break;

    case "alu":
      couleurDiv_Alu.style.display = "block";
      recapDiv.textContent = "Aluminium";
      recapIcon.src = "../Images/texture_alu.jpg";
      break;
  }
}

function Choix_Couleur(couleur) {
  switch (couleur) {
  }
}

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
