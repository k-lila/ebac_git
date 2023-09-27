function randomColor() {
    function randomNum() {return parseInt(Math.random() * 255)}
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

function updateColor() {
    var bgColor = randomColor();
    document.getElementById('cor').style.backgroundColor = bgColor;
    document.getElementById('header').innerText = bgColor;
}

document.addEventListener('DOMContentLoaded', function() {
    updateColor();
    document.getElementById('btn-color').addEventListener('click', function() {
        updateColor()
    })
})