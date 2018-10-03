$(document).ready(function(){
	var length = $(".main-about-staff").length, first = 1, last = 2;
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
});