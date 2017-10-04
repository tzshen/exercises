import { cube } from './math.js';

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data() {
    return {
      counter: 0,
    };
  },
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world.',
  },
});

function component() {
  const element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    `5 cubed is equal to ${cube(5)}`,
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());
