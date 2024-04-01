let humano, computador;

computador = Math.random();

if (computador < 0.33){
    computador = 'Tesoura'
}
    else if(computador > 0.33 && computador < 0.66){
        computador = 'Papel'
    }
    else{computador = 'Pedra'}
    
humano = prompt("Pedra, Papel ou Tesoura?");

alert(`Humano: ${humano}
Computador ${computador}`)

if(computador === humano){
    alert("Empate")
}
    else if((humano === 'Pedra' && computador === 'Tesoura') ||
         (humano === 'Tesoura' && computador === 'Papel') ||
         (humano === 'Papel' && computador === 'Pedra')){
            alert("Humano Venceu!!!")
         }
         else{
            alert("Computador Venceu!!")
         }


