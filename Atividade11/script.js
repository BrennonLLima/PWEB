var funcionario1 = new Object();
    funcionario1.matricula = '0001234';
    funcionario1.nome = 'Eduardo';
    funcionario1.funcao = 'Auxiliar';

var funcionario2 = {};
    funcionario2.matricula = '003234';
    funcionario2.nome = 'Jessica';
    funcionario2.funcao = 'Programador';

var funcionario3 = {
    matricula: '00232332',
    nome: 'Arthur',
    funcao: 'Faxineiro',
}

alert(`Funcionário 1:
Matricula: ${funcionario1.matricula}
Nome: ${funcionario1.nome}
Função: ${funcionario1.funcao}`)

alert(`Funcionário 2:
Matricula: ${funcionario2.matricula}
Nome: ${funcionario2.nome}
Função: ${funcionario2.funcao}`)

alert(`Funcionário 3:
Matricula: ${funcionario3.matricula}
Nome: ${funcionario3.nome}
Função: ${funcionario3.funcao}`)