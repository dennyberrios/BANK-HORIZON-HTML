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

const getURL = new URL(window.location);
const id = getURL.searchParams.get("id");

function validation(data) {
    const state = inputState.value = data.state;
    if (state === "") {
        return inputState.value
    } else {
        return state;
    }
}

async function populateInputs(id) {
    const data = await ClientController.getClientDetails(id);
    inputFullName.value = data.name;
    inputEmail.value = data.email;
    inputCPF.value = data.cpf;
    inputRG.value = data.rg;
    inputDate.value = data.birthDate;
    inputAddress.value = data.address;
    inputImg.value = data.img;
    inputCity.value = data.city;
    validation(data);
    inputZip.value = data.zip;
}

populateInputs(id);

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

async function updateClient(e) {
    e.preventDefault();

    await ClientController.putClient(id, createClientObject());
    window.location.href = "./../../index.html";
}

formClient.addEventListener("submit", updateClient);