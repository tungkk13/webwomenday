var btn = document.getElementById("main_button");
var mainPage = document.getElementById("main_page");
var body = document.body;

body.style.overflow = "hidden";

btn.onclick = function () {
    body.style.overflow = "auto";
    sessionStorage.setItem("allowScroll", "true");
    mainPage.scrollIntoView({ behavior: "smooth" });

    setTimeout(function () {
        var h2Element = document.getElementById("loichuc");
        h2Element.classList.add("visible");

        setTimeout(function () {
            var endElement = document.getElementById("end_type");
            endElement.classList.add("visible");
            var h2Element = document.getElementById("khoeanh");
            h2Element.classList.add("visible");
            var imgElements = document.querySelectorAll("img.fade-in, khoeanh");
            for (var i = 0; i < imgElements.length; i++) {
                imgElements[i].classList.add("visible");
            }
        }, 2500);
    }, 500);
}

window.onload = function () {
    if (sessionStorage.getItem("allowScroll") === "true") {
        body.style.overflow = "auto";
    } else {
        body.style.overflow = "hidden";
    }
    window.scrollTo(0, 0);
}

window.onbeforeunload = function () {
    sessionStorage.removeItem("allowScroll");
}