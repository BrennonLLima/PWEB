window.onscroll = function () { myFunction() };

var header = document.getElementById("nav");

var fixo = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > fixo) {
        header.classList.add("fixo");
    } else {
        header.classList.remove("fixo");
    }
}
