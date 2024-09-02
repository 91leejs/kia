$(function(){

    $("a").click(function(e){
        var attr = $(this).attr("href");
        if(attr == "#" || attr == ""){
            e.preventDefault();
        }
    })


    $(".menu22 li:nth-child(1) a").click(function(){
        $(".lang22").stop().slideToggle();
        $(".menu22 li:nth-child(1) a span").toggleClass("span_spin2");
    })/* kr click */

    $(".item_list ul li").click(function(){
        $(".item_list ul li").removeClass("underline");
        $(this).addClass("underline");
    })

    $(".m_item li:nth-child(1) a").click(function(){
        $(".lang2").stop().slideToggle();
    })/* kr click */









    $(".m_sub").hide();

    $(".m_main > li").click(function(){
        $(this).siblings().find(".m_sub").hide();
        $(this).find(".m_sub").slideToggle();
        //$(this).find("span").toggleClass("span_spin2");
    })

    $(".m_spin").click(function(){
        $(".m_menu_pop").slideDown();
        $(".m_spin").hide();
    })

    $(".close").click(function(){
        $(".m_menu_pop").slideUp();
        $(".m_sub").hide();
        $(".m_spin").show();
    })









    $(".box2,.box3,.box4").hide();

    $(".cont1").click(function(){
        $(".item_box").hide();
        $(".box1").show();
    })

    $(".cont2").click(function(){
        $(".item_box").hide();
        $(".box2").show();
    })

    $(".cont3").click(function(){
        $(".item_box").hide();
        $(".box3").show();
    })

    $(".cont4").click(function(){
        $(".item_box").hide();
        $(".box4").show();
    })



        $(".he2_menu, .he2_foot").hide();

        $(".item_box").click(function(){
            $(".he2_menu, .he2_foot").hide();
            $(".menu11 li a, .menu1 li a").removeClass("underline");
        })


        $(".menu11 li:nth-child(1) a").click(function(){
            $(".he2_menu, .he2_foot").hide();
            $(".menu11 li a, .menu1 li a").removeClass("underline");
        })

        $(".no1 a").click(function(){
            $(".menu11 li a").removeClass("underline");
            $(".no1 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_menu, .he2_foot, .he2_m1, .he2_m1 ul").show();
        })

        $(".no2 a").click(function(){
            $(".menu11 li a").removeClass("underline");
            $(".no2 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_menu, .he2_foot, .he2_m2, .he2_m2 ul").show();
        })

        $(".no3 a").click(function(){
            $(".menu11 li a").removeClass("underline");
            $(".no3 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_menu, .he2_foot, .he2_m3, .he2_m3 ul").show();
        })

        $(".no4 a").click(function(){
            $(".menu11 li a").removeClass("underline");
            $(".no4 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_menu, .he2_foot, .he2_m4, .he2_m4 ul").show();
        })

        $(".no5 a").click(function(){
            $(".menu11 li a").removeClass("underline");
            $(".no5 a").addClass("underline");
            $(".he2_menu ul").hide();
            $(".he2_menu, .he2_foot, .he2_m5, .he2_m5 ul").show();
        })

        // $(".slide, .best").click(function(){
        //     $(".header2").hide();
        //     $(".he2_menu ul").hide();
        //     $(".menu11 li a").removeClass("underline");
        // });

        

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

    




})//jQuery


$(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log(top);

    if( top >= 300 ){
        $(".fix_btn").addClass("active");
    }else if(top >= 1050){
        $(".fix_btn").removeClass("active");
    }

    if(top >= 1050){
        $(".fix_m").hide();
    }else{
        $(".fix_m").show();
    }

    $(".fix_btn2 a").click(function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    })

})//scroll

$(window).on('scroll resize', function() {
    var top = $(window).scrollTop();
    var windowHeight = $(window).height();
    var footerOffsetTop = $('.footer').offset().top;
    var width = $(window).width();

    // footer가 화면에 보이는지 여부를 확인
    var footerVisible = footerOffsetTop <= (top + windowHeight);

    if (footerVisible || width <= 430) {
        $(".fix_m").hide();
    } else {
        $(".fix_m").show();
    }
}).trigger('scroll'); // 초기 로드 시 적용
