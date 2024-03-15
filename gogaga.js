let icon = document.getElementById("icon");
let icon2 = document.getElementById("icon2");
let navbarExpand = document.getElementById("navbarExpand");
let headerContainer = document.getElementById("headerContainer");
let internalPackage = document.getElementById("internalPackage");
let navbarExpand2 = document.getElementById("navbarExpand2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let readMoreContainer = document.getElementById("readMoreContainer");
let readMore = document.getElementById("readMore");
let readLess = document.getElementById("readLess");


icon.onclick = function() {
    icon.classList.add("turnOff");
    icon2.classList.add("turnOn");
    navbarExpand.classList.add("navbarExpand");
    navbarExpand.classList.toggle("turnOff");
    headerContainer.classList.remove("border");
};
icon2.onclick = () => {
    icon.classList.remove("turnOff");
    icon2.classList.remove("turnOn");
    navbarExpand.classList.remove("navbarExpand");
    navbarExpand.classList.add("turnOff");
    headerContainer.classList.add("border");
};

internalPackage.onclick = () => {
    navbarExpand2.classList.toggle("navbarExpand2");
    icon3.classList.toggle("turnOff");
    icon4.classList.toggle("turnOff");
};
readMore.onclick = () => {
    readMoreContainer.style.height = "50vh";
    readMore.classList.toggle("turnOff");
    readLess.classList.toggle("turnOff");
};
readLess.onclick = () => {
    readMoreContainer.style.height = "20vh";
    readMore.classList.toggle("turnOff");
    readLess.classList.toggle("turnOff");
}