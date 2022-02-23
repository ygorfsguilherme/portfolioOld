
const mensagem = "“Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam.” – Martin Fowler"
const titulo = document.querySelector('#name');

function typeWrite(elemento){
    const texto = elemento.split('');
    texto.forEach(function(letra, i){   

        setTimeout(function(){
            titulo.innerHTML += letra;
        }, 40 * i)});
};

typeWrite(mensagem);