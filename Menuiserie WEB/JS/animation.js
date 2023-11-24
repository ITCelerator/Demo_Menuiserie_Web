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
});

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

  var div = document.getElementById("boxRecap");
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

  var div = document.getElementById("boxRecap");
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

  var div = document.getElementById("boxRecap");
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

  var div = document.getElementById("boxRecap");
  div.style.display = "none";
}

function MiseEnSituation() {
  alert("Vous avez cliqué sur mise en situation !");
  // Vous pouvez ajouter d'autres actions à exécuter ici
}

function Recapitulatif() {
  // alert("Vous avez cliqué sur récapitulatif !")
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

  var div = document.getElementById("boxSituation");
  div.style.display = "none";

  var div = document.getElementById("boxCouleurs");
  div.style.display = "none";
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
