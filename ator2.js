//Ator2
let yAtor2 = 370;
let xAtor2 = 415;
pontos2 = 0;

function mostraAtor2(){
  image(ator2,xAtor2,yAtor2,30,30);
}
function movimentaAtor2(){
  if (keyIsDown(UP_ARROW)){
    yAtor2 -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover2()){
    yAtor2 += 2;
  }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMover3()){
    xAtor2 += 1;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
     if(podeSeMover4()){
    xAtor2 -= 1;
     }
  }
}
function verificaColisao2(){
  
  for (let i = 0; i < imagemCarros.length; i++){
    colisao2 = collideRectCircle(xCarros[i], yCarros[i], 40, 50, xAtor2, yAtor2, 15)
    if (colisao2){
      colidiu2();
      somDaColisao.play();
      if(pontos2 > 0){
      pontos2 -= 1
      }
    
    }
  }
}

function colidiu2(){
  yAtor2 = 370;
}

function incluirPontos2(){
  textAlign(CENTER);
  textSize(25);
  text(pontos2,width/1.3,30);
  
}
function marcaPonto2(){
  if (yAtor2 < 15){
    pontos2 += 1;
      somDoPonto.play();
    colidiu2();
    
  }
}
function podeSeMover2(){
    return yAtor2 < 370;
}
function podeSeMover3(){
    return xAtor2 < 478;
}
function podeSeMover4(){
    return xAtor2 > -7;
}





