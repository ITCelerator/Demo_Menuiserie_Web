var dimensionsValide;
var gammeValide;
var poseValide;
var materiauValide;
var couleurValide;

// Fonction pour obtenir la couleur localisée
function getLocalizedColor(couleurFr, userLang) {
  // Traduction des couleurs
  const translations = {
    'Blanc': 'White',
    'Bordeaux': 'Burgundy',
    'Noir': 'Black',
    'Bleu': 'Blue',
    'Vert': 'Green',
    'Chêne Naturel': 'Natural Oak',
    'Noyer Foncé': 'Dark Walnut',
    'Merisier Foncé': 'Dark Cherry',
    'Gris 7035': 'Gray 7035',
    'Gris 7016': 'Gray 7016',
    'Noir 9005': 'Black 9005',
    'Bleu 5012': 'Blue 5012',
    'Bleu 5002': 'Blue 5002',
    'Vert Foncé': 'Dark Green',
    'Vert 6005': 'Green 6005',
    'Orange': 'Orange',
    'Jaune 1018': 'Yellow 1018',
    'Inox' : 'stainless steel',
    'Laiton' : 'Brass'
  };

  // Retourner la traduction si la langue est 'en', sinon retourner la couleur originale
  if (userLang === 'en') {
    return translations[couleurFr] || couleurFr;
  } else {
    return couleurFr;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const finitions = document.querySelectorAll(".finition");
  finitions.forEach((finition) => {
    finition.addEventListener("click", () => {
      const couleur = getLocalizedColor(finition.getAttribute("couleur"), userLang);
      recapManager.updateFinition(couleur, finition.src);
    });
  });

  const quincailleries = document.querySelectorAll(".quincaillerie");
  quincailleries.forEach((quincaillerie) => {
    quincaillerie.addEventListener("click", () => {
      const couleur = getLocalizedColor(quincaillerie.getAttribute("couleur"), userLang);
      recapManager.updateQuincaillerie(couleur, quincaillerie.src);
    });
  });

  Dimensions();
  Dimensions();
  document.getElementById("numDimensions").classList.add("selected");
  document.getElementById("MatAlu").classList.add("matSelected");
  document.getElementById("Bleu5012").classList.add("matSelected");
  document.getElementById("LaitonAlu").classList.add("matSelected");
});

function alertMat(event) {
  const couleurDiv_PVC = document.getElementById("CouleurPVC");
  const couleurDiv_Bois = document.getElementById("CouleurBois");
  const couleurDiv_Alu = document.getElementById("CouleurAlu");
  couleurDiv_Alu.style.display = "none";
  couleurDiv_Bois.style.display = "none";
  couleurDiv_PVC.style.display = "none";

  if (event.target == document.getElementById("AlertPvc")) {
    document.getElementById("MatPvc").classList.add("matSelected");
    document.getElementById("MatAlu").classList.remove("matSelected");
    document.getElementById("MatBois").classList.remove("matSelected");
    couleurDiv_PVC.style.display = "block";
    document.getElementById("Bleu").classList.add("matSelected");
    document.getElementById("LaitonPvc").classList.add("matSelected");
    //visibility button
    document.getElementById("AlertPvc").style.display = "none";
    document.getElementById("AlertAlu").style.display = "none";
    document.getElementById("AlertLargeurBois").style.display = "none";
    document.getElementById("AlertLargeurAlu").style.display = "none";
    recapManager.updateMat("PVC", "./Images/pvc_blanc.png")
    recapManager.updateFinition("Bleu", "./Images/pvc_bleu.png");
    recapManager.updateQuincaillerie("Laiton", "./Images/laiton.jpg");
  } else if (event.target == document.getElementById("AlertAlu")) {
    document.getElementById("MatAlu").classList.add("matSelected");
    document.getElementById("MatBois").classList.remove("matSelected");
    document.getElementById("MatPvc").classList.remove("matSelected");
    couleurDiv_Alu.style.display = "block";
    document.getElementById("Bleu5012").classList.add("matSelected");
    document.getElementById("LaitonAlu").classList.add("matSelected");
    //visibility button
    document.getElementById("AlertAlu").style.display = "none";
    document.getElementById("AlertPvc").style.display = "none";
    document.getElementById("AlertLargeurBois").style.display = "none";
    document.getElementById("AlertLargeurAlu").style.display = "none";
    recapManager.updateMat("ALU", "./Images/alu_blanc.jpg")
    recapManager.updateFinition("Bleu 5012", "./Images/alu_bleu_clair.png");
    recapManager.updateQuincaillerie("Laiton", "./Images/laiton.jpg");
  }
}

function Choix_Gamme(gamme, label) {
  recapManager.updateDormant(label);
  setConfig("fDormant", gamme);
}

function Choix_TypePose(type, label) {
  recapManager.updatePose(label);
  setConfig("fPose_depose", type);
}

// Cette fonction gère le changement de matériau
function Choix_Mat(mat, event) {
  const couleurDiv_PVC = document.getElementById("CouleurPVC");
  const couleurDiv_Bois = document.getElementById("CouleurBois");
  const couleurDiv_Alu = document.getElementById("CouleurAlu");
  couleurDiv_Alu.style.display = "none";
  couleurDiv_Bois.style.display = "none";
  couleurDiv_PVC.style.display = "none";

  switch (mat) {
    case "pvc":
      couleurDiv_PVC.style.display = "block";
      document.getElementById("Bleu").classList.add("matSelected");
      document.getElementById("LaitonPvc").classList.add("matSelected");

      if(userLang=="fr"){
        recapManager.updateMat("PVC", "./Images/pvc_blanc.png");
        recapManager.updateFinition("Bleu", "./Images/pvc_bleu.png");
        recapManager.updateQuincaillerie("Laiton", "./Images/laiton.jpg")
      }
      else{
        recapManager.updateMat("PVC", "./Images/pvc_blanc.png");
        recapManager.updateFinition("Blue", "./Images/pvc_bleu.png");
        recapManager.updateQuincaillerie("Brass", "./Images/laiton.jpg")
      }

      break;

    case "bois":
      couleurDiv_Bois.style.display = "block";
      document.getElementById("CheneNaturel").classList.add("matSelected");
      document.getElementById("PvcBois").classList.add("matSelected");
    
      if(userLang=="fr"){
        recapManager.updateMat("Bois", "./Images/wood05_col_256.jpg");
        recapManager.updateFinition("Chêne naturel", "./Images/wood05_col_256.jpg")
        recapManager.updateQuincaillerie("PVC", "./Images/pvc_blanc.png")
      }
      else{
        recapManager.updateMat("Wood", "./Images/wood05_col_256.jpg");
        recapManager.updateFinition("natural oak", "./Images/wood05_col_256.jpg")
        recapManager.updateQuincaillerie("PVC", "./Images/pvc_blanc.png")
      }
      break;

    case "alu":
      couleurDiv_Alu.style.display = "block";
      document.getElementById("Bleu5012").classList.add("matSelected");
      document.getElementById("LaitonAlu").classList.add("matSelected");

      if(userLang=="fr"){
        recapManager.updateMat("Aluminium", "./Images/texture_alu.jpg");
        recapManager.updateFinition("Bleu 5012", "./Images/alu_bleu_clair.png")
        recapManager.updateQuincaillerie("Laiton", "./Images/laiton.jpg")
      }
      else{
        recapManager.updateMat("Aluminum", "./Images/texture_alu.jpg");
        recapManager.updateFinition("Blue 5012", "./Images/alu_bleu_clair.png")
        recapManager.updateQuincaillerie("Brass", "./Images/laiton.jpg")

      }
      break;
  }
  changeBorderMat(event);
}

tabPoignee = [];
tabPoignee.push(document.getElementById("LaitonPvc"));
tabPoignee.push(document.getElementById("InoxPvc"));
tabPoignee.push(document.getElementById("PvcPvc"));
tabPoignee.push(document.getElementById("LaitonBois"));
tabPoignee.push(document.getElementById("InoxBois"));
tabPoignee.push(document.getElementById("PvcBois"));
tabPoignee.push(document.getElementById("LaitonAlu"));
tabPoignee.push(document.getElementById("InoxAlu"));
tabPoignee.push(document.getElementById("PvcAlu"));

function changeBorderPoignee(event) {
  var found = false;
  const target = event.target;

  for (var i = 0; i < tabPoignee.length; i++) {
    var elem = tabPoignee[i];
    elem.classList.remove("matSelected");

    if (found == false) {
      if (target == tabPoignee[i]) {
        target.classList.add("matSelected");
        found = true;
      }
    }
  }
}

tabMat = [];
tabMat.push(document.getElementById("MatPvc"));
tabMat.push(document.getElementById("MatBois"));
tabMat.push(document.getElementById("MatAlu"));

function changeBorderMat(event) {
  var found = false;
  const target = event.target;

  for (var i = 0; i < tabMat.length; i++) {
    var elem = tabMat[i];
    elem.classList.remove("matSelected");

    if (found == false) {
      if (target == tabMat[i]) {
        target.classList.add("matSelected");
        found = true;
      }
    }
  }
}

var tabColor = [];

tabColor.push(document.getElementById("Blanc"));
tabColor.push(document.getElementById("Bordeaux"));
tabColor.push(document.getElementById("Noir"));
tabColor.push(document.getElementById("Bleu"));
tabColor.push(document.getElementById("Vert"));
tabColor.push(document.getElementById("CheneNaturel"));
tabColor.push(document.getElementById("NoyerFonce"));
tabColor.push(document.getElementById("MerisierFonce"));
tabColor.push(document.getElementById("Vert6018"));
tabColor.push(document.getElementById("Bleu5010"));
tabColor.push(document.getElementById("Orange2004"));
tabColor.push(document.getElementById("Gris7035"));
tabColor.push(document.getElementById("Gris7016"));
tabColor.push(document.getElementById("Noir9005"));
tabColor.push(document.getElementById("Bleu5012"));
tabColor.push(document.getElementById("Bleu5002"));
tabColor.push(document.getElementById("VertFonceAlu"));
tabColor.push(document.getElementById("Vert6005"));
tabColor.push(document.getElementById("OrangeAlu"));
tabColor.push(document.getElementById("Jaune1018"));

function changeBorderColor(event) {
  var found = false;
  const target = event.target;

  for (var i = 0; i < tabColor.length; i++) {
    var elem = tabColor[i];
    elem.classList.remove("matSelected");

    if (found == false) {
      if (target == tabColor[i]) {
        target.classList.add("matSelected");
        found = true;
      }
    }
  }
}

var tabArianne = [];
// Récupération des éléments par leur ID et ajout au bulleArianne
tabArianne.push(document.getElementById("numDimensions"));
tabArianne.push(document.getElementById("numGammes"));
tabArianne.push(document.getElementById("numMateriaux"));
tabArianne.push(document.getElementById("numCouleurs"));
tabArianne.push(document.getElementById("numSituation"));
tabArianne.push(document.getElementById("numRecapitulatif"));

function ChangerArianne(event) {
  var found = false;
  const target = event.target;

  for (var i = 0; i < tabArianne.length; i++) {
    var elem = tabArianne[i];
    elem.classList.remove("selected", "past");

    if (found == false) {
      if (target == tabArianne[i]) {
        target.classList.add("selected");
        found = true;
      } else {
        elem.classList.add("past");
        console.log("DANS LE ELSE");
      }
    }
  }

  if (target == tabArianne[0]) {
    Dimensions();
  } else if (target == tabArianne[1]) {
    Gammes();
  } else if (target == tabArianne[2]) {
    Materiaux();
  } else if (target == tabArianne[3]) {
    Couleurs();
  } else if (target == tabArianne[4]) {
    MiseEnSituation();
  } else if (target == tabArianne[5]) {
    Recapitulatif();
  }
}

function bulleDimension() {}

function Dimensions() {
  // Vous pouvez ajouter d'autres actions à exécuter ici
  var div = document.getElementById("boxDimensions");
  if (div.style.display === "none") {
    div.style.display = "block";
    bulleDimension();
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
  if(userLang=="fr"){
    div.innerHTML = "Redimensionnez votre fenêtre !";
  }
  else if(userLang=="en"){
    div.innerHTML = "Custom your own window!";
  }


  desafficherPhoto();
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
  if(userLang=="fr"){
    div.innerHTML = "Choisissez votre gamme et votre type de pose !";
  }
  else if(userLang=="en"){
    div.innerHTML = "Profile style & installation type";
  }

  desafficherPhoto();
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

  if(userLang=="fr"){
    div.innerHTML = "Personnalisez votre fenêtre !";
  }
  else if(userLang=="en"){
    div.innerHTML = "Custom your own window!";
  }

  desafficherPhoto();
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
  if(userLang=="fr"){
    div.innerHTML = "Personnalisez votre fenêtre !";
  }
  else if(userLang=="en"){
    div.innerHTML = "Custom your own window!";
  }

  desafficherPhoto();
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
  if(userLang=="fr"){
    div.innerHTML = "Testez la mise en situation de votre fenêtre !";
  }
  else if(userLang=="en"){
    div.innerHTML = "Visualize your project!";
  }
  desafficherPhoto();
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
  if(userLang=="fr"){
    div.innerHTML = "Récapitulatif";
  }
  else if(userLang=="en"){
    div.innerHTML = "Summary";
  }
  desafficherPhoto();
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
    console.log(hauteur)
    if(userLang=="fr"){
      hauteurRecapDiv.textContent = hauteur + " mm";
    }
    else if(userLang=="en"){
      hauteurRecapDiv.textContent = hauteur + " in";
    }
  };

  // Largeur
  const largeurRecapDiv = document.getElementById("recapWidth");
  const updateLargeur = (largeur) => {
    console.log(largeur)
    if(userLang=="fr"){
      largeurRecapDiv.textContent = largeur + " mm";
    }
    else if(userLang=="en"){
      largeurRecapDiv.textContent = largeur + " in";
    }

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

const pageManager = (() => {
  const endPannelContainer = document.querySelector(".containerForm");
  const mainContent = document.getElementById("mainDiv");
  const endForm = document.getElementById("endForm");
  const endMessage = document.getElementById("endMessage");
  endPannelContainer.style.display = "none";
  endMessage.style.display = "none";
  var showingEndPannel = false;

  const toggle = () => {
    showingEndPannel = !showingEndPannel;
    endPannelContainer.style.display = showingEndPannel ? "flex" : "none";
    mainContent.style.display = showingEndPannel ? "none" : "grid";
  };

  const showMessage = () => {
    console.log("Show message");
    endForm.style.display = "none";
    endMessage.style.display = "block";
  };

  return {
    toggle,
    showMessage,
  };
})();

function desafficherPhoto() {
  document.getElementById("appliquerDimensions").checked = false;
  document.getElementById("checkbox").checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
  if(userLang=="fr"){
    recapManager.updateLargeur(1200);
    recapManager.updateHauteur(1600);
    recapManager.updateDormant("Économique");
    recapManager.updatePose("Rénovation");
    recapManager.updateFinition("Bleu 5012", "./Images/alu_bleu_clair.png");
    recapManager.updateMat("ALU", "./Images/alu_blanc.jpg");
    recapManager.updateQuincaillerie("Laiton", "./Images/laiton.jpg");
  }
  else{
    recapManager.updateLargeur(47.37);
    recapManager.updateHauteur(62.65);
    recapManager.updateDormant("Economic");
    recapManager.updatePose("Renovation");
    recapManager.updateFinition("Blue 5012", "./Images/alu_bleu_clair.png");
    recapManager.updateMat("ALU", "./Images/alu_blanc.jpg");
    recapManager.updateQuincaillerie("Brass", "./Images/laiton.jpg");
  }

});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("sliderLength");
  const customThumb = document.getElementById("custom-thumb");

  slider.addEventListener("input", function () {
    updateCustomThumbPosition();
  });

  // Met à jour la position du curseur personnalisé en fonction de la valeur du curseur de plage
  function updateCustomThumbPosition() {
    const percent =
      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    const thumbWidth = parseFloat(getComputedStyle(customThumb).width);
    const thumbPosition = (percent / 100) * (slider.offsetWidth - thumbWidth);
    customThumb.style.left = thumbPosition + "px";
  }

  // Met à jour la position initiale du curseur personnalisé
  updateCustomThumbPosition();
});

if (userLang=="fr"){
  document.getElementsById("dimensionEN").style.display = "none"
}
else{
  document.getElementsById("dimensionFR").style.display = "none"
}