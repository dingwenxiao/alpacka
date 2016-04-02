	var index=-1; 
function updateNextHello(id){
	index++; 
	if(index>$('#' + id +" .caption .hello ul li").length-1)
		index=0;
	var hello=$('#' + id +" .caption .hello ul li").eq(index);
	$('#' + id +" .caption .hello ul li").not(hello).stop().animate({opacity:0},800);
		setTimeout(function(){
			$('#' + id +" .caption .hello ul li").eq(index).stop().animate({opacity:1},1000);
				var helloWidth=$('#' + id +" .caption .hello ul li").eq(index).width();
				helloWidth = helloWidth*helloWidth*0.0045;
			$('#' + id +" .caption .hello .greeting").html("").animate({paddingLeft:helloWidth+"px"})
					},700)
}
