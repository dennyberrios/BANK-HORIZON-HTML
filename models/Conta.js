export class Conta {
    constructor(numeroConta, saldo, tipoConta, dataAbertura, statusConta, limiteCredito, cliente) {
        this._numeroConta = numeroConta;
        this._saldo = saldo;
        this._tipoConta = tipoConta;
        this._dataAbertura = dataAbertura;
        this._statusConta = statusConta;
        this._limiteCredito = limiteCredito;
        this._cliente = cliente;
    }

    // Getters e Setters

    // Número da Conta
    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(value) {
        this._numeroConta = value;
    }

    // Saldo
    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }

    // Tipo de Conta
    get tipoConta() {
        return this._tipoConta;
    }

    set tipoConta(value) {
        this._tipoConta = value;
    }

    // Data de Abertura
    get dataAbertura() {
        return this._dataAbertura;
    }

    set dataAbertura(value) {
        this._dataAbertura = value;
    }

    // Status da Conta
    get statusConta() {
        return this._statusConta;
    }

    set statusConta(value) {
        this._statusConta = value;
    }

    // Limite de Crédito
    get limiteCredito() {
        return this._limiteCredito;
    }

    set limiteCredito(value) {
        this._limiteCredito = value;
    }

    // Cliente
    get cliente() {
        return this._cliente;
    }

    set cliente(value) {
        this._cliente = value;
    }
}

/* 
Número da Conta (numeroConta): Identificador único da conta bancária.
Saldo (saldo): Quantia de dinheiro disponível na conta.
Tipo de Conta (tipoConta): Pode ser "corrente", "poupança", etc.
Data de Abertura (dataAbertura): Data em que a conta foi criada.
Status da Conta (statusConta): Indica se a conta está ativa, inativa ou fechada.
Limite de Crédito (limiteCredito): Valor máximo de crédito disponível, aplicável apenas para contas correntes.
*/