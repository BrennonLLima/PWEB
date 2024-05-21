var altura = parseFloat(prompt("Qual sua altura?"));
var peso = parseFloat(prompt("Qual seu peso atual?"));

function calcIMC(peso,altura){
  return  peso / (altura * altura);
}

var imc = calcIMC(peso,altura)

function alertimc(imc){
    if (imc < 18.5)
        alert(`IMC: ${imc}
Classificão: Magreza`)
    else if(imc < 24.9)
        alert("Classificação: Normal")
    else if(imc < 29.9)
        alert("Classificação: Sobrepeso");
    else if(imc < 39.9)
        alert("Classificação: Obesidade");
    else if(imc > 40.0)
        alert("Classificação: Obesidade Grave");
}

alertimc(imc);