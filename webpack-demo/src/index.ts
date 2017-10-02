import Vue from "vue";
import { cube } from "./math";

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});

function component() {
  const element = document.createElement("pre");
  const btn = document.createElement("button");
  element.innerHTML = [
    "Hello webpack!",
    "5 cubed is equal to " + cube(5),
  ].join("\n\n");
  return element;
}

document.body.appendChild(component());
