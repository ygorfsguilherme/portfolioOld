
const sobre = "Óla, seja bem-vindo! ao meu portifolio sou Ygor Guilherme amante da aréa de TI, sou fascinado em estudar eletronica e programação, procuro sempre entender um pouco de tudo, ampliar os meus conhecimentos. Adoro um bom desafio para resolve e coisas que me fazem pensa fora da caixa."
const titulo = document.querySelector('#name');

function typeWrite(elemento){
    const texto = elemento.split('');
    texto.forEach(function(letra, i){   

        setTimeout(function(){
            titulo.innerHTML += letra;
        }, 40 * i)});
};

typeWrite(sobre);