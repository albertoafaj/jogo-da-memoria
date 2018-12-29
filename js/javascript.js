
$.when( $.ready ).then(function() {

  //lista de atributos para os pares das cartas

  const listAlt = ["card01","card01","card02","card02","card03","card03",
                    "card04","card04","card05","card05","card06","card06",
                    "card07","card07","card08","card08"];

  //Tabela com o html para cada Figura

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
    teste = newListAlt.includes(numAleatorio,);
    if (teste === false) {
      newListAlt.push(numAleatorio);
      i++;
      }
  };

  // Principais paramentros
  const quadrovirado = $('.quadrovirado');
  //numMovimentos só está servindo por enquanto para testas as entradas
  let numMovimentos = $('#numMovimentos');
  let cartasEscolhidas = [];
  let idEscolhidos = [];

  //Limpa as tabelas de cartas escolhidas ao fim de cada jogada
  function limparTabelas() {
    cartasEscolhidas.splice(0,2);
    idEscolhidos.splice(0,2);
  };

  //Retorna a carta para posição virada para baixo
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

  //Efeito visual para cada acerto
  function msgAcerto() {
    let cartaUm = '[alt="'+cartasEscolhidas[0]+'"]';
    let cartaDois = '[alt="'+cartasEscolhidas[1]+'"]';
    $(cartaUm).children().css({"position": "relative", "background-color": "#9bf4d2"});
    $(cartaUm).children().animate({width: "98%", height: "70%", position: "relative", top: "15%"},300);
    $(cartaUm).children().children().animate({"font-size": "30px"},300);
    $(cartaUm).children().animate({width: "70%", height: "100%", position: "relative", top: "0%"},50);
    $(cartaUm).children().children().animate({"font-size": "40px"},50);
    $(cartaUm).children().animate({width: "92%", height: "80%", position: "relative", top: "10%"},20);
    $(cartaUm).children().children().animate({"font-size": "32px"},20);
    $(cartaUm).children().animate({width: "90%", height: "100%", position: "relative", top: "0%"},20);
    $(cartaUm).children().children().animate({"font-size": "40px"},20);
    $(cartaUm).children().animate({width: "85%", height: "90%", position: "relative", top: "5%"},20);
    $(cartaUm).children().children().animate({"font-size": "35px"},20);
    $(cartaUm).children().animate({width: "90%", height: "100%", position: "relative", top: "0%"},20);
    $(cartaUm).children().children().animate({"font-size": "40px"},20);

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
        msgAcerto();
        limparTabelas();
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && idEscolhidos[0] !== idEscolhidos[1]
      && cartasEscolhidas[0] !== cartasEscolhidas[1]) {
        numMovimentos.text("Você Errou!");
        virarCardUp();
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && cartasEscolhidas[0] === cartasEscolhidas[1]
      && idEscolhidos[0] === idEscolhidos[1]) {
        numMovimentos.text("Você Errou!");
        virarCardUp();

    }
  });





});
