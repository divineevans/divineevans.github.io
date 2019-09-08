/**first slider */
$(".slider-one")
    .not(".slick-initialized")
    .slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
});

/**second slider */
$(".slider-two")
    .not(".slick-initialized")
    .slick({  
    prevArrow:".site-slider-two .slider-btn .prev",
    nextArrow:".site-slider-two .slider-btn .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000,
    responsive: [
        {
            breakpoint:900,
            settings:{
                slidesToShow:4,
                slidesToScroll:2
            }
        },
        {
            breakpoint:650,
            settings:{
                slidesToShow:3,
                slidesToScroll:3
            }
        }
        
    ]
});