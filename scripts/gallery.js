
var galimg = document.getElementsByClassName('galimg');

var right = document.getElementById('sideright');

for (var i = 0; i < galimg.length; i++) {

    function yes(index) {
        galimg[i].addEventListener("click", function() {

            sideright.innerHTML = "<img src='img/gallery/"+ (index+1) +".jpg'>";
            $('.sideright img').fadeIn(500);

            });

    };
    yes(i);
}

$('ul').click(function() {
    $('.galleryPage .galimg').removeClass('galleryshow');
    $('.sideright img').addClass("rightshow");
});

$('ul.gallery').click(function() {
    $('.page').removeClass('display');
    $('ul').removeClass("lighter");
    $(this).addClass("lighter");
    setTimeout(function() {
       $('.galleryPage').addClass('display');
       imgshow();
    }, 1000);
})

function imgshow() {

    setTimeout(function() {

        for (var i = 0; i < galimg.length; i++) {

            function imgloop(index) {

                setTimeout(function() {
                    galimg[index].className += " galleryshow";
                },(200*index));

            };

            imgloop(i);
        };

    }, 500);

    setTimeout(function() {
        $('.sideright img').removeClass("rightshow");
    }, 1000)
};













