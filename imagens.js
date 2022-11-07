let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//sons do jogo
let somDatrilha;
let somDaColisao;
let somDoPonto

function preload(){
  imagemDaEstrada = loadImage("IMAGENS/estrada.png");
 imagemDoAtor = loadImage("IMAGENS/ator-1.png");
  imagemCarro = loadImage("IMAGENS/carro-1.png");
  imagemCarro2 = loadImage("IMAGENS/carro-2.png");
  imagemCarro3 = loadImage("IMAGENS/carro-3.png");
  ator2 = loadImage("IMAGENS/ator-2.png");
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  
  
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
  


}

