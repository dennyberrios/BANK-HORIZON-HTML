import ClientController from "../../controllers/ClientController.js";

(async () => {

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


    const boxCard = document.querySelector('[data-element="conteudo"]');
    const contProfiles = document.querySelector('[data-profile="cont"]');

    boxCard.addEventListener("click", async (event) => {
        const buttonExcluir = event.target.className.split(" ").find(classe => classe === "excluir") === 'excluir';
        if (buttonExcluir) {
            const pegaCardId = event.target.closest('[data-id]');
            let id = pegaCardId.dataset.id;
            await ClientController.deletaClient(id);
        }
    });

    async function listClient() {
        ClientController.getClient().then(response => {
            response.forEach(element => {
                boxCard.appendChild(cardCreator(element.img, element.name, element.email, element.id))
                contProfiles.innerHTML = element.id >= 100 ? "99+" : element.id;
            });
        });
    }

    const render = () => {
        listClient();
    }

    render();

})();