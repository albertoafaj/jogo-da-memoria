
$.when( $.ready ).then(function() {

  //lista de atributos para os pares das cartas

  const listAlt = ["card01","card01","card02","card02","card03","card03",
                    "card04","card04","card05","card05","card06","card06",
                    "card07","card07","card08","card08"];

  //Tabela com o html para cada Figura

  const listFiguras = [
  '<i class="fas fa-fish card"></i>',
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

  //Tabela com ordem aleatória para as cartas ao carregar o jogo
  let newListAlt = [];
  //Cria lista de ids aleatórios para listAlt e listFiguras
  let numAleatorio = 0;
  let teste = 0;
  for (var i = 0; i < listAlt.length; ) {
    numAleatorio = Math.floor(Math.random() * listAlt.length);
    teste = newListAlt.includes(numAleatorio,);
    if (teste === false) {
      newListAlt.push(numAleatorio);
      i++;
      }
  };

  //Distribui aleatoriamente os atributos e trechos html contidos em listAlt e listFiguras
  for (var i = 0; i < listAlt.length; i++) {
    $('[id="'+(i+1)+'"]').attr('alt',listAlt[newListAlt[i]]);
    $('[id="'+(i+1)+'"]').children().html(listFiguras[newListAlt[i]]);
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
    let cartaUm = '[id="'+idEscolhidos[0]+'"]';
    let cartaDois = '[id="'+idEscolhidos[1]+'"]';
    setTimeout(function(){
      $(cartaUm).children().removeClass('quadro');
      $(cartaDois).children().removeClass('quadro');
      $(cartaUm).children().addClass('quadrovirado');
      $(cartaDois).children().addClass('quadrovirado');
      $(cartaUm).children().removeAttr("style");
      $(cartaDois).children().removeAttr("style");
    }, 500);
    limparTabelas();

  };

    // function (width,height,top,time) {
    //
    // };
    // const efeitosAcerto = {
    //   num_loops = 6,
    //   alt_width = ["98%","70%","92%","90%","85%","90%"],
    //   alt_heigth = ["70%","100%","80%","100%","90%","100%"],
    //   alt_top = ["15%","0%","10%","0%","5%","0%"],
    //   time = [500,50,50,50,50,50]
    //   alt_font = ["30px","40px","32px","40px","35px","40px"]
    //
    //
    //
    // };

  //Efeito visual para cada acerto
  function msgAcerto() {
    // let cartaUm = '[id="'+idEscolhidos[0]+'"]';
    // let cartaDois = '[id="'+idEscolhidos[1]+'"]';
    for (var i = 0; i < idEscolhidos.length; i++) {
      $('[id="'+idEscolhidos[i]+'"]').children().css({"position": "relative", "background-color": "#9bf4d2"});
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "98%", height: "70%",  top: "15%"},500);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "30px"},500);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "70%", height: "100%",  top: "0%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "40px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "92%", height: "80%",  top: "10%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "32px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "90%", height: "100%",  top: "0%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "40px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "85%", height: "90%",  top: "5%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "35px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "90%", height: "100%",  top: "0%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "40px"},50);
    };};


  function rotate ($seletor, degree ,time){
        $seletor.css({
        '-webkit-transform' : 'rotate(' + degree + 'deg)',
        '-moz-transform'    : 'rotate(' + degree + 'deg)',
        '-ms-transform'     : 'rotate(' + degree + 'deg)',
        '-o-transform'      : 'rotate(' + degree + 'deg)',
        'transform'         : 'rotate(' + degree + 'deg)'});
    };

  //Efeito visual para cada erro
  function msgErro() {
    for (var i = 0; i < idEscolhidos.length; i++) {
      $('[id="'+idEscolhidos[i]+'"]').children().css({"position": "relative", "background-color": "red"});
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "98%", height: "70%",  top: "15%"},500);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "30px"},500);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "70%", height: "100%",  top: "0%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "40px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "92%", height: "80%",  top: "10%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "32px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "90%", height: "100%",  top: "0%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "40px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "85%", height: "90%",  top: "5%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "35px"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().animate({width: "90%", height: "100%",  top: "0%"},50);
      $('[id="'+idEscolhidos[i]+'"]').children().children().animate({"font-size": "40px"},50);
    };
  };

  //vira a carta e execulta as validações
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
    numMovimentos = numMovimentos.text(cartaEscolhida);

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
        msgErro();
        virarCardUp();
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && cartasEscolhidas[0] === cartasEscolhidas[1]
      && idEscolhidos[0] === idEscolhidos[1]) {
        msgErro();
        virarCardUp();

    }
  });





});
