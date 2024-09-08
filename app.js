function loadScript(scriptName) {
    const script = document.createElement('script');
    script.src = `${scriptName}`;
    script.type = 'module';
    return document.head.appendChild(script);
}

//Identifica a página atual pelo nome do arquivo html
const page = window.location.pathname.split('/').pop();

if (page === "index.html") {
    loadScript('./views/scripts/listClient.js');
} else if (page === 'cadastraClient.html') {
    loadScript('./../scripts/cadastraClient.js');
} else if (page === 'atualizaClient.html') {
    loadScript('./../scripts/atualizaClient.js');
}