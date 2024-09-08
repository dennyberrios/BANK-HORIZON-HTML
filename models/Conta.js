export class Account {
    constructor(accountNumber, agency = '1234', balance, accountType, openingDate, accountStatus = true, creditLimit, verificationDigit = "9", clientId) {
        this._accountNumber = accountNumber;
        this._agency = agency;
        this._balance = balance;
        this._accountType = accountType;
        this._openingDate = openingDate;
        this._accountStatus = accountStatus;
        this._creditLimit = creditLimit;
        this._verificationDigit = verificationDigit;
        this._clientId = clientId;
    }

    // Getters and Setters

    // Account Number
    get accountNumber() {
        return this._accountNumber;
    }

    set accountNumber(value) {
        this._accountNumber = value;
    }

    // Agency
    get agency() {
        return this._agency;
    }

    set agency(value) {
        this._agency = value;
    }

    // Balance
    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    // Account Type
    get accountType() {
        return this._accountType;
    }

    set accountType(value) {
        this._accountType = value;
    }

    // Opening Date
    get openingDate() {
        return this._openingDate;
    }

    set openingDate(value) {
        this._openingDate = value;
    }

    // Account Status
    get accountStatus() {
        return this._accountStatus;
    }

    set accountStatus(value) {
        this._accountStatus = value;
    }

    // Credit Limit
    get creditLimit() {
        return this._creditLimit;
    }

    set creditLimit(value) {
        this._creditLimit = value;
    }

    // Verification Digit
    get verificationDigit() {
        return this._verificationDigit;
    }

    set verificationDigit(value) {
        this._verificationDigit = value;
    }
    
    // Method to display the full account number
    get fullAccountNumber() {
        return `${this._accountNumber}-${this._verificationDigit}`;
    }
    
    // clientId
    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        this._clientId = value;
    }
}



/* 
Número da Conta (numeroConta): Identificador único da conta bancária.
Saldo (saldo): Quantia de dinheiro disponível na conta.
Tipo de Conta (tipoConta): Pode ser "corrente", "poupança", etc.
Data de Abertura (dataAbertura): Data em que a conta foi criada.
Status da Conta (statusConta): Indica se a conta está ativa, inativa ou fechada.
Limite de Crédito (limiteCredito): Valor máximo de crédito disponível, aplicável apenas para contas correntes.



this._numeroConta = "12345678-9";  // Exemplo de número de conta
this._agencia = "1234";  // Exemplo de número de agência
this._saldo = 1000.50;  // Exemplo de saldo
this._tipoConta = 1;  // Exemplo de tipo de conta (1 para poupança, 2 para corrente)
this._dataAbertura = "2022-01-01";  // Exemplo de data de abertura
this._statusConta = "Ativa";  // Exemplo de status da conta
this._limiteCredito = 5000.00;  // Exemplo de limite de crédito

*/