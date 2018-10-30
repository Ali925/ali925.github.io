$(document).ready(function(){
    var showLangs = false, currentHomeContent = "recruiters";
    var api = "https://test.glorri.com/user-service/";
    //var api = "http://127.0.0.1:5000/"; //test api
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
                    url: api + "subscribe",
                    data: data
                }).then(function(res){
                    console.log(res);
                    var text = "Subscription confirmed";
                    $(".notification").attr("class", "notification clearfix");
                    $(".noti-text").text(text);
                    $(".notification").addClass("success").addClass("on");
                    $(".subscribe_on").removeClass("on");
                    $(".btn_subscribe_on").show();
                    $(".content").removeClass("opacity");
                    $(".subscribe_form input[name='email']").val("");
                    $(".subscribe_form input[name='role']").prop("checked", false);
                    setTimeout(function(){
                        $(".notification").removeClass("on");
                        setTimeout(function(){
                            $(".notification").attr("class", "notification clearfix");
                        }, 500);
                    }, 4000);
                }, function(err){
                    console.log(err);
                    if(err.responseJSON && err.responseJSON.message.indexOf("duplicate key error") != -1){
                        var text = "Your email has already been registered.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $(".notification").addClass("info").addClass("on");
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
                    } else{
                        var text = "There some problem in server. Please try later.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $(".notification").addClass("error").addClass("on");
                        $(".subscribe_on").removeClass("on");
                        $(".btn_subscribe_on").show();
                        $(".content").removeClass("opacity");
                        $(".subscribe_form input[name='email']").val("");
                        $(".subscribe_form input[name='role']").prop("checked", false);
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
                    }
                });
            }
        }, 100);
    });
    
    $(".schedule-form button[type='submit']").click(function(){
        setTimeout(function(){
            if(!$(".schedule-form > form").hasClass("invalid-form")){
                var data = {};
                data.name = {
                    first: $(".schedule-form input[name='name']").val(),
                    last: $(".schedule-form input[name='surname']").val()
                };
                data.email = $(".schedule-form input[name='email']").val();
                data.company = $(".schedule-form input[name='company']").val();
                data.jobTitle = $(".schedule-form input[name='job']").val();
                data.phone = $(".schedule-form input[name='phone']").val();
                $.ajax({
                    method: "POST",
                    url: api + "request-demo",
                    data: data
                }).then(function(res){
                    console.log(res);
                    var text = "Your request has been confirmed. We'll get in touch with you soon.";
                    $(".notification").attr("class", "notification clearfix");
                    $(".noti-text").text(text);
                    $(".schedule-form button[type='button']").click();
                    $(".notification").addClass("success").addClass("on").addClass("big-noti");
                    $(".schedule-form input[name='email']").val("");
                    $(".schedule-form input[name='name']").val("");
                    $(".schedule-form input[name='surname']").val("");
                    $(".schedule-form input[name='company']").val("");
                    $(".schedule-form input[name='job']").val("");
                    $(".schedule-form input[name='phone']").val("");
                    setTimeout(function(){
                        $(".notification").removeClass("on");
                        setTimeout(function(){
                            $(".notification").attr("class", "notification clearfix");
                        }, 500);
                    }, 4000);
                }, function(err){
                    console.log(err);
                    if(err.responseJSON && err.responseJSON.message.indexOf("duplicate key error") != -1){
                        var text = "Your email has already been registered.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $(".notification").addClass("info").addClass("on");
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
                    } else{
                        var text = "Uppss.. Error occured. Please try later.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $(".schedule-form button[type='button']").click();
                        $(".notification").addClass("error").addClass("on");
                        $(".schedule-form input[name='email']").val("");
                        $(".schedule-form input[name='name']").val("");
                        $(".schedule-form input[name='surname']").val("");
                        $(".schedule-form input[name='company']").val("");
                        $(".schedule-form input[name='job']").val("");
                        $(".schedule-form input[name='phone']").val("");
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
                    }
                });
            }
        }, 100);
    });
    
    $("#scheduleModal button[type='submit']").click(function(){
        setTimeout(function(){
            if(!$("#scheduleModal form").hasClass("invalid-form")){
                var data = {};
                data.name = {
                    first: $("#scheduleModal input[name='name']").val(),
                    last: $("#scheduleModal input[name='surname']").val()
                };
                data.email = $("#scheduleModal input[name='email']").val();
                data.company = $("#scheduleModal input[name='company']").val();
                data.jobTitle = $("#scheduleModal input[name='job']").val();
                data.phone = $("#scheduleModal input[name='phone']").val();
                $.ajax({
                    method: "POST",
                    url: api + "request-demo",
                    data: data
                }).then(function(res){
                    console.log(res);
                    var text = "Your request has been confirmed. We'll get in touch with you soon.";
                    $(".notification").attr("class", "notification clearfix");
                    $(".noti-text").text(text);
                    $("#scheduleModal .modal-close-btn").click();
                    $(".notification").addClass("success").addClass("on").addClass("big-noti");
                    $("#scheduleModal input[name='email']").val("");
                    $("#scheduleModal input[name='name']").val("");
                    $("#scheduleModal input[name='surname']").val("");
                    $("#scheduleModal input[name='company']").val("");
                    $("#scheduleModal input[name='job']").val("");
                    $("#scheduleModal input[name='phone']").val("");
                    setTimeout(function(){
                        $(".notification").removeClass("on");
                        setTimeout(function(){
                            $(".notification").attr("class", "notification clearfix");
                        }, 500);
                    }, 4000);
                }, function(err){
                    console.log(err);
                    if(err.responseJSON && err.responseJSON.message.indexOf("duplicate key error") != -1){
                        var text = "Your email has already been registered.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $(".notification").addClass("info").addClass("on");
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
                    } else{
                        var text = "Uppss.. Error occured. Please try later.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $("#scheduleModal .modal-close-btn").click();
                        $(".notification").addClass("error").addClass("on");
                        $("#scheduleModal input[name='email']").val("");
                        $("#scheduleModal input[name='name']").val("");
                        $("#scheduleModal input[name='surname']").val("");
                        $("#scheduleModal input[name='company']").val("");
                        $("#scheduleModal input[name='job']").val("");
                        $("#scheduleModal input[name='phone']").val("");
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
                    }
                });
            }
        }, 100);
    });
	
    $(".cmain-content-form button[type='submit']").click(function(){
        setTimeout(function(){
            if(!$(".cmain-content-form > form").hasClass("invalid-form")){
                var data = {};
                data.fullname = $(".cmain-content-form input[name='name']").val();
                data.email = $(".cmain-content-form input[name='email']").val();
                data.company = $(".cmain-content-form input[name='company']").val();
                data.subject = $(".cmain-content-form input[name='subject']").val();
                data.message = $(".cmain-content-form textarea").val();
                $.ajax({
                    method: "POST",
                    url: api + "contacts",
                    data: data
                }).then(function(res){
                    console.log(res);
                    var text = "Your message has been sent. We'll get in touch with you soon.";
                    $(".notification").attr("class", "notification clearfix");
                    $(".noti-text").text(text);
                    $(".notification").addClass("success").addClass("on").addClass("big-noti");
                    $(".cmain-content-form input[name='name']").val("");
                    $(".cmain-content-form input[name='email']").val("");
                    $(".cmain-content-form input[name='company']").val("");
                    $(".cmain-content-form input[name='subject']").val("");
                    $(".cmain-content-form textarea").val("");
                    setTimeout(function(){
                        $(".notification").removeClass("on");
                        setTimeout(function(){
                            $(".notification").attr("class", "notification clearfix");
                        }, 500);
                    }, 4000);
                }, function(err){
                    console.log(err);
                        var text = "Uppss.. Error occured. Please try later.";
                        $(".notification").attr("class", "notification clearfix");
                        $(".noti-text").text(text);
                        $(".notification").addClass("error").addClass("on");
                        $(".cmain-content-form input[name='name']").val("");
                        $(".cmain-content-form input[name='email']").val("");
                        $(".cmain-content-form input[name='company']").val("");
                        $(".cmain-content-form input[name='subject']").val("");
                        $(".cmain-content-form textarea").val("");
                        setTimeout(function(){
                            $(".notification").removeClass("on");
                            setTimeout(function(){
                                $(".notification").attr("class", "notification clearfix");
                            }, 500);
                        }, 4000);
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
    
    if($form.find("input[name='role']").length && !$form.find("input[name='role']").is(':checked')){
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
    console.log(success);
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

function hideNoti(){
    $(".notification").removeClass("on");
    setTimeout(function(){
        $(".notification").attr("class", "notification clearfix");
    }, 500);
}