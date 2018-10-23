'use strict';

var activeScreen = "companies", scrolling = false;

$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    $('.btn_subscribe_on:not(.btn_schedule_demo)').on('click', function () {
        $('.btn_subscribe_on').toggleClass('close');
        $('.btn_subscribe_on i').toggleClass('fa-paper-plane-o fa-close fadeIn animated');
        $('.subscribe_on').toggleClass('on');
        $('.content').toggleClass('opacity');
    });
    $('.content, .left').on('click', function () {
        $('.btn_subscribe_on').removeClass('close');
        $('.btn_subscribe_on i').removeClass('fa-close fadeIn animated').addClass('fa-paper-plane-o ');
        if ($('.subscribe_on').hasClass('on')) {
            $('.content').toggleClass('opacity');
        }
        $('.subscribe_on').removeClass('on');
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

    var $videoW = $('.bg_video').width();
    var $videoH = $('.bg_video').height();
    var $windowW = $(window).width();
    var $windowH = $(window).height();

    $('.bg_video video').css({
        'position': 'relative',
        'left': ($windowW - $videoW) / 2
    });
    
    $('.content_left').scroll(function(event) {
          console.log('scrolling', event);
        if(!scrolling){
            //scrolling = true;
            if(activeScreen == "companies" && event.currentTarget.scrollTop >= (event.currentTarget.scrollHeight*0.12)){
                activeScreen = "talents";
                $("#recruitersContent").addClass("not_active");
                $("#talentsContent").removeClass("not_active");
                $('.content_left').scrollTop((event.currentTarget.scrollHeight*0.36));
            } else if(activeScreen == "talents" && (event.currentTarget.scrollTop >= (event.currentTarget.scrollHeight*0.5) || event.currentTarget.scrollTop <= (event.currentTarget.scrollHeight*0.275))) {  
                activeScreen = "companies";
                $("#recruitersContent").removeClass("not_active");
                $("#talentsContent").addClass("not_active");
                $('.content_left').scrollTop(0);
            }
        }
      });


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
                activeScreen = "companies";
                $("#recruitersContent").removeClass("not_active");
                $("#talentsContent").addClass("not_active");
                $('.content_left').scrollTop(0);
}

function goToT(){
                activeScreen = "talents";
                $("#recruitersContent").addClass("not_active");
                $("#talentsContent").removeClass("not_active");
                $('.content_left').scrollTop((document.getElementsByClassName("content_left")[0].scrollHeight*0.36));
}