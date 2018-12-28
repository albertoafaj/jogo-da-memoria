
$.when( $.ready ).then(function() {

  //lista de atributos
  const listAlt = ["card01","card01","card02","card02","card03","card03",
                    "card04","card04","card05","card05","card06","card06",
                    "card07","card07","card08","card08"];

  //lista de links para Figuras

  const listFiguras = ['<i class="fas fa-fish card"></i>',
  '<i class="fas fa-fish card"></i>',
  '<i class="fas fa-spider card"></i>',
  '<i class="fas fa-spider card"></i>',
  '<i class="fas fa-cat card"></i>',
  '<i class="fas fa-cat card"></i>',
  '<i class="fas fa-dog card"></i>',
  '<i class="fas fa-dog card"></i>',
  '<i class="fas fa-crow card"></i>',
  '<i class="fas fa-crow card"></i>',
  '<i class="fas fa-dove card"></i>',
  '<i class="fas fa-dove card"></i>',
  '<i class="fas fa-frog card"></i>',
  '<i class="fas fa-frog card"></i>',
  '<i class="fas fa-horse card"></i>',
  '<i class="fas fa-horse card"></i>'];

  //Ordem aleatória para as cartas ao carregar o jogo
  let newListAlt = [];
  let numAleatorio = 0;
  let teste = 0;
  //Cria lista de ids aleatórios para listAlt e listFiguras
  for (var i = 0; i < listAlt.length; ) {
    numAleatorio = Math.floor(Math.random() * listAlt.length);
    // console.log(numAleatorio);
    teste = newListAlt.includes(numAleatorio,);
    // console.log(teste);
    if (teste === false) {
      newListAlt.push(numAleatorio);
      i++;
      }
  };


  const quadrovirado = $('.quadrovirado');
  //numMovimentos só está servindo por enquanto para testas as entradas
  let numMovimentos = $('#numMovimentos');
  let cartasEscolhidas = [];
  let idEscolhidos = [];

  function limparTabelas() {
    cartasEscolhidas.splice(0,2);
    idEscolhidos.splice(0,2);
  };

  function virarCardUp() {
    let cartaUm = '[alt="'+cartasEscolhidas[0]+'"]';
    let cartaDois = '[alt="'+cartasEscolhidas[1]+'"]';
    setTimeout(function(){
      $(cartaUm).children().removeClass('quadro');
      $(cartaDois).children().removeClass('quadro');
      $(cartaUm).children().addClass('quadrovirado');
      $(cartaDois).children().addClass('quadrovirado');
    }, 500);
    limparTabelas();
  };


  //virar carta e execulta as validações de acerto
  quadrovirado.click(function() {
    let cartaEscolhida = $(this).parent().attr('alt');
    let idEscolhido = $(this).parent().attr('id');

    if ($(this).hasClass('quadro') === false) {
      cartasEscolhidas.push(cartaEscolhida);
      idEscolhidos.push(idEscolhido);
    };
    $(this).removeClass('quadrovirado');
    $(this).addClass('quadro');
    //remover depois
    numMovimentos = numMovimentos.text(idEscolhidos);

    if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && cartasEscolhidas[0] === cartasEscolhidas[1]
      && idEscolhidos[0] !== idEscolhidos[1]) {
        //mensagem de acerto que trocaremos por efeito visual
        numMovimentos.text("Você Acertou!");
        limparTabelas();
        // cartasEscolhidas.splice(0,2);
        // idEscolhidos.splice(0,2);
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && idEscolhidos[0] !== idEscolhidos[1]
      && cartasEscolhidas[0] !== cartasEscolhidas[1]) {
        // let cartaUm = '[alt="'+cartasEscolhidas[0]+'"]';
        // let cartaDois = '[alt="'+cartasEscolhidas[1]+'"]';
        numMovimentos.text("Você Errou!");
        virarCardUp();
        // setTimeout(function(){
        //   $(cartaUm).children().removeClass('quadro');
        //   $(cartaDois).children().removeClass('quadro');
        //   $(cartaUm).children().addClass('quadrovirado');
        //   $(cartaDois).children().addClass('quadrovirado');
        // }, 500);
        // limparTabelas();
        // cartasEscolhidas.splice(0,2);
        // idEscolhidos.splice(0,2);
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && cartasEscolhidas[0] === cartasEscolhidas[1]
      && idEscolhidos[0] === idEscolhidos[1]) {
        // let cartaUm = '[alt="'+cartasEscolhidas[0]+'"]';
        // let cartaDois = '[alt="'+cartasEscolhidas[1]+'"]';
        // numMovimentos.text("Você Errou!");
        virarCardUp();
        // setTimeout(function(){
        //   $(cartaUm).children().removeClass('quadro');
        //   $(cartaDois).children().removeClass('quadro');
        //   $(cartaUm).children().addClass('quadrovirado');
        //   $(cartaDois).children().addClass('quadrovirado');
        // }, 500);
        // limparTabelas();
        // cartasEscolhidas.splice(0,2);
        // idEscolhidos.splice(0,2);
    }
  });





});
