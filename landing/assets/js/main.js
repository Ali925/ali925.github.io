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
			if($(window).width() > 1133){
                console.log("okokok");
				$("#fetBl"+id).show();
			}
        if($(window).width() <= 1133){
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
    
    $(".select-lang").mouseover(function(){
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
    
    $("#fViewMore").click(function(){
        console.log($(this).text());
        if($(this).text() == "View more"){
            $(".fmain-content-feature.left-box > ul > li.hidden-item").css("display", "list-item");
            $(this).text("View less");
        } else {
             $(".fmain-content-feature.left-box > ul > li.hidden-item").css("display", "none");
            $(this).text("View more");
        }
    });
    
    $(".subscribe_form .submit").click(function(){
        setTimeout(function(){
            if(!$(".subscribe_form").hasClass("invalid-form")){
                var data = {};
                data.email = $(".subscribe_form input[name='email']").val();
                data.role = $(".subscribe_form input[name='role']").val();
                $.ajax({
                    method: "POST",
                    url: "http://127.0.0.1:5000/subscribe",
                    data: data
                }).then(function(res){
                    console.log(res);
                    alert("Successfully sent!");
                }, function(err){
                    console.log(err);
                });
            }
        }, 100);
    });
	
});

function showModal(id){
	$("body").addClass("modal-open");
	$("html").addClass("modal-open");
	$(".modal-backdrop").show();
	$("#" + id).fadeIn({duration: 400, easing: "swing"});
}

function validateForm(event, el){
    event.preventDefault();
    event.stopPropagation();
    
    var $form = $(el), success = true, emailTrue = true, phoneTrue = true, roleTrue = true;
    
    var temp1 = "<span class='error-msg'>can't be blank</span>";
    var temp2 = "<span class='error-msg'>please enter a valid email address</span>";
    var temp3 = "<span class='error-msg'>this entry can only contain numbers</span>";
    
    $form.find("input").each(function(i, el){
        if(!$(el).val()){
            success = false;
            return 0;
        }
    });
    
    if($form.find("input[name='role']") && !$form.find("input[name='role']").is(':checked')){
        success = false;
        roleTrue = false;
    }

    if($form.find("textarea").length && ($form.find("textarea").val().trim() == ""))
        success = false;
 
    if($form.find("input[name='email']").length && $form.find("input[name='email']").val()){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test($form.find("input[name='email']").val())){
            success = false;
            emailTrue = false;
        }
    }
    
    if($form.find("input[name='phone']").length && $form.find("input[name='phone']").val()){
        var re = /^\d*$/;
        if(!re.test($form.find("input[name='phone']").val())){
            success = false;
            phoneTrue = false;
        }
    }
    
    if(!success){
        $form.find("input").each(function(i, el){
            if(!$(el).val()){
                $(el).addClass("error-input");
                 $(el).parent().find(".error-msg").remove();
                $(el).parent().append(temp1);
            }
            else{
                $(el).removeClass("error-input");
                $(el).parent().find(".error-msg").remove();
            }
        });
        
        if($form.find("textarea").length && ($form.find("textarea").val().trim() == "")){
            $form.find("textarea").addClass("error-input");
            $form.find("textarea").parent().find(".error-msg").remove();
            $form.find("textarea").parent().append(temp1);
        }else{
            $form.find("textarea").removeClass("error-input");
            $form.find("textarea").parent().find(".error-msg").remove();
        }
        
        if(!emailTrue){
            $form.find("input[name='email']").addClass("error-email");
            $form.find("input[name='email']").parent().find(".error-msg").remove();
            $form.find("input[name='email']").parent().append(temp2);
        }
        else if($form.find("input[name='email']").length && $form.find("input[name='email']").val()){
            $form.find("input[name='email']").removeClass("error-email");
            $form.find("input[name='email']").parent().find(".error-msg").remove();
        }
        
        if(!phoneTrue){
            $form.find("input[name='phone']").addClass("error-phone");
            $form.find("input[name='phone']").parent().find(".error-msg").remove();
            $form.find("input[name='phone']").parent().append(temp3);
        }
        else if($form.find("input[name='phone']").length && $form.find("input[name='phone']").val()){
            $form.find("input[name='phone']").removeClass("error-phone");
            $form.find("input[name='phone']").parent().find(".error-msg").remove();
        }
        
        if(!roleTrue){
            $form.find("input[name='role']").addClass("error-role");
        } else {
            $form.find("input[name='role']").removeClass("error-role");
        }
        
        $form.addClass("invalid-form");
        
    } else {
        $form.find("input").each(function(i, el){
            $(el).removeClass("error-input");
            $(el).removeClass("error-email");
            $(el).removeClass("error-role");
        });
        if($form.find("textarea").length)
            $form.find("textarea").removeClass("error-input");
        $(".error-msg").remove();
        
        $form.removeClass("invalid-form");
    }
}