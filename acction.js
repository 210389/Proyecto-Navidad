$(document).ready (function(){
    var topmenu = $('.menu').offset().top;

    $(document).on('scroll',function () {
        if ($(document).scrollTop() > topmenu) {
            $('.menu').addClass('menu');
        } else {
            $('.menu').removeClass('menu');
        }

    });

    $(document).ready(function(){
        $(".flecha").click(function(event) {
            event.preventDefault();
            var flechaAzul = "./img/abajo-2.png";
            $(".flecha").attr("src", flechaAzul);
        });
    });

});