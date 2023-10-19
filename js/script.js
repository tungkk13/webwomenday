let buttonPressed = false;

document.getElementById('main_button').addEventListener('click', function (event) {
    event.preventDefault();
    buttonPressed = true;
    const target = document.querySelector('#main_page');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});

window.addEventListener('scroll', function () {
    if (!buttonPressed) {
        window.scrollTo(0, 0);
    }
});