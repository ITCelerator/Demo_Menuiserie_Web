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

function bulleDimension(height, width){
  div = document.getElementById("DimensionsImg");
  div.style.height = height + "px";
  div.style.width =  width + "px";
}

function bulleGamme(height, width){
  div = document.getElementById("GammesImg");
  div.style.height = height + "px";
  div.style.width =  width + "px";
}

function bulleMateriau(height, width){
div = document.getElementById("MateriauImg");
div.style.height = height + "px";
div.style.width =  width + "px";
}

function bulleCouleur(height, width){
  div = document.getElementById("CouleurImg");
  div.style.height = height + "px";
  div.style.width =  width + "px";
}
  
function bulleSituation(height, width){
  div = document.getElementById("SituationImg");
  div.style.height = height + "px";
  div.style.width =  width + "px";
}
  
function bulleRecap(height, width){
  div = document.getElementById("RecapImg");
  div.style.height = height + "px";
  div.style.width =  width + "px";
}


function Dimensions() {
  // alert("Vous avez cliqué sur dimensions !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxDimensions");
  if (div.style.display === "none") {
    div.style.display = "block";
    div = document.getElementById("DimensionsImg");
    div.style.border = "2px solid #D4AF37";
    bulleDimension(55, 55)
    bulleGamme(50, 50)
    bulleMateriau(50, 50)
    bulleCouleur(50, 50)
    bulleSituation(50, 50)
    bulleRecap(50, 50)
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

  desafficherPhoto()
}

function Gammes() {
 // alert("Vous avez cliqué sur gammes !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxGammes");
  if (div.style.display === "none") {
    div.style.display = "block";
    div = document.getElementById("GammesImg");
    div.style.border = "2px solid #D4AF37";
    bulleDimension(50, 50)
    bulleGamme(55, 55)
    bulleMateriau(50, 50)
    bulleCouleur(50, 50)
    bulleSituation(50, 50)
    bulleRecap(50, 50)
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

  desafficherPhoto()
}

function Materiaux() {
  // alert("Vous avez cliqué sur matériaux !");
  var div = document.getElementById("boxMateriaux");
  if (div.style.display === "none") {
    div.style.display = "block";
    div = document.getElementById("MateriauImg");
    div.style.border = "2px solid #D4AF37";
    bulleDimension(50, 50)
    bulleGamme(50, 50)
    bulleMateriau(55, 55)
    bulleCouleur(50, 50)
    bulleSituation(50, 50)
    bulleRecap(50, 50)
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

  desafficherPhoto()
}

function Couleurs() {
  // alert("Vous avez cliqué sur couleurs !");
  var div = document.getElementById("boxCouleurs");
  if (div.style.display === "none") {
    div.style.display = "block";
    div = document.getElementById("CouleurImg");
    div.style.border = "2px solid #D4AF37";
    bulleDimension(50, 50)
    bulleGamme(50, 50)
    bulleMateriau(50, 50)
    bulleCouleur(55, 55)
    bulleSituation(50, 50)
    bulleRecap(50, 50)
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

  desafficherPhoto()
}

function MiseEnSituation() {
  // alert("Vous avez cliqué sur mise en situation !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxSituation");
  if (div.style.display === "none") {
    div.style.display = "block";
    div = document.getElementById("SituationImg");
    div.style.border = "2px solid #D4AF37";
    bulleDimension(50, 50)
    bulleGamme(50, 50)
    bulleMateriau(50, 50)
    bulleCouleur(50, 50)
    bulleSituation(55, 55)
    bulleRecap(50, 50)
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

  desafficherPhoto()
}

function Recapitulatif() {
  // alert("Vous avez cliqué sur récapitulatif !")
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxRecap");
  if (div.style.display === "none") {
    div.style.display = "block";
    div = document.getElementById("RecapImg");
    div.style.border = "2px solid #D4AF37";
    bulleDimension(50, 50)
    bulleGamme(50, 50)
    bulleMateriau(50, 50)
    bulleCouleur(50, 50)
    bulleSituation(50, 50)
    bulleRecap(55, 55)
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

  desafficherPhoto()
}

// Cette fonction gère le changement de matériau
function Choix_Mat(mat) {
  const couleurDiv_PVC = document.getElementById("CouleurPVC");
  const couleurDiv_Bois = document.getElementById("CouleurBois");
  const couleurDiv_Alu = document.getElementById("CouleurAlu");
  couleurDiv_Alu.style.display = "none";
  couleurDiv_Bois.style.display = "none";
  couleurDiv_PVC.style.display = "none";

  switch (mat) {
    case "pvc":
      couleurDiv_PVC.style.display = "block";
      recapManager.updateMat("PVC", "../Images/pvc_blanc.png");
      break;

    case "bois":
      couleurDiv_Bois.style.display = "block";
      recapManager.updateMat("Bois", "../Images/wood05_col_256.jpg");
      break;

    case "alu":
      couleurDiv_Alu.style.display = "block";
      recapManager.updateMat("Aluminium", "../Images/texture_alu.jpg");
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

