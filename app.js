var room = {
	reserved: ['01', '3', '09-15', '18', '7'], 
	reservationArray: function(reserved_array) { 
		var reservation_array = [];
	    reserved_array.forEach(function(element) {
	    	var splited = element.split("-");
	    	//console.log(splited);
	    	if (splited[1]) {
	    		for (var i = splited[0]; i <= splited[1]; i++) {
				    reservation_array.push(parseInt(i));
				}
	    	}
	    	else {
	    		reservation_array.push(parseInt(element));
	    	}
		});
		return reservation_array;
	},
	getCalendar: function(month, year) {
		var markup = "Su	Mn	Tu	We	Th	Fr	Sa\n\r";
		var first_day = new Date(month + "/01/" + year);
		var first = first_day.getDay();
		var last = this.daysInMonth(month, year);
		var week = 0;
		var full_weeks = Math.ceil((last + first)/7);
		var reserved_days = this.reservationArray(this.reserved);
	    //console.log(reserved_days);
		for (var count = 1 - first; count < full_weeks*7-1; count++) {
			if (count > 0 && count <= last && (reserved_days.indexOf(count) === -1)) {
				markup += count + "	";
			}
			else {
				markup += "x	";
			}
			week++;
			if (week > 6) {
				markup += "\n\r";
				week = 0;
			}
		}
		return markup;
	},
	daysInMonth: function(month, year) {
		return new Date(year, month, 0).getDate();
	},
};

console.log(room.getCalendar('08', '2017'));
