function abrirJanela() {
    document.getElementById('janela').style.backgroundImage = "url('janelaaberta.png')";
    document.getElementById('estado-janela').textContent = "Janela Aberta";
    document.getElementById('janela').style.width = "600px";
}

function fecharJanela() {
    document.getElementById('janela').style.backgroundImage = "url('janelafechada.png')";
    document.getElementById('estado-janela').textContent = "Janela Fechada";
    document.getElementById('janela').style.height= "500px";
    document.getElementById('janela').style.height = "500px";
}

function quebrarJanela() {
    document.getElementById('janela').style.backgroundImage = "url('janelaquebrada.png')";
    document.getElementById('estado-janela').textContent = "Janela Quebrada";
    document.getElementById('janela').style.height= "200";
    document.getElementById('janela').style.height = "600";
}