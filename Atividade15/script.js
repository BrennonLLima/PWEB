function validarDados(){

    var nome = document.form1.elements[0];
    var email = document.form1.elements[1];
    var comentario = document.form1.elements[2];
    var sim = document.form1.elements.sim;
    var nao = document.form1.elements.nao;


    if(nome.value=="" || nome.value.length < 10){
        alert("Preencha o campo nome corretamente");
        nome.focus();
        return false;
    }
    if(email.value=="" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        alert("Preencha o campo E-mail corretamente");
        email.focus();
        return false;
    }
    if(comentario.value =="" || comentario.value.length < 20){
        alert("Preencha o campo Comentario corretamente")
        comentario.focus();
        return false;
    }

    if(!sim.checked && !nao.checked){
        alert("Preencha o campo Pesquisa corretamente");
        return false;
    }
    else{
        if(sim.checked)
            alert("Que bom que você voltou a visitar esta página")
        else
            alert("Volte sempre à esta página!")
    }

    return true;

}

