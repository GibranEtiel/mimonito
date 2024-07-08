let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left: 0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
    right: 0.6em;
    top: 0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    left: 7.5em;
    transform: rotate(0deg);
  `;
  handR.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg);
  `;
};

// Cuando se hace focus en el campo de contraseña
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    left: 11.75em;
    transform: rotate(-155deg);
  `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});

// Cuando se hace click fuera del campo de contraseña
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});
function validatePassword() {
    var passwordInput = document.getElementById("password").value;
    if (passwordInput !== "monito") {
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.textContent = "La contraseña es incorrecta.";
      return false; // Evita el envío del formulario si la contraseña es incorrecta
    }
    return true; // Permite el envío del formulario si la contraseña es correcta
  }