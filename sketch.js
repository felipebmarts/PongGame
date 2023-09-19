//var bola
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//raquete
let xRaquete = 5;
let yRaquete = 150;


//raquete oponente
let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velocidadeYOp;


//vel bola
let velocidadeXBola = 5;
let velocidadeYBola = 5;
let raqueteComp = 10;
let raqueteAlt = 100;

//placar
let meusPontos = 0;
let pontosOp = 0;

function setup () {
    createCanvas(600, 400);
}

function draw (){
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentoRaquete();
    colisaoRaquete();
    mostraRaqueteOp();
    movimentoRaqueteOponente();
    colisaoRaqueteOp();
    incluirPlacar();
    marcarPonto();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBola;
    yBolinha += velocidadeYBola;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBola *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBola *= -1;
    }
}

function mostraRaquete(){
    rect (xRaquete, yRaquete, raqueteComp, raqueteAlt);
}

function movimentoRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
    yRaquete = constrain(yRaquete, 0, height - raqueteAlt);
}

function colisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteComp &&
        yBolinha - raio < yRaquete + raqueteAlt && 
        yBolinha + raio > yRaquete){
        velocidadeXBola *= -1;
    }
}

function mostraRaqueteOp(){
    rect(xRaqueteOp, yRaqueteOp, raqueteComp, raqueteAlt);
}

function movimentoRaqueteOponente(){
    velocidadeYOp = yBolinha - yRaqueteOp - raqueteComp / 2 -30 ;
    yRaqueteOp += velocidadeYOp;
    yRaqueteOp = constrain(yRaqueteOp, 0, height - raqueteAlt);
}

function colisaoRaqueteOp(){
    if(xBolinha + raio > xRaqueteOp &&
        xBolinha - raio < xRaqueteOp + raqueteComp &&
        yBolinha + raio > yRaqueteOp &&
        yBolinha - raio < yRaqueteOp + raqueteAlt){
        velocidadeXBola *= -1;
    }
}
function incluirPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOp, 470, 26);
}

function marcarPonto(){
    if (xBolinha > 590) {
        meusPontos =+ 1;
    }
    if (xBolinha < 10){
        pontosOp += 1;
    }
}