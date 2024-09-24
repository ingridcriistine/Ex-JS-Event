// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("btn-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

const frases = document.getElementsByClassName('mensagem');

const btnMudarFrases = document.createElement('button');
btnMudarFrases.textContent = 'Mudar frases';
document.querySelector('.container').appendChild(btnMudarFrases);

// Evento de clique para alterar o texto das frases
btnMudarFrases.addEventListener("click", function () {
    for(var i = 0; i < frases.length; i++) {
        frases[i].textContent = `Frase ${i + 1} modificada!`;
        console.log(frases);
    }
});
