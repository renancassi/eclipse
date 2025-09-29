function setup() {
    createCanvas(400, 400);
    background(0);
    noLoop(); // só desenha uma vez
}

function draw() {
    estrelas(100)
    lua()
}

function estrelas(quantidade) {
    // estrelas
    for (let i = 0; i < quantidade; i++) {
        stroke(255);
        strokeWeight(random(1, 3));
        point(random(width), random(height));
    }
}

function lua() {
    // lua cheia
    fill(255, 255, 200); // cor da lua
    noStroke();
    circle(width / 2, height / 2, 100);

    // sombra para criar lua crescente
    fill(0); // mesma cor do fundo
    circle(width / 2 + 5, height / 2, 100);
    // crateras
    fill(200);
    circle(width / 2 - 15, height / 2 - 10, 15);
    circle(width / 2 + 20, height / 2 + 5, 10);
    circle(width / 2, height / 2 + 20, 8);
}