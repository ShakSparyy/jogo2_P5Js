
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  mostraAtor2();
  movimentaAtor2();
  posiçaoInicialCarro();
  verificaColisao();
  verificaColisao2();
  incluirPontos();
  incluirPontos2();
  marcaPonto();
  marcaPonto2();
 
}



