var config;
var config2;
document.addEventListener("DOMContentLoaded", function() {
    config = new kbmax.ConfiguratorEmbed({
        kbmaxUrl: "https://itc-dev.kbmax.com",
        elementId: "viewer",
        configuratorId: 535,
        sceneId: 220,
        showHeader: false,
        showDrawer: false,
        showMove: false,
        bindToFormSelector: "#myFormHauteur",
        loadStyle: "none",
        parameters: {"param1":"Particulier", "Web":"oui", "Camera":"Perspective"},
    });
});

document.addEventListener("DOMContentLoaded", function() {
    config2 = new kbmax.ConfiguratorEmbed({
        kbmaxUrl: "https://itc-dev.kbmax.com",
        elementId: "viewer2",
        configuratorId: 535,
        showHeader: false,
        showDrawer: false,
        showMove: false,
        bindToFormSelector: "",
        loadStyle: "none",
        parameters: {"param1":"Particulier", "Web":"oui", "Camera":"Zoom"},
    });
});


function setConfig(fieldName, fieldValue){ // Pour communniquer avec le configurateur KBMax
    if(fieldName == "fTable_Texture"){ config.setFields({ "fTable_Texture" : fieldValue }); config2.setFields({ "fTable_Texture" : fieldValue });}
    else if (fieldName == "fChoix_Mat_poignee"){ config.setFields({ "fChoix_Mat_poignee" : fieldValue }); config2.setFields({ "fChoix_Mat_poignee" : fieldValue });}
    else if (fieldName == "fChoix_Mat"){ config.setFields({ "fChoix_Mat" : fieldValue }); config2.setFields({ "fChoix_Mat" : fieldValue });}
    else if (fieldName == "fHauteur"){ config.setFields({ "fHauteur" : fieldValue }); config2.setFields({ "fHauteur" : fieldValue });}
    else if (fieldName == "fLargeur"){ config.setFields({ "fLargeur" : fieldValue }); config2.setFields({ "fLargeur" : fieldValue });}
    else if (fieldName == "fPose/depose"){ config.setFields({ "fPose/depose" : fieldValue }); config2.setFields({ "fPose/depose" : fieldValue });}
    else if (fieldName == "fDormant"){ config.setFields({ "fDormant" : fieldValue }); config2.setFields({ "fDormant" : fieldValue });}
    else if (fieldName == "fAfficherPhoto"){ config.setFields({ "fAfficherPhoto" : fieldValue }); config2.setFields({ "fAfficherPhoto" : fieldValue });}
    else if (fieldName == "fTexturePhoto"){ config.setFields({ "fTexturePhoto" : fieldValue }); config2.setFields({ "fTexturePhoto" : fieldValue });}
    else if (fieldName == "fChoixCamera"){ config.setFields({ "fChoixCamera" : fieldValue });}
    else if (fieldName == "fUpload"){ config.setFields({ "fUpload" : fieldValue });}
    else if (fieldName == "fREDIM"){ config.setFields({ "fREDIM" : fieldValue });}
    else if (fieldName == "fChoixAppliqueDimensions"){ config.setFields({ "fChoixAppliqueDimensions" : fieldValue });}

    
    console.log(fieldName);
    console.log(fieldValue);
}


function jEvents(){
    // Boutons de textures bois
    $("#CheneNaturel").click(function(){ setConfig("fTable_Texture", "#ffd1a3"); });
    $("#NoyerFonce").click(function(){ setConfig("fTable_Texture", "#eecfb4"); });
    $("#MerisierFonce").click(function(){ setConfig("fTable_Texture", "#c56b55"); });
    $("#Vert6018").click(function(){ setConfig("fTable_Texture", "#316b44"); });
    $("#Bleu5010").click(function(){ setConfig("fTable_Texture", "#395878"); });
    $("#Orange2004").click(function(){ setConfig("fTable_Texture", "#f19e89"); });
    // Boutons de textures aluminium
    $("#Gris7035").click(function(){ setConfig("fTable_Texture", "#f7f5f6"); });
    $("#Gris7016").click(function(){ setConfig("fTable_Texture", "#9fa2a2"); });
    $("#Noir9005").click(function(){ setConfig("fTable_Texture", "#74747b"); });
    $("#Bleu5012").click(function(){ setConfig("fTable_Texture", "#71a1d2"); });
    $("#Bleu5002").click(function(){ setConfig("fTable_Texture", "#395878"); });
    $("#VertFonceAlu").click(function(){ setConfig("fTable_Texture", "#4ca56a"); });
    $("#Vert6005").click(function(){ setConfig("fTable_Texture", "#316b44"); });
    $("#OrangeAlu").click(function(){ setConfig("fTable_Texture", "#c56b55"); });
    $("#Jaune1018").click(function(){ setConfig("fTable_Texture", "#a77c40"); });
    // Boutons de textures PVC
    $("#Blanc").click(function(){ setConfig("fTable_Texture", "#ffffff"); });
    $("#Bordeaux").click(function(){ setConfig("fTable_Texture", "#5E2129"); });
    $("#Noir").click(function(){ setConfig("fTable_Texture", "#293133"); });
    $("#Bleu").click(function(){ setConfig("fTable_Texture", "#395878"); });
    $("#Vert").click(function(){ setConfig("fTable_Texture", "#316b44"); });
    // Boutons de textures poignée
    $("#LaitonBois").click(function(){ setConfig("fChoix_Mat_poignee", "Laiton"); });
    $("#InoxBois").click(function(){ setConfig("fChoix_Mat_poignee", "Inox"); });
    $("#PvcBois").click(function(){ setConfig("fChoix_Mat_poignee", "Pvc"); });

    $("#LaitonAlu").click(function(){ setConfig("fChoix_Mat_poignee", "Laiton"); });
    $("#InoxAlu").click(function(){ setConfig("fChoix_Mat_poignee", "Inox"); });
    $("#PvcAlu").click(function(){ setConfig("fChoix_Mat_poignee", "Pvc"); });

    $("#LaitonPvc").click(function(){ setConfig("fChoix_Mat_poignee", "Laiton"); });
    $("#InoxPvc").click(function(){ setConfig("fChoix_Mat_poignee", "Inox"); });
    $("#PvcPvc").click(function(){ setConfig("fChoix_Mat_poignee", "Pvc"); });

    // Boutons des matériaux
    $("#MatPvc").click(function(){ setConfig("fChoix_Mat", "PVC"); });
    $("#MatBois").click(function(){ setConfig("fChoix_Mat", "BOIS"); });
    $("#MatAlu").click(function(){ setConfig("fChoix_Mat", "ALU"); });

    // Slider Hauteur et largeur
    //$("#sliderLength").click(function(){ setConfig("fHauteur", lengthValue); });
    //$("#sliderWidth").click(function(){ setConfig("fLargeur", widthValue); });

    // Texte Dormant
    $("#economique").click(function(){ setConfig("fDormant", "Eco"); });
    $("#confort").click(function(){ setConfig("fDormant", "Conf"); });
    $("#luxe").click(function(){ setConfig("fDormant", "Luxe"); });

    // Texte Type de pose
    $("#renovation").click(function(){ setConfig("fPose/depose", "R"); });
    $("#totale").click(function(){ setConfig("fPose/depose", "T"); });
    $("#neuf").click(function(){ setConfig("fPose/depose", "N"); });

    // Texte Type de pose
    $("#oui").click(function(){ setConfig("fAfficherPhoto", true);  });
    $("#non").click(function(){ setConfig("fAfficherPhoto", false); });

    //Mise en situation
    //bouton afficher photo
    $('#checkbox').click(affichePhoto())
    //bouton redimmensionner la fenêtre
    $('#appliquerDimensions').click(redimFenetre())
    //Choix de la photo
    $('#Maison1').click(function(){ setConfig("fTexturePhoto", "Maison_1");})
    $('#Maison2').click(function(){ setConfig("fTexturePhoto", "Maison_2");})
    $('#Maison3').click(function(){ setConfig("fTexturePhoto", "Maison_3");})
    $('#Maison4').click(function(){ setConfig("fTexturePhoto", "Maison_4");})


    $('#appliqueDimensions').click(function(){ setConfig("fChoixAppliqueDimensions", "Oui");  setConfig("fREDIM", false); document.getElementById("appliquerDimensions").checked=false })
}


//fonction pour afficher la photo
function affichePhoto(){
    if(document.getElementById("checkbox").checked){
        setConfig("fAfficherPhoto", true);
        setConfig("fChoixCamera", "CameraPhoto") //à changer pour un runaction
    }
    else{
        setConfig("fAfficherPhoto", false);
        setConfig("fChoixCamera", "CameraAccueil") //à changer pour un runaction
    }
}

//fonction pour afficher le redimensionnement
function redimFenetre(){
    if(document.getElementById("appliquerDimensions").checked){
        setConfig("fREDIM", true);
        
    }
    else{
        setConfig("fREDIM", false);
    }
}




//fonction pour l'upload
function handleFileSelect(event){
    var input = event.target;
    setConfig("fUpload", input.files);
    console.log("JE SUIS DEDANS")
    console.log(input.files)
}



$(document).ready(function(){ jEvents();});
$(document).click(function(){ jEvents();});


// Déclarer des variables globales pour stocker les valeurs des sliders
var lengthValue = 1600;
var widthValue = 1200;

// SLIDER HAUTEUR 
var sliderLength = document.getElementById("sliderLength");
var sliderWidth = document.getElementById("sliderWidth");
var sliderLengthInput = document.getElementById("sliderLengthInput");
var sliderWidthInput = document.getElementById("sliderWidthInput");

// Mettre à jour la valeur du slider de la longueur lorsque l'input de texte change
sliderLengthInput.addEventListener("input", function() {
    updateSliderValue(sliderLength, sliderLengthInput, "mm", 550, 2200);
});

// Mettre à jour la valeur du texte de la longueur lorsque le slider change
sliderLength.oninput = function() {
    sliderLengthInput.value = this.value + " mm";
    lengthValue = parseInt(this.value);
    // Appeler d'autres fonctions ici avec lengthValue si nécessaire
}

// Mettre à jour la valeur du slider de la largeur lorsque l'input de texte change
sliderWidthInput.addEventListener("input", function() {
    updateSliderValue(sliderWidth, sliderWidthInput, "mm", 1000, 1600);
});

// Mettre à jour la valeur du texte de la largeur lorsque le slider change
sliderWidth.oninput = function() {
    sliderWidthInput.value = this.value + " mm";
    widthValue = parseInt(this.value);
    // Appeler d'autres fonctions ici avec widthValue si nécessaire
}

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
    input.value = value + " " + unit;
}

// Vous pouvez maintenant utiliser lengthValue et widthValue dans d'autres fonctions selon vos besoins



document.addEventListener("DOMContentLoaded", function () {
    setConfig("fChoix_Mat", "BOIS");
    setConfig("fTable_Texture", "#ffd1a3");

});