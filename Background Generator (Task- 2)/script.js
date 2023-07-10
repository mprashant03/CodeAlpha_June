var h3Text = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("grad");

function setGrad(){
    body.style.background = "linear-gradient(to right, " + c1.value +", " + c2.value + ")";
    h3Text.textContent = c1.value + ", " + c2.value;
}

c1.addEventListener("input", setGrad);
c2.addEventListener("input", setGrad);