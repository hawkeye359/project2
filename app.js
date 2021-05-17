console.log(window.innerWidth);
const navbar = document.querySelector(".nav-list");
function backGround() {

    if (window.innerWidth > 562) {
        if (navbar.style.display === "none") {
            displayChange();
        }
    }
    else {

    }
}
const newLocal = setInterval(backGround, 100);

let positionChange = function () {
    navbar.style.right = "0px";

}
let displayChange = function () {
    navbar.style.display = "flex";
}

const drawer = function () {
    if (window.innerWidth < 500) {
        console.log("hiii");
        setTimeout(positionChange, 100);
        setTimeout(displayChange, 50);
    }

}
function hiding() {
    navbar.style.display = "none";
}
const body = document.querySelector("body");
const closeHeader = function () {
    if (window.innerWidth < 500) {
        console.log("hii buddhu")
        navbar.style.right = "-250px";
        setTimeout(hiding, 1000);
    }
}
