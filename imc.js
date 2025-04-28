const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (nome !== "" && !isNaN(altura) && !isNaN(peso)) { 
        const valorIMC = peso / (altura * altura);
        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso";
        } else if (valorIMC < 25) {
            classificacao = "com peso normal";
        } else if (valorIMC < 30) {
            classificacao = "com sobrepeso";
        } else {
            classificacao = "com obesidade";
        }
        
        resultado.textContent = `Olá ${nome}, seu IMC é ${valorIMC.toFixed(1)} e você está ${classificacao}.`;
    } else {
        resultado.textContent = "Preencha todos os campos corretamente!";
    }
}

calcular.addEventListener("click", imc);

