console.log(window.innerWidth);
function backGround() {

    if (window.innerWidth < 700) {

    }
    else {

    }
}
const newLocal = setInterval(backGround, 100);
const navbar = document.querySelector(".nav-list");
let positionChange = function () {
    navbar.style.right = "0px";

}
let displayChange = function () {
    navbar.style.display = "flex";
}
const drawer = function () {
    console.log("hiii");
    setTimeout(positionChange, 100);
    setTimeout(displayChange, 50);
}
function hiding() {
    navbar.style.display = "none";
}
const body = document.querySelector("body");
const closeHeader = function () {
    console.log("hii buddhu")
    navbar.style.right = "-250px";
    setTimeout(hiding, 1000);
}
