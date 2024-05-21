class BancoConta {
    constructor(clienteNome, bancoNome, contaNumero, contaSaldo) {
        this.clienteNome = clienteNome;
        this.bancoNome = bancoNome;
        this.contaNumero = contaNumero;
        this.contaSaldo = contaSaldo;
    }

    getClienteNome() {
        return this.clienteNome;
    }

    setClienteNome(nome) {
        this.clienteNome = nome;
    }

    getBancoNome() {
        return this.bancoNome;
    }

    setBancoNome(banco) {
        this.bancoNome = banco;
    }

    getContaNumero() {
        return this.contaNumero;
    }

    setContaNumero(numero) {
        this.contaNumero = numero;
    }

    getContaSaldo() {
        return this.contaSaldo;
    }

    setContaSaldo(saldo) {
        this.contaSaldo = saldo;
    }
}

class ContaCorrenteEspecial extends BancoConta {
    constructor(clienteNome, bancoNome, contaNumero, contaSaldo, limiteEspecial) {
        super(clienteNome, bancoNome, contaNumero, contaSaldo);
        this.limiteEspecial = limiteEspecial;
    }

    getLimiteEspecial() {
        return this.limiteEspecial;
    }

    setLimiteEspecial(limiteEspecial) {
        this.limiteEspecial = limiteEspecial;
    }
}

class ContaPoupancaComVencimento extends BancoConta {
    constructor(clienteNome, bancoNome, contaNumero, contaSaldo, vencimentoData) {
        super(clienteNome, bancoNome, contaNumero, contaSaldo);
        this.vencimentoData = vencimentoData;
    }

    getVencimentoData() {
        return this.vencimentoData;
    }

    setVencimentoData(vencimentoData) {
        this.vencimentoData = vencimentoData;
    }
}

var clienteNome = prompt("Informe o nome do cliente:");
var bancoNome = prompt("Informe o nome do banco:");
var contaNumero = prompt("Informe o número da conta:");
var contaSaldo = parseFloat(prompt("Informe o saldo:"));

var limiteEspecial = parseFloat(prompt("Informe o limite especial da conta corrente:"));
var contaCorrente = new ContaCorrenteEspecial(clienteNome, bancoNome, contaNumero, contaSaldo, limiteEspecial);

var vencimentoData = prompt("Informe a data de vencimento da conta poupança:");
var contaPoupanca = new ContaPoupancaComVencimento(clienteNome, bancoNome, contaNumero, contaSaldo, vencimentoData);

alert("Dados da conta corrente especial:\nNome do Banco: " + contaCorrente.getBancoNome() + "\nNome do Cliente: " +
    contaCorrente.getClienteNome() + "\nNúmero da Conta: " + contaCorrente.getContaNumero() + "\nSaldo: " + contaCorrente.getContaSaldo() +
    "\nLimite Especial: " + contaCorrente.getLimiteEspecial());

alert("Dados da conta poupança com vencimento:\nNome do Banco: " + contaPoupanca.getBancoNome() + "\nNome do Cliente: " +
    contaPoupanca.getClienteNome() + "\nNúmero da Conta: " + contaPoupanca.getContaNumero() + "\nSaldo: " + contaPoupanca.getContaSaldo() +
    "\nData de Vencimento: " + contaPoupanca.getVencimentoData());
