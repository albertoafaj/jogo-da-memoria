
$.when( $.ready ).then(function() {


  const quadrovirado = $('.quadrovirado');
  //numMovimentos só está servindo por enquanto para testas as entradas
  let numMovimentos = $('#numMovimentos');
  let cartasEscolhidas = [];
  //virar carta e execulta as validações de acerto
  quadrovirado.click(function() {
    let cartaEscolhida = $(this).parent().attr('alt');
    cartasEscolhidas.push(cartaEscolhida);
    $(this).removeClass('quadrovirado');
    $(this).addClass('quadro');
    //remover depois
    numMovimentos = numMovimentos.text(cartasEscolhidas);
    if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && cartasEscolhidas[0] === cartasEscolhidas[1]) {
        //mensagem de acerto que trocaremos por efeito visual
        numMovimentos.text("Você Acertou!");
        cartasEscolhidas.splice(0,2);
    } else if (cartasEscolhidas.length === 2
      //valida se são do mesmo tipo
      && cartasEscolhidas[0] !== cartasEscolhidas[1]) {
        let cartaUm = '[alt="'+cartasEscolhidas[0]+'"]'
        let cartaDois = '[alt="'+cartasEscolhidas[1]+'"]'
        let cartaUmTag = $(cartaUm).children()

        numMovimentos.text("Você Errou!");

        $(cartaUm).children().removeClass('quadro');
        $(cartaDois).children().removeClass('quadro');
        $(cartaUm).children().addClass('quadrovirado');
        $(cartaDois).children().addClass('quadrovirado');
        cartasEscolhidas.splice(0,2);


        // numMovimentos.$('[alt=cartasEscolhidas[0]]').text('hauahu'+cartasEscolhidas[0]"+);


    }
  });




});
