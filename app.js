$(document).ready(function () {
  // ----------SLIDER----------------------
  let div = $('.div-sliders');
  let divs = div.find('div[id=sliders]').length;
  let auto=0;
  div.css('width', divs * 100 +'%');

  $('div[id=sliders]:last').insertBefore('div[id=sliders]:first');
  div.css({left: '-100%'});

  $('#botonRight').click(function () { 
    div.animate({
      left:'-200%'
    },900, function(){
      $('div[id=sliders]:first').insertAfter('div[id=sliders]:last');
      div.css({left: '-100%'});
    })
    auto=0;
  });
  $('#botonLeft').click(function () { 
    div.animate({
      left:0
    },900, function(){
      $('div[id=sliders]:last').insertBefore('div[id=sliders]:first');
      div.css({left: '-100%'});
    })
    auto=0;
  });
  setInterval(() => {
    auto++;
    if(auto>1){
      div.animate({
        left:'-200%'
      },900, function(){
        $('div[id=sliders]:first').insertAfter('div[id=sliders]:last');
        div.css({left: '-100%'});
      })
    }
  }, 3000);
  // ----------------------CARRUSEL------------------------
  let contenedor = $('.contenedor-servicios');
  let servicios = contenedor.find('div[class=servicios]').length;
  let cont=0;
  console.log(contenedor.css({width: servicios * 20 + '%'}));
  contenedor.css({left:'-20%'});

  $('#buttonLeft').click(function () { 
    contenedor.animate({
      left:0
    },900,function(){
      $('div[class=servicios]:last').insertBefore('div[class=servicios]:first');
      contenedor.css({left:'-20%'});
    })
    cont=0;
  });
  $('#buttonRight').click(function () { 
    contenedor.animate({
      left:'-40%'
    },900,function(){
      $('div[class=servicios]:first').insertAfter('div[class=servicios]:last');
      contenedor.css({left:'-20%'});
    }) 
    cont=0;
  });

  setInterval(() => {
    cont++;
    if(cont>1){
      contenedor.animate({
        left:'-40%'
      },900,function(){
        $('div[class=servicios]:first').insertAfter('div[class=servicios]:last');
        contenedor.css({left:'-20%'});
      }) 
    }
  }, 3000);
  // ----------------------------------------------------
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('nav').height()) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    };

    // ------------------------------------------------

    if ($(window).scrollTop() > $('.section2').height()+300) {

      $('.Count').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-value');

        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },
          {
            duration: 2000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }

          });

      });
    }

    // ---------------------------------------------
    if ($(window).scrollTop() > $('.section2').height() + 400) {
      $('.section2 .planes img').addClass('cambio');
    }else{
      $('.section2 .planes img').removeClass('cambio');
    }

    // --------------------------------------------------------------
    if($(window).scrollTop() > 1300){
      $('.seccion3 .containerImg img').addClass('move');
    }else{
      $('.seccion3 .containerImg img').removeClass('move');
    }

  });
  // -----------------------------------------
  $('.seccion3 .menuDesple ul li p').on("click", function (e) {
    let ul = $(this).next('ul');
    $(this).closest('ul').find('ul').each((index, item) => {
      if ($(item)[0] != $(ul)[0]) {
        $(item).hide();
      }
    });
    ul.toggle(500);
  });

  // -------------------------------------------------------

  $('.buttonSubeBaja button').click(function () {
    $("html, body").animate({ scrollTop: 500 }, 600);
  });

});