var clicount = 5;

if (window.innerWidth > 960) {


$('.pass1 img').click(function() {
    clicount++;
    $(".pass1").css({'z-index': clicount});
    $(".pass1").addClass(" active");
    $('.active .content').css({'display': 'flex'});
    $('.active .content').delay(1200).animate({'opacity': "1"}, 300);
})

$('.pass2 img').click(function() {
    clicount++;
    $(".pass2").css({'z-index': clicount});
    $(".pass2").addClass(" active");
    $('.active .content').css({'display': 'flex'});
    $('.active .content').delay(1200).animate({'opacity': "1"}, 300);
})

$('.pass3 img').click(function() {
    clicount++;
    $(".pass3").css({'z-index': clicount});
    $(".pass3").addClass(" active");
    $('.active .content').css({'display': 'flex'});
    $('.active .content').delay(1200).animate({'opacity': "1"}, 300);
})

$('.pass4 img').click(function() {
    clicount++;
    $(".pass4").css({'z-index': clicount});
    $(".pass4").addClass(" active");
    $('.active .content').css({'display': 'flex'});
    $('.active .content').delay(1200).animate({'opacity': "1"}, 300);
})

$('.pass5 img').click(function() {
    clicount++;
    $(".pass5").css({'z-index': clicount});
    $(".pass5").addClass(" active");
    $('.active .content').css({'display': 'flex'});
    $('.active .content').delay(1200).animate({'opacity': "1"}, 300);
})

$('h4').click(function() {

    setTimeout(function() {
        $(".pass").css({'z-index': 0});
    }, 1000)

    $('.content').animate({'opacity': "0"}, 300);

    setTimeout(function() {
        $('.pass').removeClass(" active");
        $('.content').css({'display': 'none'});
    }, 300)
})

}


$('nav .opennav').click(function() {
    $('nav').toggleClass('navopened');
    $('nav .opennav').toggleClass('opennavopened');
})









