import ClientController from "../../controllers/ClientController.js";
const boxCard = document.querySelector('[data-element="conteudo"]');
const contProfiles = document.querySelector('[data-profile="cont"]');
const inputSearch = document.querySelector('.form-control');

function removeCards(remove) {
    remove.innerHTML = ""
}

function clientNotFound() {
    const createTag = document.createElement("div");
    createTag.innerHTML = `
        <p  class="title text-dark">Cliente não encontrado</p>
        <p class="paragrafo text-light w-75 fst-italic">Por favor, cadastre-se e acesse nossos serviços no BANK HORIZON.</p>
        <div class="card-body">
            <a href="./views/CadastraClient/cadastraClient.html" class="btn btn-success text-light fs-5">Cadastre-se</a>
        </div>
    `;
    createTag.className = "box-client-not-exist bg-info p-5 rounded-pill";
    return createTag
}

async function displayClients(clients) {
    // Limpa a boxCard antes de adicionar novos clientes
    removeCards(boxCard)
    if (clients.length === 0) {
        boxCard.appendChild(clientNotFound())
    } else {
        clients.forEach(client => {
            boxCard.appendChild(cardCreator(client.img, client.name, client.email, client.id));
        })
    }
}

function cardCreator(img, name, email, id) {
    const tagContainer = document.createElement('div');
    const cardElement = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item"></li>
                </ul>
                <div class="card-body">
                    <a href="./views/AtualizaClient/atualizaClient.html?id=${id}" class="btn btn-primary">Editar Usuário</a>
                    <button href="#" class="btn btn-danger excluir">Excluir Usuário</button>
                    <a href="./views/AtualizaClient/atualizaClient.html?id=${id}" class="btn btn-success mt-1">Acesso à Conta bancaria</a>
                </div>
            </div>
        </div>
    </div>
`;
    tagContainer.className = 'card m-3';
    tagContainer.style.maxWidth = '540px';
    tagContainer.innerHTML = cardElement;
    tagContainer.dataset.id = id;
    return tagContainer
}

boxCard.addEventListener("click", async (event) => {
    const buttonExcluir = event.target.className.split(" ").includes('excluir');
    if (buttonExcluir) {
        const pegaCardId = event.target.closest('[data-id]');
        let id = pegaCardId.dataset.id;
        await ClientController.deletaClient(id);
        render()  // Atualiza a lista após excluir
    }
});

async function searchClients() {
    const searchQuery = inputSearch.value.trim();
    const data = await ClientController.getClient(`name_like=${searchQuery}`);
    displayClients(data)
}

async function listAllClient() {
    const allClients = await ClientController.getClient()
    displayClients(allClients);
    contProfiles.innerHTML = allClients.length >= 100 ? "99+" : allClients.length;
}

const render = async () => {
    if (inputSearch.value.trim() === "") {
        listAllClient();
    } else {
        searchClients();
    }
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

inputSearch.addEventListener('input', debounce(render, 300));

render()