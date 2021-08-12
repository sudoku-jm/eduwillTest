// countDownTimer(".countdown-area","May 18,2021,00:00");


function countDownTimer($selector, $dateTime){
	const selector = $selector;
	const delay = 10;
	const end = new Date($dateTime).getTime(); 
	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;

	function showSecNew() {
		const now = new Date();
		const distDt = end - now;
		
		if (distDt < 0 ) {
			$(selector).find('.day').html("<em>0</em><em>0</em>");
			$(selector).find('.hour').html("<em>0</em><em>0</em>");
			$(selector).find('.min').html("<em>0</em><em>0</em>");
			$(selector).find('.sec').html("<em>0</em><em>0</em>");
			$(selector).find('.msec').html("<em>0</em><em>0</em>");
	
		} else{

			let day = Math.floor(distDt / _day).toString();
			let hour = Math.floor( (distDt % _day ) / _hour ).toString();
			let min = Math.floor( (distDt % _hour) / _minute ).toString();
			let sec = Math.floor( (distDt % _minute) / _second ).toString();
			let msec =  "00";
			try { msec = Math.floor( (distDt % _minute) % 1000).toString().substring(0,2); } catch(e) {}
	
	
			$(selector).find('.day').html((day.length == 1) ? `<em>0</em><em>${day}</em>` : `<em>${day.charAt(0)}</em><em>${day.charAt(day.length-1)}</em>`);
	
			$(selector).find('.hour').html((day.length == 1) ? `<em>0</em><em>${hour}</em>` : `<em>${hour.charAt(0)}</em><em>${hour.charAt(hour.length-1)}</em>`);
	
			$(selector).find('.min').html((min.length == 1) ? `<em>0</em><em>${min}</em>` : `<em>${min.charAt(0)}</em><em>${min.charAt(min.length-1)}</em>`);
	
			$(selector).find('.sec').html((sec.length == 1) ? `<em>0</em><em>${sec}</em>` : `<em>${sec.charAt(0)}</em><em>${sec.charAt(sec.length-1)}</em>`);
	
			$(selector).find('.msec').html((msec.length == 1) ? `<em>0</em><em>${msec}</em>` : `<em>${msec.charAt(0)}</em><em>${msec.charAt(msec.length-1)}</em>`);
	
			setTimeout(showSecNew, delay);

		}

		
	}

	setTimeout(showSecNew, delay);
}