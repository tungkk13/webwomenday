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
        sessionStorage.setItem("loichucVisible", "true");

        setTimeout(function () {
            var endElement = document.getElementById("end_type");
            endElement.classList.add("visible");
            sessionStorage.setItem("endVisible", "true");

            var h2Element = document.getElementById("khoeanh");
            h2Element.classList.add("visible");
            sessionStorage.setItem("khoeanhVisible", "true");

            var imgElements = document.querySelectorAll("img.fade-in, khoeanh");
            for (var i = 0; i < imgElements.length; i++) {
                imgElements[i].classList.add("visible");
                sessionStorage.setItem("img" + i + "Visible", "true");
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

    if (sessionStorage.getItem("loichucVisible") === "true") {
        document.getElementById("loichuc").classList.add("visible");
    }
    if (sessionStorage.getItem("endVisible") === "true") {
        document.getElementById("end_type").classList.add("visible");
    }
    if (sessionStorage.getItem("khoeanhVisible") === "true") {
        document.getElementById("khoeanh").classList.add("visible");
    }
    var imgElements = document.querySelectorAll("img.fade-in, khoeanh");
    for (var i = 0; i < imgElements.length; i++) {
        if (sessionStorage.getItem("img" + i + "Visible") === "true") {
            imgElements[i].classList.add("visible");
        }
    }
}

window.onbeforeunload = function () {
    sessionStorage.removeItem("allowScroll");
    sessionStorage.removeItem("loichucVisible");
    sessionStorage.removeItem("endVisible");
    sessionStorage.removeItem("khoeanhVisible");
    var imgElements = document.querySelectorAll("img.fade-in, khoeanh");
    for (var i = 0; i < imgElements.length; i++) {
        sessionStorage.removeItem("img" + i + "Visible");
    }
}
