var dimensionsValide;
var gammeValide;
var poseValide;
var materiauValide;
var couleurValide;




document.addEventListener("DOMContentLoaded", function () {
  const finitions = document.querySelectorAll(".finition");
  finitions.forEach((finition) => {
    finition.addEventListener("click", () => {
      recapManager.updateFinition(
        finition.getAttribute("couleur"),
        finition.src
      );
    });
  });

  const quincailleries = document.querySelectorAll(".quincaillerie");
  quincailleries.forEach((quincaillerie) => {
    quincaillerie.addEventListener("click", () => {
      recapManager.updateQuincaillerie(
        quincaillerie.getAttribute("couleur"),
        quincaillerie.src
      );
    });
  });
  Dimensions();
  Dimensions();
});


//fonctions pour gérer l'affichage des boxs selon la box choisie
/*
function bulleDimension(height, width, borderpx, couleur, fontSize, fontColor, backgroundColor){
  div = document.getElementById("numDimensions");
  div.style.height = height + "px";
  div.style.width =  width + "px";
  div.style.border =  borderpx + "px solid "+ couleur;
  div.style.fontSize =  fontSize + "px";
  div.style.color =  fontColor;
  div.style.backgroundColor =  backgroundColor;

}

function bulleGamme(height, width, borderpx, couleur, fontSize, fontColor, backgroundColor){
  div = document.getElementById("numGammes");
  div.style.height = height + "px";
  div.style.width =  width + "px";
  div.style.border =  borderpx + "px solid "+ couleur;
  div.style.fontSize =  fontSize + "px";
  div.style.color =  fontColor;
  div.style.backgroundColor =  backgroundColor;
}

function bulleMateriau(height, width, borderpx, couleur, fontSize, fontColor, backgroundColor){
  div = document.getElementById("numMateriaux");
  div.style.height = height + "px";
  div.style.width =  width + "px";
  div.style.border =  borderpx + "px solid "+ couleur;
  div.style.fontSize =  fontSize + "px";
  div.style.color =  fontColor;
  div.style.backgroundColor =  backgroundColor;
}

function bulleCouleur(height, width, borderpx, couleur, fontSize, fontColor, backgroundColor){
  div = document.getElementById("numCouleurs");
  div.style.height = height + "px";
  div.style.width =  width + "px";
  div.style.border =  borderpx + "px solid "+ couleur;
  div.style.fontSize =  fontSize + "px";
  div.style.color =  fontColor;
  div.style.backgroundColor =  backgroundColor;
}
  
function bulleSituation(height, width, borderpx, couleur, fontSize, fontColor, backgroundColor){
  div = document.getElementById("numSituation");
  div.style.height = height + "px";
  div.style.width =  width + "px";
  div.style.border =  borderpx + "px solid "+ couleur;
  div.style.fontSize =  fontSize + "px";
  div.style.color =  fontColor;
  div.style.backgroundColor =  backgroundColor;
}
  
function bulleRecap(height, width, borderpx, couleur, fontSize, fontColor, backgroundColor){
  div = document.getElementById("numRecapitulatif");
  div.style.height = height + "px";
  div.style.width =  width + "px";
  div.style.border =  borderpx + "px solid "+ couleur;
  div.style.fontSize =  fontSize + "px";
  div.style.color =  fontColor;
  div.style.backgroundColor =  backgroundColor;
}
*/


var tableau = [];
// Récupération des éléments par leur ID et ajout au tableau
tableau.push(document.getElementById('numDimensions'));
tableau.push(document.getElementById('numGammes'));
tableau.push(document.getElementById('numMateriaux'));
tableau.push(document.getElementById('numCouleurs'));
tableau.push(document.getElementById('numSituation'));
tableau.push(document.getElementById('numRecapitulatif'));



function ChangerArianne(event){
  var found = false;
  const target = event.target;
  
  for (var i = 0; i < tableau.length; i++) {
    var elem = tableau[i];
    elem.classList.remove("selected", "past");

    if(found==false){
      if (target == tableau[i]) {
        target.classList.add("selected");
        found = true;
      }
      else{
        elem.classList.add("past");
        console.log("DANS LE ELSE")
      }
    }
  }


  if(target == tableau[0]){
    Dimensions();
  }
  else if(target == tableau[1]){
    Gammes();
  }
  else if(target == tableau[2]){
    Materiaux();
  }
  else if(target == tableau[3]){
    Couleurs();
  }
  else if(target == tableau[4]){
    MiseEnSituation();
  }
  else if(target == tableau[5]){
    Recapitulatif();
  }
}

function bulleDimension(){

}


function Dimensions() {
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxDimensions");
  if (div.style.display === "none") {
    div.style.display = "block";
    bulleDimension()

  } else {
    div.style.display = "none";
  }

  var div = document.getElementById("boxGammes");
  div.style.display = "none";

  var div = document.getElementById("viewer2");
  div.style.display = "none";

  var div = document.getElementById("boxMateriaux");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";

  var div = document.getElementById("boxRecap");
  div.style.display = "none";

  var div = document.getElementById("titre");
  div.innerHTML = "Redimensionnez votre fenêtre !"

  desafficherPhoto()
}

function Gammes() {
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxGammes");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var div = document.getElementById("boxDimensions");
  div.style.display = "none";

  var div = document.getElementById("viewer2");
  div.style.display = "none";

  var div = document.getElementById("boxMateriaux");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";

  var div = document.getElementById("boxRecap");
  div.style.display = "none";

  var div = document.getElementById("titre");
  div.innerHTML = "Choisissez votre gamme et votre type de pose !"
  
  desafficherPhoto()
}

function Materiaux() {
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

  var div = document.getElementById("viewer2");
  div.style.display = "block";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";

  var div = document.getElementById("boxRecap");
  div.style.display = "none";

  var div = document.getElementById("titre");
  div.innerHTML = "Personnalisez votre fenêtre !"

  desafficherPhoto()

}

function Couleurs() {
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

  var div = document.getElementById("viewer2");
  div.style.display = "block";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";

  var div = document.getElementById("boxRecap");
  div.style.display = "none";

  var div = document.getElementById("titre");
  div.innerHTML = "Personnalisez votre fenêtre !"

  desafficherPhoto()

}

function MiseEnSituation() {
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxSituation");
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

  var div = document.getElementById("viewer2");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("boxRecap");
  div.style.display = "none";

  var div = document.getElementById("titre");
  div.innerHTML = "Testez la mise en situation de votre fenêtre !"

  desafficherPhoto()
}

function Recapitulatif() {
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxRecap");
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

  var div = document.getElementById("viewer2");
  div.style.display = "none";

  var div = document.getElementById("boxSituation");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";

  var div = document.getElementById("titre");
  div.innerHTML = "Récapitulatif"

  desafficherPhoto()
}

// Cette fonction gère le changement de matériau
function Choix_Mat(mat) {
  const couleurDiv_PVC = document.getElementById("CouleurPVC");
  const couleurDiv_Bois = document.getElementById("CouleurBois");
  const couleurDiv_Alu = document.getElementById("CouleurAlu");
  const MatPvc = document.getElementById("MatPvc");
  const MatBois = document.getElementById("MatBois");
  const MatAlu = document.getElementById("MatAlu");
  couleurDiv_Alu.style.display = "none";
  couleurDiv_Bois.style.display = "none";
  couleurDiv_PVC.style.display = "none";

  switch (mat) {
    case "pvc":
      couleurDiv_PVC.style.display = "block";
      recapManager.updateMat("PVC", "../Images/pvc_blanc.png");
      MatPvc.style.border = "4px solid #A0445D"
      MatBois.style.border = "4px solid #FFFFFF"
      MatAlu.style.border = "4px solid #FFFFFF"
      break;

    case "bois":
      couleurDiv_Bois.style.display = "block";
      recapManager.updateMat("Bois", "../Images/wood05_col_256.jpg");
      MatPvc.style.border = "4px solid #FFFFFF"
      MatBois.style.border = "4px solid #A0445D"
      MatAlu.style.border = "4px solid #FFFFFF"
      break;

    case "alu":
      couleurDiv_Alu.style.display = "block";
      recapManager.updateMat("Aluminium", "../Images/texture_alu.jpg");
      MatPvc.style.border = "4px solid #FFFFFF"
      MatBois.style.border = "4px solid #FFFFFF"
      MatAlu.style.border = "4px solid #A0445D"
      break;
  }
}

// Module lié au récap des choix utilisateur. Toutes les méthodes et intéractions avec la partie récap se trouvent à l'intérieur.
const recapManager = (() => {
  // Matériau
  const matRecapDiv = document.getElementById("recapMateriau");
  const matRecapIcon = document.querySelector("#recapMateriauIcon img");
  const updateMat = (mat, image) => {
    matRecapDiv.textContent = mat;
    matRecapIcon.src = image;
  };

  // Finition
  const couleurRecapDiv = document.getElementById("recapFinition");
  const couleurRecapIcon = document.querySelector("#recapFinitionIcon img");
  const updateFinition = (finition, image) => {
    couleurRecapDiv.textContent = finition;
    couleurRecapIcon.src = image;
  };

  // Quincaillerie
  const quincaillerieRecapDiv = document.getElementById("recapQuincaillerie");
  const quincaillerieRecapIcon = document.querySelector(
    "#recapQuincaillerieIcon img"
  );
  const updateQuincaillerie = (finition, image) => {
    quincaillerieRecapDiv.textContent = finition;
    quincaillerieRecapIcon.src = image;
  };

  // Dormant
  const dormantRecapDiv = document.getElementById("recapDormant");
  const updateDormant = (dormant) => {
    dormantRecapDiv.textContent = dormant;
  };

  // Type de pose
  const poseRecapDiv = document.getElementById("recapPose");
  const updatePose = (pose) => {
    poseRecapDiv.textContent = pose;
  };

  // Dimensions
  // Hauteur
  const hauteurRecapDiv = document.getElementById("recapHeight");
  const updateHauteur = (hauteur) => {
    hauteurRecapDiv.textContent = hauteur + " mm";
  };

  // Largeur
  const largeurRecapDiv = document.getElementById("recapWidth");
  const updateLargeur = (largeur) => {
    largeurRecapDiv.textContent = largeur + " mm";
  };

  return {
    updateMat,
    updateFinition,
    updateQuincaillerie,
    updateDormant,
    updatePose,
    updateHauteur,
    updateLargeur,
  };
})();

function desafficherPhoto(){
  document.getElementById("appliquerDimensions").checked=false
  document.getElementById("checkbox").checked=false
}

document.addEventListener("DOMContentLoaded", function () {

  recapManager.updateDormant("Économique", )
  recapManager.updatePose("Rénovation")
  recapManager.updateLargeur(1200)
  recapManager.updateHauteur(1600)
  recapManager.updateMat("Bois", "../Images/wood05_col_256.jpg")
  recapManager.updateFinition("Chêne Naturel", "../Images/wood05_col_256.jpg")
  recapManager.updateQuincaillerie("PVC", "../Images/pvc_blanc.png")

});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('sliderLength');
  const customThumb = document.getElementById('custom-thumb');

  slider.addEventListener('input', function () {
    updateCustomThumbPosition();
  });

  // Met à jour la position du curseur personnalisé en fonction de la valeur du curseur de plage
  function updateCustomThumbPosition() {
    const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    const thumbWidth = parseFloat(getComputedStyle(customThumb).width);
    const thumbPosition = (percent / 100) * (slider.offsetWidth - thumbWidth);
    customThumb.style.left = thumbPosition + 'px';
  }

  // Met à jour la position initiale du curseur personnalisé
  updateCustomThumbPosition();
});
