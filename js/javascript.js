$.when($.ready).then(function() {

  //lista de atributos para os pares das cartas

  const listAlt = ["card01", "card01", "card02", "card02", "card03", "card03",
    "card04", "card04", "card05", "card05", "card06", "card06", "card07",
    "card07", "card08", "card08"
  ];

  //Tabela com o html para cada carta

  const listFiguras = [
    '<i class="fas fa-fish card"></i>', '<i class="fas fa-fish card"></i>',
    '<i class="fas fa-spider card"></i>', '<i class="fas fa-spider card"></i>',
    '<i class="fas fa-cat card"></i>', '<i class="fas fa-cat card"></i>',
    '<i class="fas fa-dog card"></i>', '<i class="fas fa-dog card"></i>',
    '<i class="fas fa-crow card"></i>', '<i class="fas fa-crow card"></i>',
    '<i class="fas fa-dove card"></i>', '<i class="fas fa-dove card"></i>',
    '<i class="fas fa-frog card"></i>', '<i class="fas fa-frog card"></i>',
    '<i class="fas fa-horse card"></i>', '<i class="fas fa-horse card"></i>'
  ];

  //Tabela que recebe a ordem aleatória para as cartas ao carregar o jogo
  let newListAlt = [];
  //Cria lista de ids aleatórios e armazena em newListAlt
  let numAleatorio = 0;
  let teste = 0;
  for (var i = 0; i < listAlt.length;) {
    numAleatorio = Math.floor(Math.random() * listAlt.length);
    teste = newListAlt.includes(numAleatorio, );
    if (teste === false) {
      newListAlt.push(numAleatorio);
      i++;
    }
  };

  //Distribui aleatoriamente os atributos e trechos html contidos em listAlt e listFiguras
  for (var i = 0; i < listAlt.length; i++) {
    $('[id="' + (i + 1) + '"]').attr('alt', listAlt[newListAlt[i]]);
    $('[id="' + (i + 1) + '"]').children().html(listFiguras[newListAlt[i]]);
  };

  // Principais paramentros
  var quadrovirado = $('.quadrovirado');
  let cartasEscolhidas = [];
  let idEscolhidos = [];
  let numMovimentos = $('#numMovimentos');
  var numMovimentos2 = $('#numMovimentos2');
  let contEstrelas = $('#contEstrelas');
  let numAcertos = 0;
  var numMoves = 1;

  //Limpa as tabelas de cartas escolhidas ao fim de cada jogada
  function limparTabelas() {
    cartasEscolhidas.splice(0, 2);
    idEscolhidos.splice(0, 2);
  };

  //Retorna a carta para posição virada para baixo
  function virarCardUp() {
    let cartaUm = '[id="' + idEscolhidos[0] + '"]';
    let cartaDois = '[id="' + idEscolhidos[1] + '"]';
    setTimeout(function() {
      $(cartaUm).children().removeClass('quadro');
      $(cartaDois).children().removeClass('quadro');
      $(cartaUm).children().addClass('quadrovirado');
      $(cartaDois).children().addClass('quadrovirado');
      $(cartaUm).children().removeAttr("style");
      $(cartaDois).children().removeAttr("style");
    }, 500);
    limparTabelas();

  };

  //Efeito visual para cada acerto
  function msgAcerto() {
    for (var i = 0; i < idEscolhidos.length; i++) {
      $('[id="' + idEscolhidos[i] + '"]').children().css({
        "position": "relative",
        "background-color": "#9bf4d2"
      });
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "98%",
        height: "70%",
        top: "15%"
      }, 500);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "30px"
      }, 500);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "70%",
        height: "100%",
        top: "0%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "40px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "92%",
        height: "80%",
        top: "10%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "32px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "90%",
        height: "100%",
        top: "0%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "40px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "85%",
        height: "90%",
        top: "5%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "35px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "90%",
        height: "100%",
        top: "0%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "40px"
      }, 50);
    };
  };

  //Efeito visual para cada erro
  function msgErro() {
    for (var i = 0; i < idEscolhidos.length; i++) {
      $('[id="' + idEscolhidos[i] + '"]').children().css({
        "position": "relative",
        "background-color": "red"
      });
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "98%",
        height: "70%",
        top: "15%"
      }, 500);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "30px"
      }, 500);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "70%",
        height: "100%",
        top: "0%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "40px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "92%",
        height: "80%",
        top: "10%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "32px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "90%",
        height: "100%",
        top: "0%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "40px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "85%",
        height: "90%",
        top: "5%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "35px"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().animate({
        width: "90%",
        height: "100%",
        top: "0%"
      }, 50);
      $('[id="' + idEscolhidos[i] + '"]').children().children().animate({
        "font-size": "40px"
      }, 50);
    };
  };

  //Tabela com o html das estrelas
  iconesEstrelas = ['<i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>',
    '<i class="fas fa-star acerto"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>',
    '<i class="fas fa-star acerto"></i> <i class="fas fa-star acerto"></i> <i class="far fa-star"></i>',
    '<i class="fas fa-star acerto"></i> <i class="fas fa-star acerto"></i> <i class="fas fa-star acerto"></i>',
  ];

  //Define quantas estrelas o jogador ganha

  function estrelas() {
    let estrelas = 3;
    let numErros = numMoves - numAcertos;
    let between = function(x,y) {
      return
    }
    if (numErros >=4 && numErros < 9 ) {
      estrelas = 2;
      iconesEstrelasHtml(estrelas);
    } else if (numErros >=9 && numErros < 13 ) {
      estrelas = 1;
      iconesEstrelasHtml(estrelas);
    } else if (numErros >=13) {
      estrelas = 0;
      iconesEstrelasHtml(estrelas);
    }
  };

  //Insere o Html com as gravuras de estrelas
  function iconesEstrelasHtml(estrelas) {
    if (estrelas === 0) {
      $('#titulo2').children().first().html(iconesEstrelas[0]);
    } else if (estrelas === 1) {
      $('#titulo2').children().first().html(iconesEstrelas[1]);
    } else if (estrelas === 2) {
      $('#titulo2').children().first().html(iconesEstrelas[2]);
    } else if (estrelas === 3) {
      $('#titulo2').children().first().html(iconesEstrelas[3]);
    };
  };

//conta jogada

  function contaJogadas() {
    numMovimentos = numMovimentos.text(numMoves + ' Movimentos');
    numMovimentos2 = numMovimentos2.text(numMoves + ' Movimentos');
    numMoves++;
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
    iconesEstrelasHtml();
    if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      &&
      cartasEscolhidas[0] === cartasEscolhidas[1] &&
      idEscolhidos[0] !== idEscolhidos[1]) {
      msgAcerto();
      numAcertos++;
      msgEstrelas();
      estrelas();
      limparTabelas();
      fimJogo();
      contaJogadas();
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      &&
      idEscolhidos[0] !== idEscolhidos[1] &&
      cartasEscolhidas[0] !== cartasEscolhidas[1]) {
      msgErro();
      virarCardUp();
      contaJogadas();
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      &&
      cartasEscolhidas[0] === cartasEscolhidas[1] &&
      idEscolhidos[0] === idEscolhidos[1]) {
      msgErro();
      virarCardUp();
      contaJogadas();

    }
  });

  //Reinicia o jogo
  function refreshPage() {
    window.location.reload();
  };

  //Reinicia o jogo ao clicar no icone
  $('#refresh').click(function() {
    refreshPage();
  });

  //Reinicia o jogo ao clicar no botão
  $('.button').click(function() {
    refreshPage();
    // clearInterval(timer);
  });

  //Finaliza o jogo
  function fimJogo() {
    if (numAcertos === 8) {
      $('body').children().first().addClass('sumir');
      $('body').children().last().removeClass('sumir');
      $('body').children().last().addClass('page2');
    };
  };

  //Gera mensagem com numero de estrelas ganhas ao fim do jogo
  function msgEstrelas() {
    numEstrelas = Math.round(numAcertos / (numMoves) * 3)
    if (numEstrelas === 0) {
      contEstrelas = contEstrelas.text('. E não ganhou estrelas.');
    } else if (numEstrelas === 1) {
      contEstrelas = contEstrelas.text('. E ganhou ' + numEstrelas + ' estrela.');
    } else if (numEstrelas > 1) {
      contEstrelas = contEstrelas.text('. E ganhou ' + numEstrelas + ' estrelas.');
    };
  };

//Temporizador

var tempo = 0;
var temporizador = $('#temporizador');
var tempoFinal = $('#tempoFinal');

function Timer () {
  var segundos = 0;
  var timer = setInterval(function() {
      temporizador = temporizador.text(' ' + segundos + ' (s)' );
      segundos++;
      if(numAcertos === 8) {
          var tempo = segundos;
          tempoFinal = tempoFinal.text('. Em '+tempo+' segundos');
          clearInterval(timer);
      }
  }, 1000);
}

var timer = new Timer();



});
