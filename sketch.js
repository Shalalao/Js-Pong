//variaveis do jogo

//tamanho da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio= diametro / 2;

//velocida da bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 6;

//tamanho da raquete
let xRaquete = 5
let yRaquete = 150
let larguraRaquete = 10
let alturaRaquete = 90
let colidiu = false

//Raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

//placar de pontos
let meusPontos = 0
let pontosOponente = 0

//funçõesa do jogo

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  //Ações da raquete
  mostrarBolinha()
  velocidadeBolinha()
  
  
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1
  }  
  
  //Ações raquete
  
  //verificarColisãoComRaquete()
  //verificarColisãoComRaqueteOponente()
  mostrarRaquete(xRaquete, yRaquete)
  movimentarMinhaRaquete()
  verificaColisaoDaRaquete(xRaquete, yRaquete)
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente()
  //verificaColisaoDaRaquete(xRaqueteOponente, yRaqueteOponente)
  incluirPlacar()
  marcaPonto()
}

//funções dos elementos

function mostrarBolinha(){
  
  circle(xBolinha,yBolinha,diametro);
  
}

function velocidadeBolinha(){
  
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
  
}

function mostrarRaquete(x,y){
  
  rect(x,y,larguraRaquete,alturaRaquete)
}

function movimentarMinhaRaquete(){
  
  if(keyIsDown(UP_ARROW)){
    
    yRaquete -= 10
    
  }
  if(keyIsDown(DOWN_ARROW)){
    
    yRaquete += 10
    
  }
}

function verificarColisãoComRaquete(){
  if(xBolinha - raio < xRaquete + larguraRaquete &&
yBolinha - raio < yRaquete + alturaRaquete &&
yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1
  }
}

function verificaColisaoDaRaquete(x,y){
  colidiu = collideRectCircle(x,y,larguraRaquete,alturaRaquete, xBolinha,yBolinha,raio);
  if(colidiu){ 
    velocidadexBolinha *= -1
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete / 2 -30
  
  yRaqueteOponente += velocidadeYOponente  
}

function incluirPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}


function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
  }
}