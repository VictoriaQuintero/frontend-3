$(document).ready(function () {
  //-----------------sidebarCLICK-----------------
  if($(window).width()<760){
    $('.nav-side').css({ transform: 'translateX(0)' }).toggle(500);

    $('header nav #sideButton').click(function () {
      $('.nav-side').toggle(500);
    });
  }else{
    $('.nav-side').show();
  }

  // ----------SLIDER----------------------
  let div = $('.div-sliders');
  let divs = div.find('div[id=sliders]').length;
  let auto = 0;
  div.css('width', divs * 100 + '%');

  $('div[id=sliders]:last').insertBefore('div[id=sliders]:first');
  div.css({ left: '-100%' });

  $('#botonRight').click(function () {
    div.animate({
      left: '-200%'
    }, 900, function () {
      $('div[id=sliders]:first').insertAfter('div[id=sliders]:last');
      div.css({ left: '-100%' });
    })
    auto = 0;
  });
  $('#botonLeft').click(function () {
    div.animate({
      left: 0
    }, 900, function () {
      $('div[id=sliders]:last').insertBefore('div[id=sliders]:first');
      div.css({ left: '-100%' });
    })
    auto = 0;
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
  let cont = 0;
  let left;
  if($(window).width()<1024){
    contenedor.css({ width: servicios * 30 + '%' });
    contenedor.css({ left: '-30%' });
  }else{
    contenedor.css({ width: servicios * 20 + '%' });
    contenedor.css({ left: '-20%' });
  }

  $('#buttonLeft').click(function () {
    contenedor.animate({
      left: 0
    }, 900, function () {
      $('div[class=servicios]:last').insertBefore('div[class=servicios]:first');
      if($(window).width()<1024){
        contenedor.css({ left: '-30%' });  
      }else{
        
        contenedor.css({ left: '-20%' });
      }
    })
    cont = 0;
  });
  $('#buttonRight').click(function () {
    if($(window).width()<1024){
      left='-60%';  
    }else{
      left='-40%';
    }
    contenedor.animate({
      left: left
    }, 900, function () {
      $('div[class=servicios]:first').insertAfter('div[class=servicios]:last');
      if($(window).width()<1024){
        contenedor.css({ left: '-30%' });  
      }else{
        
        contenedor.css({ left: '-20%' });
      }
    })
    cont = 0;
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

  // ----------------------CAMBIO DE NAV------------------------------
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('nav').height()) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    };
    
    // ---------------------CONTADOR ANIMADO---------------------------
    if($(window).scrollTop() > $(".section2").offset().top-$('.section2').height()){
      $('.Count').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-value');
  
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },
          {
            duration: 1000,
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
    
    // ---------------------ANIMACION DE LOS PLANES------------------------
    if($(window).scrollTop() > $(".section2").offset().top - $('.section2').height()){
      $('.section2 .planes img').addClass('cambio');
    }else{
      $('.section2 .planes img').removeClass('cambio');
    }
    // -------------------ANIMACION IMAGEN SECCION 3-----------------------------
    if ($(window).scrollTop() > $(".seccion3").offset().top - $('.seccion3').height()) {
      $('.seccion3 .containerImg img').addClass('move');
    } else {
      $('.seccion3 .containerImg img').removeClass('move');
    }
  });

  // -----------------Lista desplegable seccion3 ------------------------
  $('.seccion3 .menuDesple ul li p').on("click", function (e) {
    let ul = $(this).next('ul');
    $(this).closest('ul').find('ul').each((index, item) => {
      if ($(item)[0] != $(ul)[0]) {
        $(item).hide();
      }
    });
    ul.toggle(500);
  });

  // ---------------------Animar boton para hacer scroll en header----------------------------------

  $('.buttonSubeBaja button').click(function () {
    $("html, body").animate({ scrollTop: 500 }, 600);
  });

});