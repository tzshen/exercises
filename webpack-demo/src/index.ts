import Vue from 'vue';
import { cube } from './math.js';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());