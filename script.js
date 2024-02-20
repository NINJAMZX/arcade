const jogador = {
    corpo: document.querySelector("#jogador"),
    velocidadeDeMovimento: 30,
    olhando: 'direita'
}
const inimigo = {
    corpo: document.querySelector('#inimigo')
}

const andando = {
    intervaloA: false,
    intervaloD: false,
    intervaloW: false,
    intervaloS: false,
}

const pressionado = {
    d: false,
    a: false,
    w: false,
    s: false,
}

function funcaoJogador(evento) {
    let tecla = evento.key;
    console.log(getComputedStyle(jogador.corpo).left)

    if (getComputedStyle(jogador.corpo).left == getComputedStyle(inimigo.corpo).left) {
        window.alert("TOCARAM-SE!")
    }
    if (tecla == 'a') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
        jogador.corpo.style.left = novaDistancia + "px";
        jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
        jogador.olhando = 'esquerda'
    }
    if (tecla == 'd') {
        if (pressionado.d == false) {
            pressionado.d = true;
            andando.intervaloD = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                jogador.olhando = 'direita'
            }, 100);
        }
    }
    if (tecla == 'w') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
        jogador.corpo.style.top = novaDistancia + "px";
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
        }
    }
    if (tecla == 's') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
        jogador.corpo.style.top = novaDistancia + "px";
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
        }
    }

}
function disfuncaoJogador(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
    }

    if (tecla == 'd') {
        clearInterval(andando.intervaloD)
        pressionado.d = false;

        jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
    }
    if (tecla == 'w') {
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    if (tecla == 's') {
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
}

window.addEventListener('keydown', funcaoJogador)
window.addEventListener('keyup', disfuncaoJogador)

let intervalo = setInterval(() => {
}, 1000);

clearInterval(intervalo)
console.log(intervalo)