$('.page-scroll').on('click', function(e){
    
    // Ambil isi href
    var href = $(this).attr('href');
    
    //Tangkap element ybs
    var elementHref = $(href);
    
    // Pindahkan Scroll
    // console.log($('html').scrollTop());

    // pindahkan scroll
    // $('html').scrollTop(700);
    $('html').animate({
        scrollTop: elementHref.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});