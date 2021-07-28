/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

let results = document.getElementById("output");

const buildCards = (data) => {
  data.forEach((item) => {
    const div = document.createElement("div");
    const models = item.models;
    let brandModels = "";

    models.forEach((model) => {
      brandModels += model + ", ";
    });

    output = "<div><h2>" + item.brand + "</h2></div>" + brandModels;
    div.innerHTML = output;
    results.appendChild(div);
  });
};

fetch(ENDPOINT)
  .then((result) => result.json())
  .then((data) => {
    buildCards(data);
  });
