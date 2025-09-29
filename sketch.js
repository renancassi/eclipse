function setup() {
    createCanvas(400, 400);
    background(0);
    //noLoop(); // só desenha uma vez
}

function draw() {
    estrelasBrancas()
    estrelasPretas()
    lua()
}

function estrelasBrancas() {
    // estrelas
    stroke(255);
    strokeWeight(random(1, 3));
    point(random(width), random(height));
}

function estrelasPretas() {
    // estrelas
    stroke(0);
    strokeWeight(random(1, 3));
    point(random(width), random(height));
}

function lua() {
    // lua cheia
    fill(255, 255, 200); // cor da lua
    noStroke();
    circle(width / 2, height / 2, 100);

    // sombra para criar lua crescente
    fill(0); // mesma cor do fundo
    circle(width / 2 + 20, height / 2, 100);

}