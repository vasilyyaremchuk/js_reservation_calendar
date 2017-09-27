var room = {
	month: '08', 
	year: '2017',
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
	getCalendar: function() {
		var markup = "Su	Mn	Tu	We	Th	Fr	Sa\n\r";
		var first_day = new Date(this.month + "/01/" + this.year);
		var first = first_day.getDay();
		var last = this.daysInMonth();
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
	daysInMonth: function() {
		return new Date(this.year, this.month, 0).getDate();
	},
	addReservation: function(new_date) {
		var reserved = this.reservationArray(this.reserved);
		if (reserved.indexOf(new_date) == -1) {
			return false;
		}
		else {
			this.reserved.push(new_date);
			return true;
		}
	},
	cancelReservation: function() {
		return false;
	},
};

console.log(room.getCalendar());
//console.log(room.addReservation(1));
//console.log(room.addReservation(2));
//console.log(room.getCalendar());
