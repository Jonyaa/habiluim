$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".splash h2").css({
        'transform': 'translateY('+scroll*-0.5+'px)'
    })
    $(".splash p").css({
        'transform': 'translateY('+scroll*-0.3+'px)'
    })
})

var wh = window.innerHeight;

$(".splash h2").click(function() {
    $("html, body").animate({scrollTop:wh}, 1000);
});


var ul = document.getElementsByTagName("UL");
var page = document.getElementsByClassName('page');
var x=0;

/*for (var i = 0; i < ul.length; i++) {
    
    ul[i].addEventListener("click", function(e) {
        $('.page').removeClass('display');
        
        setTimeout(function() {
           page[i].className += " display";
        }, 1000);

    });
    
};*/

var nav = document.getElementById('nav');
var block = document.getElementById('whiteblock');

var s = document.getElementsByClassName("lighter")[0].offsetLeft;
block.style.left = s+"px";

/*nav.addEventListener("mouseover", function(e) {
    block.style.left = e.pageX+"px";
})*/

for (var i = 0; i < ul.length; i++) {
    ul[i].addEventListener("mouseover", function() {
        var x = this.offsetLeft;
        block.style.left = x+"px";
    });
}

nav.addEventListener("mouseleave", function() {
        var d = document.getElementsByClassName("lighter")[0].offsetLeft;
        block.style.left = d+"px";
});

$('ul').click(function() {
    $('.aboutPage p').animate({'opacity': 0}, 0);
    $('.homePage figure img').animate({'opacity': 0}, 0);
   $('.homePage figure figcaption').animate({'opacity': 0}, 0);

   $('form.contact .leftform').animate({'opacity': 0}, 0);
   $('form.contact .rightform').animate({'opacity': 0}, 0);
})

$(document).ready(function() {
    $('.homePage figure img').animate({'opacity': 1}, 400);
   $('.homePage figure figcaption').animate({'opacity': 1}, 400);
})

$('ul.home').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");
    setTimeout(function() {
       $('.homePage').addClass('display');
       $('.homePage figure img').delay(850).animate({'opacity': 1}, 400);
       $('.homePage figure figcaption').delay(850).animate({'opacity': 1}, 400);
    }, 1000);
})

$('ul.music').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");
    setTimeout(function() {
       $('.musicPage').addClass('display');
    }, 1000);
})

$('ul.contact').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");
    setTimeout(function() {
       $('.contactPage').addClass('display');
       $('form.contact .leftform').delay(850).animate({'opacity': 1}, 1000);
       $('form.contact .rightform').delay(850).animate({'opacity': 1}, 1000);
    }, 1000);
})

$('ul.news').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");
    setTimeout(function() {
       $('.newsPage').addClass('display');
    }, 1000);
})

$('ul.about').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");

    setTimeout(function() {
       $('.aboutPage').addClass('display');
       $('.aboutPage p').delay(850).animate({'opacity': 1}, 1000);
    }, 1000);
})

$('ul.reviews').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");
    setTimeout(function() {
       $('.reviewsPage').addClass('display');
    }, 1000);
})















