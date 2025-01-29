var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
   
    // Verifica se já tem um vencedor
    if (vencedor !== null) {
        return;
    }

    // Verifica se o quadrado já foi escolhido
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    //  Define o jogador
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'rgba(176, 52, 117)';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

//Funçao para mudar o jogador
function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

// Função para checar o vencedor
function checaVencedor(){
    // Obtém os elementos do tabuleiro pelos IDs (1 a 9)
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    // Verifica se a primeira linha (quadrados 1, 2 e 3) tem um vencedor
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    // Verifica se a segunda linha (quadrados 4, 5 e 6) tem um vencedor
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    // Verifica se a terceira linha (quadrados 7, 8 e 9) tem um vencedor
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    // Verifica se a primeira coluna (quadrados 1, 4 e 7) tem um vencedor
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    // Verifica se a segunda coluna (quadrados 2, 5 e 8) tem um vencedor
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    // Verifica se a terceira coluna (quadrados 3, 6 e 9) tem um vencedor
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    // Verifica se a diagonal principal (quadrados 1, 5 e 9) tem um vencedor
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    // Verifica se a diagonal secundária (quadrados 3, 5 e 7) tem um vencedor
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        exibirAlertaVencedor(quadrado1.innerHTML); // Chamada corrigida
        return;
    }
} 

//Função para mudar o vencedor
function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = 'rgba(52, 176, 117, 0.7)'; // cor de destaque para o fundo
    quadrado1.style.color = 'rgba(9, 53, 115, 0.5)'; // cor de destaque para o texto
    quadrado2.style.background = 'rgba(52, 176, 117, 0.7)';
    quadrado2.style.color = 'rgba(9, 53, 115, 0.5)';
    quadrado3.style.background = 'rgba(52, 176, 117, 0.7)';
    quadrado3.style.color = 'rgba(9, 53, 115, 0.5)';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgba(9, 53, 115, 0.5)';
        quadrado.style.color = 'rgba(9, 53, 115, 0.0)';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}

var jogador1 = {
    nome: '',
    peca: ''
};

var jogador2 = {
    nome: '',
    peca: ''
};


function solicitarNomeJogador(numeroJogador) {
    var nome = prompt("Por favor, insira o nome do Jogador " + numeroJogador);
    if (nome != null) {
        document.querySelector(".jogador" + numeroJogador + " p").textContent = nome;
    }    
}

function solicitarPecaJogador(numeroJogador) {
    var peca = '';
    while (peca.toUpperCase() !== 'X' && peca.toUpperCase() !== 'O') {
        peca = prompt("Jogador " + numeroJogador + ", por favor escolha X ou O:");
    }
    document.querySelector(".jogador" + numeroJogador + " .peca-jogador").textContent = "Peça: " + peca.toUpperCase();
    return peca.toUpperCase();
}

function exibirAlertaVencedor(nome) {
    alert("O vencedor é: " + nome);
}


window.onload = function() {
    solicitarNomeJogador(1);
    solicitarNomeJogador(2);

    var pecaJogador1 = solicitarPecaJogador(1);
    var pecaJogador2 = pecaJogador1 === 'X' ? 'O' : 'X'; // O jogador 2 recebe a peça que não foi escolhida pelo jogador 1

    // Definir a peça do Jogador 2
    document.querySelector(".jogador2 .peca-jogador").textContent = "Peça: " + pecaJogador2;

    console.log("Jogador 1 escolheu " + pecaJogador1);
    console.log("Jogador 2 é " + pecaJogador2);
}