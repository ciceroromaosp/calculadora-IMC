const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (nome !== "" && !isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) { 
        const valorIMC = peso / (altura * altura);
        let classificacao = "";
        let emoji = "";

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso";
            emoji = "📊";
        } else if (valorIMC < 25) {
            classificacao = "com peso normal";
            emoji = "✅";
        } else if (valorIMC < 30) {
            classificacao = "com sobrepeso";
            emoji = "⚠️";
        } else {
            classificacao = "com obesidade";
            emoji = "🔴";
        }
        
        resultado.innerHTML = `${emoji} <strong>${nome}</strong>, seu IMC é <strong>${valorIMC.toFixed(1)}</strong> e você está <strong>${classificacao}</strong>.`;
        resultado.style.display = "flex";
    } else {
        resultado.innerHTML = "⚠️ Por favor, preencha todos os campos corretamente!";
        resultado.style.display = "flex";
    }
}

calcular.addEventListener("click", imc);

// Permitir calcular ao pressionar Enter
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        imc();
    }
});

