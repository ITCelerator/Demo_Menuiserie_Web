var config;
var config2;

document.addEventListener("DOMContentLoaded", function () {
  config = new kbmax.ConfiguratorEmbed({
    kbmaxUrl: "https://itc-dev.kbmax.com",
    elementId: "viewer",
    configuratorId: 575,
    sceneId: 240,
    showHeader: false,
    showDrawer: false,
    showMove: false,
    bindToFormSelector: "#myFormHauteur",
    loadStyle: "none",
    parameters: { param1: "Particulier", Web: "oui", Camera: "Perspective" },
  });

  config2 = new kbmax.ConfiguratorEmbed({
    kbmaxUrl: "https://itc-dev.kbmax.com",
    elementId: "viewer2",
    configuratorId: 575,
    sceneId: 240,
    showHeader: false,
    showDrawer: false,
    showMove: false,
    bindToFormSelector: "",
    loadStyle: "none",
    parameters: { param1: "Particulier", Web: "oui", Camera: "Zoom" },
  });
});

function setConfig(fieldName, fieldValue) {
  let fields = {};
  fields[fieldName] = fieldValue;
  config.setFields(fields);
  if (
    fieldName != "fChoixCamera" &&
    fieldName != "fUpload" &&
    fieldName != "fREDIM" &&
    fieldName != "fChoixAppliqueDimensions"
  ) {
    config2.setFields(fields);
  }
}

function jEvents() {
  // Boutons de textures bois
  $("#CheneNaturel").click(function () {
    setConfig("fTable_Texture", "#ffd1a3");
  });
  $("#NoyerFonce").click(function () {
    setConfig("fTable_Texture", "#eecfb4");
  });
  $("#MerisierFonce").click(function () {
    setConfig("fTable_Texture", "#c56b55");
  });
  $("#Vert6018").click(function () {
    setConfig("fTable_Texture", "#316b44");
  });
  $("#Bleu5010").click(function () {
    setConfig("fTable_Texture", "#395878");
  });
  $("#Orange2004").click(function () {
    setConfig("fTable_Texture", "#f19e89");
  });
  // Boutons de textures aluminium
  $("#Gris7035").click(function () {
    setConfig("fTable_Texture", "#f7f5f6");
  });
  $("#Gris7016").click(function () {
    setConfig("fTable_Texture", "#9fa2a2");
  });
  $("#Noir9005").click(function () {
    setConfig("fTable_Texture", "#74747b");
  });
  $("#Bleu5012").click(function () {
    setConfig("fTable_Texture", "#71a1d2");
  });
  $("#Bleu5002").click(function () {
    setConfig("fTable_Texture", "#395878");
  });
  $("#VertFonceAlu").click(function () {
    setConfig("fTable_Texture", "#4ca56a");
  });
  $("#Vert6005").click(function () {
    setConfig("fTable_Texture", "#316b44");
  });
  $("#OrangeAlu").click(function () {
    setConfig("fTable_Texture", "#c56b55");
  });
  $("#Jaune1018").click(function () {
    setConfig("fTable_Texture", "#a77c40");
  });
  // Boutons de textures PVC
  $("#Blanc").click(function () {
    setConfig("fTable_Texture", "#ffffff");
  });
  $("#Bordeaux").click(function () {
    setConfig("fTable_Texture", "#5E2129");
  });
  $("#Noir").click(function () {
    setConfig("fTable_Texture", "#293133");
  });
  $("#Bleu").click(function () {
    setConfig("fTable_Texture", "#395878");
  });
  $("#Vert").click(function () {
    setConfig("fTable_Texture", "#316b44");
  });
  // Boutons de textures poignée
  $("#LaitonBois").click(function () {
    setConfig("fChoix_Mat_poignee", "Laiton");
  });
  $("#InoxBois").click(function () {
    setConfig("fChoix_Mat_poignee", "Inox");
  });
  $("#PvcBois").click(function () {
    setConfig("fChoix_Mat_poignee", "Pvc");
  });

  $("#LaitonAlu").click(function () {
    setConfig("fChoix_Mat_poignee", "Laiton");
  });
  $("#InoxAlu").click(function () {
    setConfig("fChoix_Mat_poignee", "Inox");
  });
  $("#PvcAlu").click(function () {
    setConfig("fChoix_Mat_poignee", "Pvc");
  });

  $("#LaitonPvc").click(function () {
    setConfig("fChoix_Mat_poignee", "Laiton");
  });
  $("#InoxPvc").click(function () {
    setConfig("fChoix_Mat_poignee", "Inox");
  });
  $("#PvcPvc").click(function () {
    setConfig("fChoix_Mat_poignee", "Pvc");
  });

  // Boutons des matériaux
  $("#MatPvc").click(function () {
    setConfig("fChoix_Mat", "PVC");
    setConfig("fTable_Texture", "#395878");
    setConfig("fChoix_Mat_poignee", "Laiton");
  });
  $("#MatBois").click(function () {
    setConfig("fChoix_Mat", "BOIS");
    setConfig("fTable_Texture", "#ffd1a3");
    setConfig("fChoix_Mat_poignee", "Pvc");
  });
  $("#MatAlu").click(function () {
    setConfig("fChoix_Mat", "ALU");
    setConfig("fTable_Texture", "#71a1d2");
    setConfig("fChoix_Mat_poignee", "Laiton");
  });
  //bouton d'alerte au dimensions
  $("#AlertAlu").click(function () {
    setConfig("fChoix_Mat", "ALU");
    setConfig("fTable_Texture", "#71a1d2");
    setConfig("fChoix_Mat_poignee", "Laiton");
  });
  $("#AlertPvc").click(function () {
    setConfig("fChoix_Mat", "PVC");
    setConfig("fTable_Texture", "#395878");
    setConfig("fChoix_Mat_poignee", "Laiton");
  });

  // Texte Dormant
  $("#economique").click(function () {
    setConfig("fDormant", "Eco");
  });
  $("#confort").click(function () {
    setConfig("fDormant", "Conf");
  });
  $("#luxe").click(function () {
    setConfig("fDormant", "Luxe");
  });

  // Texte Type de pose
  $("#renovation").click(function () {
    setConfig("fPose_depose", "R");
  });
  $("#totale").click(function () {
    setConfig("fPose_depose", "T");
  });
  $("#neuf").click(function () {
    setConfig("fPose_depose", "N");
  });

  // Texte Type de pose
  $("#oui").click(function () {
    setConfig("fAfficherPhoto", true);
  });
  $("#non").click(function () {
    setConfig("fAfficherPhoto", false);
  });

  //Mise en situation
  //bouton afficher photo
  $("#checkbox").click(function () {
    affichePhoto();
  });

  //bouton redimmensionner la fenêtre
  $("#appliquerDimensions").click(function () {
    redimFenetre();
  });

  //Choix de la photo
  $("#Maison1").click(function () {
    setConfig("fTexturePhoto", "Maison_1");
  });
  $("#Maison2").click(function () {
    setConfig("fTexturePhoto", "Maison_2");
  });
  $("#Maison3").click(function () {
    setConfig("fTexturePhoto", "Maison_3");
  });
  $("#Maison4").click(function () {
    setConfig("fTexturePhoto", "Maison_4");
  });

  //bouton appliquer les dimensions
  $("#appliqueDimensions").click(function () {
    setConfig("fChoixAppliqueDimensions", "Oui");
    setConfig("fREDIM", false);
    document.getElementById("appliquerDimensions").checked = false;
  });
}

function setInfoBulleTXT() {
  config.getFields((fields) => {
    //console.log(fields);
    //console.log("DESC DORMANT : ")
    //console.log(fields.fDormantDesc);
    var dormantDesc = fields.fDormantDesc;
    var div = document.getElementById("texteGammes1");
    div.textContent = dormantDesc;

    var poseDesc = fields.fPoseDesc;
    var div = document.getElementById("textePose1");
    div.textContent = poseDesc;
  });
}

//fonction pour afficher la photo
function affichePhoto() {
  if (document.getElementById("checkbox").checked) {
    setConfig("fAfficherPhoto", true);
    setConfig("fChoixCamera", "CameraPhoto"); //à changer pour un runaction
    var div = document.getElementById("part2");
    div.style.display = "block";
  } else {
    setConfig("fAfficherPhoto", false);
    setConfig("fChoixCamera", "CameraAccueil"); //à changer pour un runaction
    var div = document.getElementById("part2");
    div.style.display = "none";
    document.getElementById("appliquerDimensions").checked = false;
    setConfig("fREDIM", false);
  }
}

//fonction pour afficher le redimensionnement
function redimFenetre() {
  if (document.getElementById("appliquerDimensions").checked) {
    setConfig("fREDIM", true);
  } else {
    setConfig("fREDIM", false);
  }
}

const upload = document.getElementById("boutonSituation1");

//fonction pour l'upload
function handleFileSelect(event) {
  var input = event.target;
  setConfig("fUpload", input.files);
  config.getFields((fields) => {
    //console.log(fields);
  });

  //console.log("JE SUIS DEDANS")
  //console.log(input.files)
}

$(numDimensions).click(function () {
  affichePhoto();
});
$(numGammes).click(function () {
  affichePhoto();
});
$(numMateriaux).click(function () {
  affichePhoto();
});
$(numCouleurs).click(function () {
  affichePhoto();
});
$(numRecapitulatif).click(function () {
  affichePhoto();
});

$(document).ready(function () {
  jEvents();
});
//$(document).click(function(){ jEvents();});

// Déclarer des variables globales pour stocker les valeurs des sliders
var lengthValue = 1600;
var widthValue = 1200;

// SLIDER HAUTEUR
var sliderLength = document.getElementById("sliderLength");
var sliderWidth = document.getElementById("sliderWidth");
var sliderLengthInput = document.getElementById("sliderLengthInput");
var sliderWidthInput = document.getElementById("sliderWidthInput");

// Mettre à jour la valeur du slider de la longueur lorsque l'input de texte change
sliderLengthInput.addEventListener("change", function () {
  updateSliderValue(sliderLength, sliderLengthInput, "", 550, 2200);
});

// Mettre à jour la valeur du texte de la longueur lorsque le slider change
sliderLength.oninput = function () {
  sliderLengthInput.value = this.value + "";
  lengthValue = parseInt(this.value);
  // Appeler d'autres fonctions ici avec lengthValue si nécessaire
};

// Mettre à jour la valeur du slider de la largeur lorsque l'input de texte change
sliderWidthInput.addEventListener("change", function () {
  config.getFields((fields) => {
    var Mat = fields.fChoix_Mat;
    if (Mat == "BOIS") {
      updateSliderValue(sliderWidth, sliderWidthInput, "", 1000, 1500);
    } else if (Mat == "ALU") {
      updateSliderValue(sliderWidth, sliderWidthInput, "", 1000, 1550);
    } else if (Mat == "PVC") {
      updateSliderValue(sliderWidth, sliderWidthInput, "", 1000, 1600);
    }
  });
});

// Mettre à jour la valeur du texte de la largeur lorsque le slider change
sliderWidth.onchange = function () {
  config.getFields((fields) => {
    var alertBois = document.getElementById("AlertLargeurBois");
    var alertAlu = document.getElementById("AlertLargeurAlu");
    var alertPvc = document.getElementById("AlertLargeurPvc");
    var btnPVC = document.getElementById("AlertPvc");
    var btnALU = document.getElementById("AlertAlu");

    var Mat = fields.fChoix_Mat;
    if (Mat == "BOIS") {
      if (sliderWidthInput.value > 1500) {
        sliderWidthInput.value = 1500;
        sliderWidth.value = 1500;
        alertBois.style.display = "block";
        alertAlu.style.display = "none";
        btnPVC.style.display = "inline-block";
        btnALU.style.display = "inline-block";
      } else {
        alert.textContent = "";
        btnPVC.style.display = "none";
        btnALU.style.display = "none";
      }
    } else if (Mat == "ALU") {
      if (sliderWidthInput.value > 1550) {
        sliderWidthInput.value = 1550;
        sliderWidth.value = 1550;
        alertAlu.style.display = "block";
        alertBois.style.display = "none";
        btnPVC.style.display = "inline-block";
      } else {
        alert.textContent = "";
        btnPVC.style.display = "none";
      }
    } else if (Mat == "PVC") {
      if (sliderWidthInput.value > 1600) {
        sliderWidthInput.value = 1600;
        sliderWidth.value = 1600;
        alertPvc.style.display = "block";
      } else {
        alert.textContent = "";
      }
    }
  });

  sliderWidthInput.value = this.value + "";
  widthValue = parseInt(this.value);
  // Appeler d'autres fonctions ici avec widthValue si nécessaire
};

// Fonction générique pour mettre à jour la valeur du slider
function updateSliderValue(slider, input, unit, minValue, maxValue) {
  var valueText = input.value;
  var value = parseInt(valueText.replace(unit, ""));
  if (isNaN(value)) {
    value = minValue;
  }
  if (value < minValue) {
    value = minValue;
  } else if (value > maxValue) {
    value = maxValue;
  }
  slider.value = value;
  input.value = value + "" + unit;
}

// Vous pouvez maintenant utiliser lengthValue et widthValue dans d'autres fonctions selon vos besoins

function fieldsConf() {
  //console.log("Je suis dans le click")
  config.runAction("getFields");
  getFieldsConf();

  config.runAction("SaveQuote");
}

function getFieldsConf() {
  config.getFields((fields) => {
    //console.log(fields)
    //console.log("LAAAAAAAAA DANS VSCODE : ")
    console.log(fields.fJSONFields);
    //console.log("FIN VSCODE : ")
    var JSONFields = fields.fJSONFields;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setConfig("fChoix_Mat", "ALU");
  setConfig("fTable_Texture", "#71a1d2");
  setConfig("fChoix_Mat_poignee", "Laiton");
});

window.addEventListener("resize", responsive);
document.addEventListener("DOMContentLoaded", responsive);

function responsive() {
  if (window.innerWidth <= 900) {
    //console.log("Vous êtes sur un appareil mobile !");
    config.getFields((fields) => {
      if (fields.fChoixCamera != "CameraMobile") {
        config.runAction("SetCameraMobile");
        console.log("RunAction fait");
      } else {
        console.log("RunAction pas fait");
      }
    });
  } else if (window.innerWidth > 900) {
    config.runAction("SetCameraPerspective");
  }
}

function correctHauteur(hauteur) {
  console.log("*****");
  console.log(hauteur);
  if (hauteur > 2200) {
    hauteur = 2200;
  }
  recapManager.updateHauteur(hauteur);
}

function correctLargeur(_largeur) {
  console.log(_largeur);
  config.getFields((fields) => {
    console.log(_largeur);
    var Mat = fields.fChoix_Mat;
    console.log(Mat);
    if (Mat == "PVC") {
      if (_largeur > 1600) {
        _largeur = 1600;
      }
    } else if (Mat == "ALU") {
      if (_largeur > 1550) {
        _largeur = 1550;
      }
    } else if (Mat == "BOIS") {
      if (_largeur > 1500) {
        _largeur = 1500;
      }
    }
    console.log(_largeur);
    console.log("================================");
    recapManager.updateLargeur(_largeur);
  });
}
