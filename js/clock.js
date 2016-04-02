function clockUpdate(){
	var currentDate = new Date();
	//var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
 	//var nd = new Date(utc + (3600000*offset));
 	var hours = currentDate.getHours();

	if(hours>23) {
		hours=hours-23;
	}

	if(hours<0) { 
		hours=23+hours;
	}

	var second_to_degree = (currentDate.getSeconds()+currentDate.getMilliseconds()/1000)/60*360;
	var minute_to_degree = currentDate.getMinutes()/60*360;
	var hour_to_degree = (hours+currentDate.getMinutes()/60)/12*360;
	
	$('#clock_hands div.hand.second').css({transform:'rotate('+ second_to_degree +'deg)'})
	$('#clock_hands div.hand.minute').css({transform:'rotate('+ minute_to_degree +'deg)'});
	$('#clock_hands div.hand.hour').css({transform:'rotate('+ hour_to_degree +'deg)'});
}