'use strict';

var activeScreen = "companies", scrolling = false, showSubscribe = false;

$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

//    $('.btn_subscribe_on:not(.btn_schedule_demo)').on('click', function () {
//        console.log("test");
//        $('.btn_subscribe_on').toggleClass('close');
//        $('.btn_subscribe_on i').toggleClass('fa-paper-plane-o fa-close fadeIn animated');
//        $('.subscribe_on').toggleClass('on');
//        $('.content').toggleClass('opacity');
//    });
    
    $(".subscribe_btn").click(function(){
        console.log("test");
        showSubscribe = true;
        $('.subscribe_on').toggleClass('on');
        $('.content').toggleClass('opacity');
        setTimeout(function(){showSubscribe = false;}, 500);
    });
    
    $('.content, .left').on('click', function () {
        if(!showSubscribe){
            if ($('.subscribe_on').hasClass('on')) {
                $('.content').toggleClass('opacity');
            }
            $('.subscribe_on').removeClass('on');
        }
    });
    $('.content, .subscribe_on').on('click', function () {
        if ($('.menu_opened').hasClass('on')) {
            $('.menu_opened').removeClass('on')
        }
    });

    $('.play_btn').on('click', function () {
       $('.video_popup').addClass('on');
    });

    $('.vodeo_popup_close').on('click', function () {
       $('.video_popup').removeClass('on');
    });

    var page;
    var prevPage;

    $('.menu_opened li span').click(function(){

        page = $(this).attr('data-target');

        $('.content').load(page + '.html');

        // if(page + '.html'!= window.location){
        //     window.history.pushState({path:page + '.html'},'',page);
        // }

        return false;
    });

    $('.menu').on('click', function () {
       $('.menu_opened').toggleClass('on');
    });
    
//    $('.wrapper > .left.text-center').on('mouseleave', function () {
//       $('.menu_opened').removeClass('on');
//    });

    $('.menu_opened li span').on('click', function () {
       $('.menu_opened').removeClass('on')
    });

    $('.play_btn').click(function () {
        $("#video").get(0).currentTime = 0;
        $("#video").get(0).play();
    });


    $('.vodeo_popup_close').click(function () {
        $("#video").get(0).pause();
    });

    var $videoW = $('.bg-video').width();
    var $videoH = $('.bg-video').height();
    var $windowW = $(window).width();
    var $windowH = $(window).height();
    console.log($videoW,$videoH,$windowW,$windowH );
    $('.bg-video video').css({
        'position': 'relative',
        'left': ($windowW - $videoW) / 2
    });
    
//    $('.content_left').scroll(function(event) {
//          console.log('scrolling', event);
//        event.preventDefault();
//        event.stopPropagation();
//        if(!scrolling){
//            scrolling = true;
//            if(activeScreen == "companies"){
//                activeScreen = "talents";
//                $("#recruitersContent").addClass("not_active");
//                $("#talentsContent").removeClass("not_active");
//                $('.content_left').scrollTop((event.currentTarget.scrollHeight*0.35));
//                setTimeout(function(){scrolling = false;},100);
//                
//            } else if(activeScreen == "talents") {  
//                activeScreen = "companies";
//                $("#recruitersContent").removeClass("not_active");
//                $("#talentsContent").addClass("not_active");
//                $('.content_left').scrollTop(0);
//                setTimeout(function(){scrolling = false;},100);
//            }
//        } else {
//            return false;
//        }
//      });


    // -----------------------------------------------------------------------------------------------------
    // Animation on scroll

//    (function(e) {
//        e.fn.visible = function(t, n, r) {
//            var i = e(this).eq(0),
//                s = i.get(0),
//                o = e(window),
//                u = o.scrollTop(),
//                a = u + o.height(),
//                f = o.scrollLeft(),
//                l = f + o.width(),
//                c = i.offset().top,
//                h = c + i.height(),
//                p = i.offset().left,
//                d = p + i.width(),
//                v = t === true ? h : c,
//                m = t === true ? c : h,
//                g = t === true ? d : p,
//                y = t === true ? p : d,
//                b = n === true ? s.offsetWidth * s.offsetHeight : true,
//                r = r ? r : "both";
//            if (r === "both") return !!b && m <= a && v >= u && y <= l && g >= f;
//            else if (r === "vertical") return !!b && m <= a && v >= u;
//            else if (r === "horizontal") return !!b && y <= l && g >= f
//        }
//    })(jQuery);
//
//    jQuery('.content').scroll(function(event) {
//        
//        jQuery(".animate").each(function(i, el) {
//            var el = jQuery(el);
//            if (el.visible(true)) {
//                el.addClass("start");
//            }
//        });
//    });
});

function goToR(){
                scrolling = true;
                activeScreen = "companies";
                $("#talentsContent").hide();
                $("#recruitersContent").css("display", "table-cell");
                
               
                //$('.content_left').scrollTop(0);
                setTimeout(function(){scrolling = false;
                                     
                                      $("#recruitersContent").removeClass("not_active");
                $("#talentsContent").addClass("not_active");},50);
}

function goToT(){
                scrolling = true;
                activeScreen = "talents";
                $("#recruitersContent").hide();
                $("#talentsContent").css("display", "table-cell");
    
                
                //$('.content_left').scrollTop(0);
                setTimeout(function(){scrolling = false;
                                     $("#recruitersContent").addClass("not_active");
                $("#talentsContent").removeClass("not_active");},50);
}