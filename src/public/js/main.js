$(document).ready(function(){
    console.log('hola');
    $('nav a').each(function(index, elemento){
        $(this).css({
          'top': '-200px'          
        });
         $(this).animate({
          'top': '0'
        },1000 + (index * 100));
   });

   if( $(window).width() > 800) {
    $('header .textos').css({
        'opacity': '0',
        'margin-top': '0'
    });
    $('header .textos').animate({
        'opacity': '1',
        'margin-top': '-52px'
    }, 2000);
}

    // cuenta regresiva
    $('.cuenta-regresiva').countdown('2020/06/10 09:00:00' ,function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
        
    });
});


