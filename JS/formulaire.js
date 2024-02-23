const form = document.getElementById("myForm");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("submitted");
  handleSubmit();
});

const societeInput = document.getElementById("societe");
const societeError = document.querySelector("#societe + .error");
const nameInput = document.getElementById("nom");
const nameError = document.querySelector("#nom + .error");
const emailInput = document.getElementById("email");
const emailError = document.querySelector("#email + .error");
const dataInput = document.getElementById("RGPD");
const dataError = document.querySelector(".radioError");
const handleSubmit = () => {
  var errors = false;
  if (societeInput.value.length == 0) {
    societeError.textContent = "Ce champ ne peut pas être vide.";
    societeInput.classList.add("invalid");
    errors = true;
  } else {
    societeError.textContent = "";
    societeInput.classList.remove("invalid");
  }

  if (nameInput.value.length == 0) {
    nameError.textContent = "Ce champ ne peut pas être vide.";
    nameInput.classList.add("invalid");
    errors = true;
  } else {
    const reg = new RegExp("^[A-Za-z]+ [A-Za-z]+$");
    if (!reg.test(nameInput.value)) {
      nameError.textContent = "Le format n'est pas valide.";
      nameInput.classList.add("invalid");
      errors = true;
    } else {
      nameError.textContent = "";
      nameInput.classList.remove("invalid");
    }
  }

  if (emailInput.value.length == 0) {
    emailError.textContent = "Ce champ ne peut pas être vide.";
    emailInput.classList.add("invalid");
    errors = true;
  } else {
    const reg = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|fr)");
    if (!reg.test(emailInput.value)) {
      emailError.textContent = "Merci de renseigner une adresse mail valide.";
      emailInput.classList.add("invalid");
      errors = true;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("invalid");
    }
  }

  if (!dataInput.checked) {
    dataError.textContent = "Vous devez cocher cet élément pour continuer.";
    errors = true;
  } else {
    dataError.textContent = "";
  }

  if (!errors) {
    localStorage.setItem("ITCMenuiserie_Nom", nameInput.value);
    localStorage.setItem("ITCMenuiserie_Societe", societeInput.value);
    localStorage.setItem("ITCMenuiserie_Mail", emailInput.value);
    window.location.href = "./pages/main.html";
  }
};

const inputs = [societeInput, nameInput, emailInput];
const errors = [societeError, nameError, emailError];

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("input", () => {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
      errors[i].textContent = "";
    }
  });
}

