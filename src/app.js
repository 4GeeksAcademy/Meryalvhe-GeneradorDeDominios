/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".co", ".es"];

  let textFor = '<ul class="list-group">';
  textFor +=
    '<li class="list-group-item bg-success text-light"> DOMINIOS FOR </li>';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let r = 0; r < ext.length; r++) {
          textFor +=
            '<li class="list-group-item">' +
            pronoun[i] +
            adj[j] +
            noun[k] +
            ext[r] +
            "</li>";
        }
      }
    }
  }

  textFor += "</ul>";
  document.querySelector("#dominios").innerHTML = textFor;

  let textForOf = '<ul class="list-group">';
  textForOf +=
    '<li class="list-group-item bg-success text-light"> DOMINIOS FOR OF </li>';

  for (const element of pronoun) {
    for (const item of adj) {
      for (const arr of noun) {
        for (const otros of ext) {
          textForOf += `<li class="list-group-item">
            ${element}${item}${arr}${otros}
            </li>`;
        }
      }
    }
  }

  textForOf += "</ul>";
  document.querySelector("#for").innerHTML = textForOf;

  let textMap = "<ul class='list-group'>";
  textMap +=
    "<li class='list-group-item bg-success text-light'> DOMINIOS MAP</li>";
  pronoun.map(item => {
    adj.map(element => {
      noun.map(itern => {
        ext.map(elem => {
          textMap += `<li class="list-group-item">${item}${element}${itern}${elem}</li>`;
        });
      });
    });
  });
  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
