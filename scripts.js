
$('.single-item').slick({
 dots:true,
 arrows:false,
 infinite: false,
 slidesToShow: 1,
 slidesToScroll: 1
});

 $('.multiple-items').slick({
 dots:false,
 arrows:true,
 infinite: false,
 slidesToShow: 4,
 slidesToScroll: 4
});

$('.slick-slide').mouseover(
    function(){
        $(this).css("background-color", "#F2F2F2");
        $(this).css("cursor", "pointer");
    }
)

$('.slick-slide').mouseout(
    function(){
        $(this).css("background-color", "none");
    }
)



$('.btn-secondary').mouseover(function(){
    $(".btn-secondary").css('background-color', '#a36814');
});

$('.btn-secondary').mouseout(function(){
    $(".btn-secondary").css('background-color', '#FF9F1C');
    $(".btn-secondary").css('color', 'white');
});

$('.btn-primary').mouseover(function(){
    $(".btn-primary").css('background-color', '#a36814');
});

$('.btn-primary').mouseout(function(){
    $(".btn-primary").css('background-color', '#FF9F1C');
    $(".btn-primary").css('color', 'white');
});