function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    
    this.calcularArea = function() {
      return this.base * this.altura;
    };
}

var base = parseFloat(prompt("Digite a base:"));
var altura = parseFloat(prompt("Digite a altura:"));

var retangulo = new Retangulo(base, altura);

alert("A área do retângulo é: " +  retangulo.calcularArea());