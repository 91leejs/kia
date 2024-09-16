$(function(){


    $("a").click(function(e){
        var attr = $(this).attr("href");
        if(attr == "#" || attr == ""){
            e.preventDefault();
        }
    })

    $(".menu2 li:nth-child(1) a").click(function(){
        $(".lang").stop().slideToggle();
        $(".menu2 li:nth-child(1) a span").toggleClass("span_spin2");
    })/* kr click */

    $(".menu22 li:nth-child(1) a").click(function(){
        $(".lang22").stop().slideToggle();
        $(".menu22 li:nth-child(1) a span").toggleClass("span_spin2");
    })/* kr click */

    $(".m_item li:nth-child(1) a").click(function(){
        $(".lang2").stop().slideToggle();
    })/* kr click */

    $(".move").slick({
        arrows:false,
        dots:true
    })//

    $(".pop_up").show();
    $('body').css('overflow', 'hidden');


    $(".pop_close, .today").click(function(){
        $(".pop_up , .info_pop").hide();
        $('body').css('overflow', 'auto');
    })//

    $(".info").click(function(){
        $(".info_pop").show();
        $('body').css('overflow', 'hidden');
    })//

    $(".best ul li a").click(function(){
        $(".best ul li a").removeClass("on");
        $(this).addClass("on");
    })//

    $(".m_sub").hide();

    $(".m_main > li").click(function(){
        $(this).siblings().find(".m_sub").hide();
        $(this).find(".m_sub").slideToggle();
        $(this).find("span").toggleClass("span_spin2");
    })

    $(".m_spin").click(function(){
        $(".m_menu_pop").slideDown();
    })

    $(".close").click(function(){
        $(".m_menu_pop").slideUp();
        $(".m_sub").hide();
    })



                function checkWidth() {
                    if ($(window).width() <= 430) {
                        $('.prev, .next').hide();
                    } else {
                        $('.prev1, .next1').show();
                    }
                }
            
                // Initial check
                checkWidth();
            
                // Check on window resize
                $(window).resize(function() {
                    checkWidth();
                });





        $(".bic1 a").click(function(){
            $(".bx-wrapper,.bi_tag,.prev,.next").hide();
            $(".best_item_wrap > .bx-wrapper:nth-of-type(1), .best_item1_tag,.prev1,.next1").show();
            function checkWidth() {
                if ($(window).width() <= 430) {
                    $('.prev, .next').hide();
                } else {
                    $('.prev1, .next1').show();
                }
            }
        
            // Initial check
            checkWidth();
        
            // Check on window resize
            $(window).resize(function() {
                checkWidth();
            });
        })

        $(".bic2 a").click(function(){
            $(".bx-wrapper,.bi_tag,.prev,.next").hide();
            $(".best_item_wrap > .bx-wrapper:nth-child(5), .best_item2_tag").show();
            function checkWidth() {
                if ($(window).width() <= 430) {
                    $('.prev, .next').hide();
                } else {
                    $('.prev2, .next2').show();
                }
            }
        
            // Initial check
            checkWidth();
        
            // Check on window resize
            $(window).resize(function() {
                checkWidth();
            });
        })

        $(".bic3 a").click(function(){
            $(".bx-wrapper,.bi_tag,.prev,.next").hide();
            $(".best_item_wrap > .bx-wrapper:nth-child(9), .best_item3_tag,.prev3,.next3").show();
            function checkWidth() {
                if ($(window).width() <= 430) {
                    $('.prev, .next').hide();
                } else {
                    $('.prev3, .next3').show();
                }
            }
        
            // Initial check
            checkWidth();
        
            // Check on window resize
            $(window).resize(function() {
                checkWidth();
            });
        })

        $(".bic4 a").click(function(){
            $(".bx-wrapper,.bi_tag,.prev,.next").hide();
            $(".best_item_wrap > .bx-wrapper:nth-child(13), .best_item4_tag,.prev4,.next4").show();
            function checkWidth() {
                if ($(window).width() <= 430) {
                    $('.prev, .next').hide();
                } else {
                    $('.prev4, .next4').show();
                }
            }
        
            // Initial check
            checkWidth();
        
            // Check on window resize
            $(window).resize(function() {
                checkWidth();
            });
        })

        $(".he2_menu > ul").hide();

        $(".menu1 li a, .menu11 li a").click(function(){
            $(".header2").show();
        })//

        $(".menu1 li:nth-child(1) a, .menu11 li:nth-child(1) a").click(function(){
            $(".header2").hide();
            $(".menu11 li a, .menu1 li a").removeClass("underline");
        })

        $(".no1 a").click(function(){
            $(".menu11 li a, .menu1 li a").removeClass("underline");
            $(".no1 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_m1, .he2_m1 ul").show();
        })

        $(".no2 a").click(function(){
            $(".menu11 li a, .menu1 li a").removeClass("underline");
            $(".no2 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_m2, .he2_m2 ul").show();
        })

        $(".no3 a").click(function(){
            $(".menu11 li a, .menu1 li a").removeClass("underline");
            $(".no3 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_m3, .he2_m3 ul").show();
        })

        $(".no4 a").click(function(){
            $(".menu11 li a, .menu1 li a").removeClass("underline");
            $(".no4 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_m4, .he2_m4 ul").show();
        })

        $(".no5 a").click(function(){
            $(".menu11 li a, .menu1 li a").removeClass("underline");
            $(".no5 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_m5, .he2_m5 ul").show();
        })

        $(".slide, .best").click(function(){
            $(".header2").hide();
            $(".he2_menu ul").hide();
            $(".menu11 li a, .menu1 li a").removeClass("underline");
        });



    $(".family_site > ul > li > a").click(function(){
        $(".family_site > ul > li > a").toggleClass("a_bor");
        $(".family_site > ul > li > ul").toggleClass("size_up");
        $(".family_site > ul > li > a span").toggleClass("span_spin2");
    })

    $(".m_sns").click(function(){
        $(".m_sns ul").toggleClass("size_up2");
        $(".m_sns a span").toggleClass("span_spin");
    })

    $(".m_family").click(function(){
        $(".m_family ul").toggleClass("size_up2");
        $(".m_family a span").toggleClass("span_spin");
    })

    



    // $(".m_spin a").click(function(){
    //     $(".m_spin a span:nth-child(1)").toggleClass("m_spin1");
    //     $(".m_spin a span:nth-child(2)").toggleClass("m_spin2");
    // })


})//jQuery

$(window).on('load', function(){
    var slider1 = $(".best_item1").bxSlider({   
        infiniteLoop: false,
        
    });


            $(".prev1").click(function() {
                slider1.goToPrevSlide();
            });
        
            $(".next1").click(function() {
                slider1.goToNextSlide();
            })

    
    var slider2 = $(".best_item2").bxSlider({
        infiniteLoop: false,
        pager:true,
        touchEnabled:true,
    });




            $(".prev2").click(function() {
                slider2.goToPrevSlide();
            });
        
            $(".next2").click(function() {
                slider2.goToNextSlide();
            })

    
    var slider3 = $(".best_item3").bxSlider({
        infiniteLoop: false,
    });

            
            $(".prev3").click(function() {
                slider3.goToPrevSlide();
            });
        
            $(".next3").click(function() {
                slider3.goToNextSlide();
            })

    
    var slider4 = $(".best_item4").bxSlider({
        infiniteLoop: false,
    });

            
            $(".prev4").click(function() {
                slider4.goToPrevSlide();
            });
        
            $(".next4").click(function() {
                slider4.goToNextSlide();
            })




            $(".bx-wrapper,.bi_tag,.prev,.next").hide();

            
            $(".best_item_wrap > .bx-wrapper:nth-of-type(1)").show();
            $(".best_item1_tag").show(); 
            $(".prev1").show(); 
            $(".next1").show(); 

});


$(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log(top);

    if( top >= 1000 ){
        $(".fix_btn").addClass("active");
    }else{
        $(".fix_btn").removeClass("active");
    }

    $(".fix_btn2 a").click(function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    })

})//scroll










