import ClientController from "../../controllers/ClientController.js";
import { Client } from "../../models/Client.js";

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

async function persistData(e) {
    e.preventDefault()
    await ClientController.postClient(createClientObject());
    window.location.href = "./../../index.html";
}

formClient.addEventListener("submit", persistData);