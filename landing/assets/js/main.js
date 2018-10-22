$(document).ready(function(){
    var showLangs = false, currentHomeContent = "recruiters";
	var length = $(".main-about-staff").length, first = 1, last = 2, currentFeatureBlock = 1;
	$(".main-about-staff-left").click(function(){
		if(first > 1){
			first--;
			last--;
			$(".main-about-staff:nth-child("+(first+1)+")").show().addClass("first-el");
			$(".main-about-staff:nth-child("+(last+1)+")").addClass("last-el").removeClass("first-el");
			$(".main-about-staff:nth-child("+(last+2)+")").hide().removeClass("last-el");
		} else{
			first = length-1;
			last = length;
			$(".main-about-staff").removeClass("first-el").removeClass("last-el");
			$(".main-about-staff:nth-child("+first+")").hide();
			$(".main-about-staff:nth-child("+(last)+")").show().addClass("first-el");
			$(".main-about-staff:nth-child("+(last+1)+")").show().addClass("last-el");
		}
	});
	
	$(".main-about-staff-right").click(function(){
		if(last < length){
			$(".main-about-staff:nth-child("+(first+1)+")").hide().removeClass("first-el");
			$(".main-about-staff:nth-child("+(last+1)+")").removeClass("last-el").addClass("first-el");
			$(".main-about-staff:nth-child("+(last+2)+")").show().addClass("last-el");
			first++;
			last++;
		} else{
			first = 1;
			last = 2;
			$(".main-about-staff").removeClass("first-el").removeClass("last-el");
			$(".main-about-staff:nth-child("+(first+1)+")").show().addClass("first-el");
			$(".main-about-staff:nth-child("+(last+1)+")").show().addClass("last-el");
			$(".main-about-staff:nth-child("+(last+2)+")").hide();
		}
	});
	
	$(".header-top-mob > a").click(function(){
		$(".header-top-mob > nav").show();
	});
	
	$(".close-btn").click(function(){
		$(".header-top-mob > nav").hide();
	});
	
	$(".show-leftnav").click(function(){
		if($(this).find("i").hasClass("fa-long-arrow-left")){
			$(this).find("i").removeClass("fa-long-arrow-left");
			$(this).find("i").addClass("fa-long-arrow-right");
			$(".fmain-nav").hide();
			$("#fetBl" + currentFeatureBlock).show();
		} else {
			$(this).find("i").addClass("fa-long-arrow-left");
			$(this).find("i").removeClass("fa-long-arrow-right");
			$(".fmain-nav").show();
			$(".fmain-content").hide();
		}
	});
	
	$(".fmain-nav li > a").click(function(){
		var id = $(this).parent().attr("id").substr(3);
		currentFeatureBlock = id;
        console.log("id", id);
			$(".fmain-nav li").removeClass("active");
			$(this).parent().addClass("active");
			$(".fmain-content").hide();		
			if($(window).width() > 600){
                console.log("okokok");
				$("#fetBl"+id).show();
			}
        if($(window).width() <= 600){
			$(".show-leftnav").click();
        }
	});
	
	$(".faq-box").click(function(){
		if($(this).find("a").css("display") == "none"){
			var key = false;
			if($(this).hasClass("active"))
				key = true;

			$(".faq-box").removeClass("active");
			if(!key)
				$(this).addClass("active");
		}
	});
	
	$(".faq-box > a").click(function(){
		var key = false;
		if($(this).parent().hasClass("active"))
			key = true;
		
		$(".faq-box").removeClass("active");
		if(!key)
			$(this).parent().addClass("active");
	});
	
	$(".modal-close-btn").click(function(){
		$(".modal").fadeOut({duration: 400, easing: "swing"});
		$(".modal-backdrop").hide();
		$("body").removeClass("modal-open");
		$("html").removeClass("modal-open");
	});
	
	$(".select-selected").click(function(){
		$(this).next().toggle();
	});
	
	$(".select-items > div").click(function(){
		var value = $(this).data("id");
		$(".select-selected").text($(this).text());
		$(".select-items > div").removeClass("selected");
		$(this).addClass("selected");
		$(".custom-lang-select > select").val(value);
		$(".select-items").hide();
	});
	
	$(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		});
	
	$(".input-effect label").click(function(){
		$(this).prev().focus();
	});
	
	$(".main-table-head-btns > a").click(function(){
		$(".main-table-head-btns > a").removeClass("active");
		$(this).addClass("active");
	});
    
    $(".selected-lang").mouseenter(function(){
        $(".select-lang").show();
    });
    
    $(".select-lang").mouseenter(function(){
        showLangs = true;
    });
    
     $(".select-lang").mouseleave(function(){
         showLangs = false;
        $(".select-lang").hide();
    });
    
    $(".selected-lang").mouseleave(function(){
        setTimeout(function(){
            if(!showLangs)
                $(".select-lang").hide();
        }, 500);
    });
    
    $(".select-lang > div").click(function(){
        var className = $(this).attr("class");
        console.log(className)
        $(".selected-lang").attr("class", "selected-lang");
        $(".selected-lang").addClass(className);
        $(".select-lang").hide();
    });
    
    $(".change-content-btn").click(function(){
        if(currentHomeContent == "recruiters"){
            $(this).find("a").text("For recruiters");
            $("#recruitersContent").hide();
            $("#talentsContent").css("display", "table-cell");
            currentHomeContent = "talents";
            $(".change-content-btns").removeClass("talents");
        } else {
             $(this).find("a").text("For talents");
            $("#talentsContent").hide();
            $("#recruitersContent").show();
            currentHomeContent = "recruiters";
            $(".change-content-btns").addClass("talents");
        }
    });
	
});

function showModal(id){
	$("body").addClass("modal-open");
	$("html").addClass("modal-open");
	$(".modal-backdrop").show();
	$("#" + id).fadeIn({duration: 400, easing: "swing"});
}