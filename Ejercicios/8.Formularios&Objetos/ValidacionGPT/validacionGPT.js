// =======================
//   Expresiones y reglas
// =======================


// ========================
//   Lógica de validación
// ========================
// Te separo la validación de inputs "text" (con patterns) 
// de la validación de radio y checkbox, para que sea más claro.

// Maneja el evento input (mientras el usuario escribe)
document.querySelectorAll("input").forEach((input) => {
  if (patterns[input.id]) {
    input.addEventListener("input", (event) => keyValidation(event));
    input.addEventListener("blur", (event) => validationFinal(event));
  }
});

// Previene cualquier carácter que no coincida
// y autocompleta en caso necesario
function keyValidation(event) {
  const pattern = patterns[event.target.id];
  let value = event.target.value;
  const lastChar = value[value.length - 1];

  // Si no coincide con el pattern de keyPress, recortamos
  if (!pattern.keyPress.test(lastChar)) {
    event.target.value = value.slice(0, -1);
    return;
  }

  // Si tiene longitud máxima, recortamos
  if (pattern.max && value.length > pattern.max) {
    event.target.value = value.slice(0, pattern.max);
    return;
  }

  // Autocomplete si aplica
  if (typeof pattern.autoComplete === "function") {
    pattern.autoComplete(event);
  }
}

// Valida el valor final del campo comparando con 'validation'
function validationFinal(event) {
  const pattern = patterns[event.target.id];
  const div = document.querySelector("#validator-" + event.target.id);
  div.classList.add("border", "rounded", "mt-1", "p-1");

  // Si falla la RegExp o si la fecha de expiración está caducada
  if (
    !pattern.validation.test(event.target.value) ||
    (event.target.id === "expiration" &&
      !checkExpirationDate(event.target.value))
  ) {
    setInvalid(div, event.target, pattern.errorMessage);
  } else {
    setValid(div, event.target, pattern.name + " is valid");
  }
}

// Comprueba fecha de expiración <= mes actual
function checkExpirationDate(value) {
  let [mes, anio] = value.split("/");
  const today = new Date();
  // Ajustamos 'anio' al rango 2000-2099 si hace falta
  anio = parseInt("20" + anio, 10);
  mes = parseInt(mes, 10);
  // Generamos fecha del último día del mes
  const fechaExpiracion = new Date(anio, mes, 1);
  // Comparamos con fecha actual
  return fechaExpiracion > today;
}

// Helpers para cambiar estilo de campo y texto
function setInvalid(div, input, errorMsg) {
  div.classList.add("invalid", "badge", "text-bg-danger");
  div.classList.remove("valid", "badge", "text-bg-success");
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
  div.textContent = errorMsg;
}

function setValid(div, input, successMsg) {
  div.classList.add("valid", "badge", "text-bg-success");
  div.classList.remove("invalid", "badge", "text-bg-danger");
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  div.textContent = successMsg;
}

// ============================
//   Validación en el submit
// ============================
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let errors = [];

  // 1) Validación de todos los inputs con 'pattern'
  Object.keys(patterns).forEach((key) => {
    const input = document.getElementById(key);
    if (input) {
      const pattern = patterns[key];
      // Comprobamos si está vacío o no coincide la RegExp
      if (
        !pattern.validation.test(input.value) ||
        (key === "expiration" && !checkExpirationDate(input.value))
      ) {
        errors.push(`${pattern.name} is invalid or empty.`);
        const div = document.querySelector("#validator-" + key);
        setInvalid(div, input, pattern.errorMessage);
      }
    }
  });

  // 2) Validación del radio (al menos uno seleccionado)
  const radios = document.getElementsByName("paymentMethod");
  const radioContainer = document.querySelector("#validator-paymentMethod");
  const anyRadioChecked = Array.from(radios).some((r) => r.checked);
  if (!anyRadioChecked) {
    radioContainer.classList.add("border", "rounded", "invalid", "badge", "text-bg-danger", "mt-1", "p-1");
    radioContainer.textContent = "Select at least one payment method.";
    errors.push("Payment Method is required.");
  } else {
    radioContainer.classList.remove("invalid", "badge", "text-bg-danger");
    radioContainer.classList.add("valid", "badge", "text-bg-success");
    radioContainer.textContent = "Payment Method is valid";
  }

  // 3) Validación del checkbox (debe estar marcado)
  const checkbox = document.getElementById("acceptTerms");
  const checkboxContainer = document.querySelector("#validator-acceptTerms");
  if (!checkbox.checked) {
    checkboxContainer.classList.add("border", "rounded", "invalid", "badge", "text-bg-danger", "mt-1", "p-1");
    checkboxContainer.textContent = "You must accept the terms.";
    errors.push("Terms not accepted.");
  } else {
    checkboxContainer.classList.remove("invalid", "badge", "text-bg-danger");
    checkboxContainer.classList.add("valid", "badge", "text-bg-success");
    checkboxContainer.textContent = "Terms accepted.";
  }

  // 4) Si hay errores, los mostramos o actuamos. Si no, procesamos el envío
  if (errors.length > 0) {
    alert("Form has errors:\n\n" + errors.join("\n"));
  } else {
    alert("All good! Submitting form...");
    // Si quisieras enviar de verdad, quitarías el preventDefault o harías un fetch/axios...
    // form.submit(); 
  }
});
