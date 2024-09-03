const alertSpan = document.querySelector('.alert');
const inputName = document.querySelector('.inputName');

const inputPorcento = document.querySelector('.porcento');
const inputProgresso = document.querySelector('.progresso');

function contaOlengthDoInput(event) {
    const conta = event * 10;
    return conta
}

inputName.addEventListener("input", () => {
    
    inputPorcento.innerHTML = contaOlengthDoInput(inputName.value.length) + "%";
    inputProgresso.style.width = `${contaOlengthDoInput(inputName.value.length)}%`;

    let input = inputName.value.length;

    if (input >=10) {
        inputName.style.border = "2px solid tomato";
        alertSpan.innerHTML = "Você atingiu o maximo de 10 caracteres.";
        alertSpan.style.color = "tomato";
    } else if(input >= 5){
        inputName.style.border = "2px solid green";
        alertSpan.innerHTML = "";
    } else if(input < 5){
        inputName.style.border = "2px solid red";
        alertSpan.innerHTML = "O campo deve conter mais de 5 caracteres.";
    }
});