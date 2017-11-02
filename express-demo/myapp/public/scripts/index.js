import { cube } from './math.js';

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data() {
    return {
      counter: 0,
    };
  },
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world.',
    users: [],
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

const request = new XMLHttpRequest();
request.open('GET', '/users', true);

request.onload = function onload() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    app.users = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error')
  }
};

request.onerror = function onerror() {
  // There was a connection error of some sort
};

request.send();
