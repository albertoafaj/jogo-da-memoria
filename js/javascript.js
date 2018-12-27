
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
    }
  });




});
