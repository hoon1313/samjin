$(document).ready(function(){
    /* 배너 슬라이드 */
    $('.banner_img').slick({
        dots : true
    });


    /* 선물세트 슬라이드 */
    $('.set_slide').slick({
        autoplay:true,
        autoplaySpeed : 3000,
        speed : 1000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
    });

/* 레시피 슬라이드 */
    $('.recipe_wrap').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        swipeToSlide: true,
        responsive: [
                        {
                            breakpoint: 1650,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                        }
                    ]
    });
});



  $('.set_slide').hover(function(){
    $('.set_slide').slick({
        autoplay:false
    });
})
