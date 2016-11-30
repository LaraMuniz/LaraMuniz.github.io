$( document ).ready(function() {

     $('#Oi').click (function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.Apresentacao').offset().top}, 1000)
    })
    
    $('#portifolio').click (function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.tudo').offset().top}, 800)
    })
    
	$('.volte').click (function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.Apresentacao').offset().top}, 900)
    })
    
    $('#sobre').click (function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.SobreMim').offset().top}, 600)
    })
    
});