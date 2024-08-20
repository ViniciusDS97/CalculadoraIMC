const form = document.getElementById('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
        resultado.style.color = 'red'; 
        resultado.style.backgroundColor = 'transparent'; 
        return;
    } 

    let imc = peso / (altura * altura);
    let mensagem = '';
    let corDeFundo = 'white'; 

    if(imc < 18.5) {
        mensagem = "Abaixo do peso";
        corDeFundo = 'orange'; 
    } else if(imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso normal";
        corDeFundo = 'green'; 
    } else if(imc >= 25 && imc <= 29.9) {
        mensagem = "Sobrepeso";
        corDeFundo = 'yellow';
    } else if(imc >= 30 && imc <= 34.9) {
        mensagem = "Obesidade nível 1";
        corDeFundo = 'orange';
    } else if(imc >= 35 && imc <= 39.9) {
        mensagem = "Obesidade nível 2";
        corDeFundo = 'red'; 
    } else if(imc >= 40) {
        mensagem = "Obesidade nível 3";
        corDeFundo = 'darkred'; 
    }

    resultado.textContent = `IMC: ${imc.toFixed(2)} - ${mensagem}`;
    resultado.style.color = 'white'; 
    resultado.style.backgroundColor = corDeFundo; 
    resultado.style.padding = '10px'; 
    resultado.style.borderRadius = '5px'; 
});
