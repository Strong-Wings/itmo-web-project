import {Spinner} from './spin.js';
let spinner = new Spinner(opts);

(function() {
    document.addEventListener("DOMContentLoaded", () => {
        window.addEventListener("load", async () => {
            createSpinner();
            for (let i = 1; i <= 3; i++) {
                var res = await getUsers();
                fillSeller(res[0], i);
            }
        })
        spinner.stop()
    })
})();

function createSpinner() {
    Array.from(document.getElementsByClassName('spinner')).forEach((target) => {
        spinner.spin(target);
    })
}


function fillSeller(user, i) {
    document.getElementsByClassName('seller-' + i)[0].innerText = user.name + ', ' + user.email;
}

function getUsers() {
    let id = 1 + Math.floor(Math.random() * 10)
    const url = "https://jsonplaceholder.typicode.com/users?id=" + id
    console.log(url)
    return fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => {
            if (res.status == 200) {
                return res;
            }
            throw new Error(res.statusText);
        })
        .then((res) => res.json());
}


var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};