
const botao = document.querySelector('form');

botao.addEventListener('submit', function(e) {
    e.preventDefault();

    const numA = parseFloat(document.getElementById("numA").value);
    const numB = parseFloat(document.getElementById("numB").value);
    const areaTexto = document.getElementById('areaTexto');

    if (numA < numB) {
        areaTexto.innerHTML = 'Parabéns!<br>Era exatamente isso que buscáva-mos: o número B deve ser maior que o número A';
        document.getElementById('numB').style.backgroundColor = 'rgba(140, 240, 180)'
        document.getElementById('numA').style.backgroundColor = 'white'
    } else {
        areaTexto.innerHTML = 'Tente mais uma vez!<br>Você não chegou no resultado esperado. O número B deve ser maior que o número A';
        document.getElementById('numA').style.backgroundColor = 'rgba(255, 0, 0, 0.70)'
        document.getElementById('numB').style.backgroundColor = 'white'
    }
})