
var input = document.querySelector('#url');                                                                                                                       

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
        turnOn()
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);
    turnOn()
});

let timer;
let turn = 0;
function turnOn() {
  document.getElementById("title").innerHTML = '<img id="fan" src="data:image/jpeg;base64,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">'
  timer = setInterval(turnFan, 10);
  let x = document.getElementById("on");
  x.disabled = true;
}

function turnFan() {
  let x = document.getElementById("fan");
  turn += 6;
  x.style.transform = "rotate("+ (turn % 360) +"deg)"
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
