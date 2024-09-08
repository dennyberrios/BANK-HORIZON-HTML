import { applyCurrencyMask } from "../../assets/js/masks.js";
import ClientController from "../../controllers/ClientController.js";
import AccountController from "../../controllers/AccountController.js";
import { Client } from "../../models/Client.js";
import { Account } from "../../models/Conta.js";

const formClient = document.querySelector('[data-form="form"]');
const inputFullName = document.querySelector('#inputName4');
const inputEmail = document.querySelector('#inputEmail4');
const inputCPF = document.querySelector('#inputCpf');
const inputRG = document.querySelector('#inputRg');
const inputDate = document.querySelector('#inputDate');
const inputAddress = document.querySelector('#inputAddress');
const inputImg = document.querySelector('#inputImg');
const inputCity = document.querySelector('#inputCity');
const inputState = document.querySelector('#inputState');
const inputZip = document.querySelector('#inputZip');
const inputBalance = document.querySelector('#inputDeposit');
const inputAccountType = document.querySelector('#inputAccount');
const inputCreditLimit = document.querySelector('#inputCreditLimit');

const inputs = document.querySelectorAll('input');

function incrementAccountNumber(accountArray) {
    for (let index = accountArray.length - 1; index >= 0; index--) {
        accountArray[index]++;

        if (accountArray[index] < 10) {
            break;
        }

        accountArray[index] = 0;
    }

    return accountArray;
}

async function generateNextAccountNumber() {
    const accountData = await AccountController.getAccount();

    if (accountData.length === 0) {
        return "00000001";
    } else if (accountData.length >= 1) {
        const selectClient = accountData[accountData.length - 1];
        const arrayAccount = selectClient._accountNumber.split("");
        return incrementAccountNumber(arrayAccount).join('');
    }
}

function validationDate(params) {
    if (params > 9) {
        return params
    } else {
        return "0" + params
    }
}

function getDate() {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = validationDate((date.getUTCMonth() + 1));
    const day = validationDate((date.getUTCDate()));

    const fullDate = `${year}-${month}-${day}`;

    return fullDate
}

async function createAccount() {
    const accountData = new Account();
    const nexAccountNumber = await generateNextAccountNumber();
    const clientDataId = await ClientController.getClient();
    let getClientById;

    if (clientDataId.length === 0) {
        getClientById = 1;
    } else if (clientDataId.length >= 1) {
        getClientById = clientDataId[clientDataId.length - 1].id;
    }

    accountData.accountNumber = nexAccountNumber;
    accountData.openingDate = getDate();
    accountData.balance = inputBalance.value;
    accountData.accountType = inputAccountType.value;
    accountData.creditLimit = inputCreditLimit.value;
    accountData.clientId = getClientById;

    return accountData;
}

function createClientObject() {
    return new Client(
        inputFullName.value,
        inputEmail.value,
        inputCPF.value,
        inputRG.value,
        inputDate.value,
        inputAddress.value,
        inputImg.value,
        inputCity.value,
        inputState.value,
        inputZip.value
    );
}

inputs.forEach(element => {
    if (element.dataset.preco === "preco") {
        applyCurrencyMask(element);
    }
});

async function persistData(e) {
    e.preventDefault();

    try {
        const clientResponse = await ClientController.postClient(createClientObject());

        const createNewAccount = await createAccount();
        const accountResponse = await AccountController.postAccount(createNewAccount);

         window.location.href = "./../../index.html";

    } catch (error) {
        console.error("Erro ao criar cliente ou conta:", error);
    }
}

formClient.addEventListener("submit", persistData);