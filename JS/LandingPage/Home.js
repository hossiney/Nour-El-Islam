jQuery(document).ready(function() {
    $('.menuBtn').click(function() {
        $('header').toggleClass('collapsed')
    })
    $('.aboutUs-section .animationDiv').removeClass('start-50')
    $('.aboutUs-section .animationDiv').removeClass('end-50')
    $('.aboutUs-section .animationDiv').removeClass('opacity-0')
    
    $(' .animationDiv').removeClass('start-50')
    $(' .animationDiv').removeClass('end-50')
    $(' .animationDiv').removeClass('opacity-0')
    

    $(".owl-carousel").owlCarousel({
        items:1 ,
        loop:true,
        responsiveClass:true,
        responsive:{
            950 :{
                items:3,
            }
        }
    });

})