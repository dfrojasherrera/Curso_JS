const h1 = document.querySelector('h1');
const n1 = document.getElementById('calculo');
const n2 = document.getElementById('calculo2');
const btn = document.getElementById('btn-calcular');
const result = document.getElementById('result');
const form = document.getElementById('form');

form.addEventListener('submit', calcular);

function calcular(event){
    event.preventDefault();
    const suma = parseInt(n1.value) + parseInt(n2.value);
    result.innerText = "Resultado: " + suma;
}

