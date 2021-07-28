/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let results = document.getElementById("output");

document.querySelector("button").addEventListener("click", fn);

const buildCards = (data) => {
  data.forEach((item) => {
    const div = document.createElement("div");

    output =
      "<div><img src=" + item.avatar_url + "><h1>" + item.login + "</h1></div>";

    div.innerHTML = output;
    results.appendChild(div);
  });
};

function fn() {
  document.getElementById("message").textContent = "";

  fetch(ENDPOINT)
    .then((result) => result.json())
    .then((data) => {
      buildCards(data);
    });
}
