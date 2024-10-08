const form = document.getElementById("myForm");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("submitted");
  handleSubmit();
});

const prenomInput = document.getElementById("prenom");
const prenomError = document.querySelector("#prenom + .error");
const nameInput = document.getElementById("nom");
const nameError = document.querySelector("#nom + .error");
const emailInput = document.getElementById("email");
const emailError = document.querySelector("#email + .error");
const dataInput = document.getElementById("RGPD");
const dataError = document.querySelector(".radioError");
const handleSubmit = () => {
  var errors = false;
  if (nameInput.value.length == 0) {
    if(userLang=="fr"){
      nameError.textContent = "Ce champ ne peut pas être vide.";
    }
    else if(userLang=="en"){
      nameError.textContent = "This field can't be empty";
    }
    nameInput.classList.add("invalid");
    errors = true;
  } else {
    const reg = new RegExp("^[A-Za-z]+$");
    if (!reg.test(nameInput.value)) {
      nameError.textContent = "Le format n'est pas valide.";
      nameInput.classList.add("invalid");
      errors = true;
    } else {
      nameError.textContent = "";
      nameInput.classList.remove("invalid");
    }
  }

  if (prenomInput.value.length == 0) {
    if(userLang=="fr"){
      prenomError.textContent = "Ce champ ne peut pas être vide.";
    }
    else if(userLang=="en"){
      prenomError.textContent = "This field can't be empty";
    }
    prenomInput.classList.add("invalid");
    errors = true;
  } else {
    const reg = new RegExp("^[A-Za-z]+$");
    if (!reg.test(prenomInput.value)) {
      if(userLang=="fr"){
        prenomError.textContent = "Le format n'est pas valide.";
      }
      else if(userLang=="en"){
        prenomError.textContent = "The format isn't valid";
      }
      prenomInput.classList.add("invalid");
      errors = true;
    } else {
      prenomError.textContent = "";
      prenomInput.classList.remove("invalid");
    }
  }

  if (emailInput.value.length == 0) {
    if(userLang=="fr"){
      emailError.textContent = "Ce champ ne peut pas être vide.";
    }
    else if(userLang=="en"){
      emailError.textContent = "This field can't be empty";
    }
    emailInput.classList.add("invalid");
    errors = true;
  } else {
    const reg = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|fr)");
    if (!reg.test(emailInput.value)) {
      if(userLang=="fr"){
        emailError.textContent = "Merci de renseigner une adresse mail valide.";
      }
      else if(userLang=="en"){
        emailError.textContent = "Thanks to give a valid email";
      }
      emailInput.classList.add("invalid");
      errors = true;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("invalid");
    }
  }

  if (!dataInput.checked) {
    if(userLang=="fr"){
      dataError.textContent = "Vous devez cocher cet élément pour continuer.";
    }
    else if(userLang=="en"){
      dataError.textContent = "This field is requiered";
    }
    errors = true;
  } else {
    dataError.textContent = "";
  }

  if (!errors) {
    //const prenomNom = nameInput.value.split(" ");
    setConfig("fNomClient", nameInput.value);
    setConfig("fPrenomClient", prenomInput.value);
    setConfig("fEmailClient", emailInput.value);
    setConfig("fName", nameInput.value);
    setConfig("fPrenom", prenomInput.value);
    setConfig("fMail", emailInput.value);
    fieldsConf();
    pageManager.showMessage();
  }
};

const inputs = [nameInput, emailInput];
const errors = [nameError, emailError];

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("input", () => {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
      errors[i].textContent = "";
    }
  });
}