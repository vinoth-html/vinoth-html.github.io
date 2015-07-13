$(document).ready(function(){
		$('#grid-container').click(function(){
			$('.mobilesec').addClass('fun');
			
		});
		$('#grid-container1').click(function(){
			$('.mobilesec').removeClass('fun');
		});
		$('.bxslider').bxSlider();
		
		
		$('.all').click(function(){
			$('.sam, .app, .son, .nok').fadeIn(800);
		});
		$('.nokia').click(function(){
			$('.sam, .app, .son').fadeOut(800);
			$('.nok').fadeIn(800);
		});
		$('.samsung').click(function(){
			$('.nok, .app, .son').fadeOut(800);
			$('.sam').fadeIn(800);
		});
		$('.apple').click(function(){
			$('.nok, .sam, .son').fadeOut(800);
			$('.app').fadeIn(800);
		});
		$('.sony').click(function(){
			$('.nok, .sam, .app').fadeOut(800);
			$('.son').fadeIn(800);
		});
		
		function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 
	var click=0;
	$('.addcart').click(function(){
		 var a = $('.addcart').parents().prev('.imgsec').children().find('.price').html();
		  var cartamount = parseInt(a.replace('$',"").replace(' ',""));
		  var prevamout = parseInt(getCookie('amount'));
		  var total;
		  
		  if(!isNaN(prevamout))
			total = cartamount + prevamout;
		  else
			total = cartamount;
		  setCookie('amount', total, 7);
		  $('.value1').html(total);
		  click = click+1;
		  $('.count').html(click);
		  
	});
	
	$('.imgsec img').click(function(){
		$('.mobilesec').fadeOut(800);
		$('.defn').fadeIn(800);
	});
	$('.bckhome').click(function(){
		$('.defn').fadeOut(800);
		$('.mobilesec').fadeIn(800);
	});
	
	$(".add-cart-button .addcart").click(function(){
		$(this).css("background","green");
	});
	
	});
	
	