/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domain = [".com", ".co", ".es"];
  // Generador de dominios con for
  let textFor = '<ul class="list-group">';
  textFor +=
    '<li class="list-group-item bg-success text-light"> DOMINIOS FOR </li>';

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let r = 0; r < domain.length; r++) {
          textFor +=
            '<li class="list-group-item">' +
            pronouns[i] +
            adjectives[j] +
            nouns[k] +
            domain[r] +
            "</li>";
        }
      }
    }
  }

  textFor += "</ul>";
  document.querySelector("#dominios").innerHTML = textFor;
  // Generador de dominios con for...of
  let textForOf = '<ul class="list-group">';
  textForOf +=
    '<li class="list-group-item bg-success text-light"> DOMINIOS FOR OF </li>';

  for (const element of pronouns) {
    for (const item of adjectives) {
      for (const arr of nouns) {
        for (const otros of domain) {
          textForOf += `<li class="list-group-item">
            ${element}${item}${arr}${otros}
            </li>`;
        }
      }
    }
  }

  textForOf += "</ul>";
  document.querySelector("#for").innerHTML = textForOf;
  // Generador de dominios con map
  let textMap = "<ul class='list-group'>";
  textMap +=
    "<li class='list-group-item bg-success text-light'> DOMINIOS MAP</li>";
  pronouns.map(item => {
    adjectives.map(element => {
      nouns.map(itern => {
        domain.map(elem => {
          textMap += `<li class="list-group-item">${item}${element}${itern}${elem}</li>`;
        });
      });
    });
  });
  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
