function maiorValor(val1, val2, val3) {
    if (val1 > val2 && val1 > val3)
        return val1;
    else if (val2 > val1 && val2 > val3)
        return val2;
    else
        return val3;
}

function ordenarValores(val1, val2, val3) {
    var valores = [val1, val2, val3];

    valores.sort(function(a, b) { return a - b });

    return valores;
}

function ePalindromo(texto) {
    texto = texto.toLowerCase().replace(/\s/g, '');

    var textoInvertido = texto.split('').reverse().join('');

    return texto === textoInvertido;
}

function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC && Math.abs(ladoA - ladoC) < ladoB && ladoB < ladoA + ladoC && Math.abs(ladoA - ladoB) < ladoC && ladoC < ladoA + ladoB) {
        if (ladoA === ladoB && ladoB === ladoC) {
            alert("Triângulo Equilátero");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            alert("Triângulo Isósceles");
        } else {
            alert("Triângulo Escaleno");
        }
    } else {
        alert("Não é um triângulo");
    }
}

do {
    var opcao = parseInt(prompt("Escolha uma operação:\n1- Encontrar o maior valor\n2- Ordenar valores\n3- Verificar palíndromo\n4- Classificar triângulo\n5- Sair"));

    switch (opcao) {
        case 1:
            var valor1 = parseFloat(prompt("Digite o primeiro valor"));
            var valor2 = parseFloat(prompt("Digite o segundo valor"));
            var valor3 = parseFloat(prompt("Digite o terceiro valor"));

            var maiorValorEncontrado = maiorValor(valor1, valor2, valor3);
            alert("O maior valor é: " + maiorValorEncontrado);
            break;

        case 2:
            var valorA = parseFloat(prompt("Digite o primeiro valor"));
            var valorB = parseFloat(prompt("Digite o segundo valor"));
            var valorC = parseFloat(prompt("Digite o terceiro valor"));

            var valoresOrdenados = ordenarValores(valorA, valorB, valorC);
            alert("Valores ordenados: " + valoresOrdenados);
            break;

        case 3:
            var texto = prompt("Digite o texto a verificar");
            var resultadoPalindromo = ePalindromo(texto);
            if (resultadoPalindromo) {
                alert("O texto é um palíndromo");
            } else {
                alert("O texto não é um palíndromo");
            }
            break;

        case 4:
            var lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo"));
            var lado2 = parseFloat(prompt("Digite o segundo lado do triângulo"));
            var lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo"));

            tipoTriangulo(lado1, lado2, lado3);
            break;

        case 5:
            alert("Saindo do programa");
            break;

        default:
            alert("Opção inválida, tente novamente");
            break;
    }
} while (opcao !== 5);
