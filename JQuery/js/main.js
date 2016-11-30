$( document ).ready(function() {

    $('.envelope-img').click(function() {
        if ($(this).hasClass('popup') == false) {
           $(this).parent().find('.envelope-img2').addClass('popup'); 
        }
    });
    
    $('.envelope-img2').click(function() {
        $(this).removeClass('popup'); 
    });
    
    $( window ).on('scroll load', function() {
        $('.trabalho').each(function( index ) {
            var yMeioObjeto = $(this).offset().top + $(this).outerHeight()/2;
            var yBaseJanela = $(window).scrollTop() + $(window).height();
            
            if( yBaseJanela > yMeioObjeto && $(this).hasClass('anim') == false ){
                $(this).addClass('anim');
            }
        });
    });
});


//window.addEventListener("load",mostrarElementos);
//window.addEventListener("scroll",mostrarElementos);

//function mostrarElementos {
//    var divTrabalhos = document.getElementsByClassName('trabalho');
    
//    for (var i = 0; i < divTrabalhos.length; ++i) {
//        var retanguloObjeto = divTrabalhos[i].getBoundingClientRect();
//        var objDocumento = divTrabalhos[i].ownerDocument;
//        var documento = objDocumento.documentElement;
//        var janela = getWindow( objDocumento );
//        
//        var yMeioObjeto = retanguloObjeto.top + janela.pageYOffset - documento.clientTop;
//        
//        ...
//    }
//}