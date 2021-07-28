/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", fn);
function fn(e) {
  e.preventDefault();
  const weight = document.getElementById("search").value;

  weightInLb = weight * 2.2046;
  weightInGrams = weight / 0.001;
  weightInOz = weight * 35.274;

  document.getElementById("output").textContent =
    "Your weight is equal to " +
    weightInLb +
    " lb, " +
    weightInGrams +
    " g or " +
    weightInOz +
    " oz";
}
