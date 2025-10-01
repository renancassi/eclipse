let estrelas = []; // guarda posições e brilho
let quantidade = 300;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent('c1');
    pixelDensity(0.6);
    background(0);

    // gerar estrelas com posição e velocidade de piscar
    for (let i = 0; i < quantidade; i++) {
        estrelas.push({
            x: random(width),
            y: random(height),
            brilho: random(0, 255),       // brilho inicial
            velocidade: random(0.5, 3),   // velocidade de piscar
            aumentando: random([true, false]) // se está aumentando ou diminuindo
        });
    }
}

function draw() {
    background(0); // limpa o canvas a cada frame

    // desenha estrelas
    for (let i = 0; i < estrelas.length; i++) {
        let e = estrelas[i];

        stroke(e.brilho);
        strokeWeight(random(1, 3));
        point(e.x, e.y);

        // atualiza brilho para piscar
        if (e.aumentando) {
            e.brilho += e.velocidade;
            if (e.brilho >= 255) e.aumentando = false;
        } else {
            e.brilho -= e.velocidade;
            if (e.brilho <= 0) e.aumentando = true;
        }
    }

    lua();
}

function lua() {
    fill(255, 255, 200);
    noStroke();
    circle(width / 2, height / 2, 100);

    // sombra para criar efeito de lua crescente
    fill(0);
    circle(width / 2, height / 2, 95);
}