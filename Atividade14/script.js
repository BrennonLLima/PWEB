function maiusculasMinusculas() {
    var texto = document.getElementById('texto').value;
    var maiusculasRadio = document.getElementById('maiusculas');
    var minusculasRadio = document.getElementById('minusculas');

    if(maiusculasRadio.checked)
        document.getElementById('texto').value = texto.toUpperCase();
    else if(minusculasRadio.checked)
        document.getElementById('texto').value = texto.toLowerCase(); 
}