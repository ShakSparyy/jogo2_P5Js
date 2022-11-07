//ator
let yAtor = 370;
let xAtor = 85;
colisao = false;
pontos = 0;

function mostraAtor(){
   image(imagemDoAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 2;
  }
  if (keyIsDown(83)){
    if(podeSeMover()){
    yAtor += 2;
  }
  }
   if (keyIsDown(68)){
     if (podeSeMoverA1()){
    xAtor += 1;
     }
 }
   if (keyIsDown(65)){
     if(podeSeMoverA2()){
    xAtor -= 1;
     }
   }
}
function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 40, 50, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somDaColisao.play();
      if(pontos > 0){
      pontos -= 1
      }
    }
  }
}

function colidiu(){
  yAtor = 370;
}
function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  text(pontos,width/5,30);
  fill(0,255,127);
  
}
function marcaPonto(){
  if (yAtor < 15){
    pontos += 1;
    somDoPonto.play();
    colidiu();
    
  }
}

function podeSeMover(){
    return yAtor < 370;
}
function podeSeMoverA1(){
    return xAtor < 478;
}
function podeSeMoverA2(){
    return xAtor > -7;
}

