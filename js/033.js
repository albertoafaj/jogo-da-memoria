
document.addEventListener('click',function (alberto) {
  const featured = $('.featured');
  featured.toggleClass('featured');
  featured2 =  featured.next().toggleClass('featured');
  const navList = $('.nav-item');
  navList.children().attr('href','#1');
  const articleItems = $('.article-item');
  articleItems.css('font-size','20px');
  const articleList = $('.article-item');
  articleList.children('ul').children().remove('.bold');
});

// document.addEventListener('change',function () {
//     const val = $('#input').val();
//     let h1 = $('.articles').children('h1');
//     h1.text(val);
//
// });


$.when( $.ready ).then(function() {

  function numberAdd(){
    let text = $(this).text();
    let number = text.length;
    $(this).text(text + " " + number)
  };

  $('p').each(numberAdd);
});

$.when( $.ready ).then(function() {
  $('#input').change(function () {
      const val = $(this).val();
      let h1 = $('.articles').children('h1');
      h1.text(val);

  });
});
