 
var jQuery2 = jQuery.noConflict();

jQuery2(document).tooltip({
	content: function() {
		var element = jQuery2(this);
		if (element.hasClass("date_class")) {
			return init_clock(element);
		}
	},
	track: true
});

function init_clock(element){
	// Following will work if date time displayed iin this format:  '21 Aus 2015, at 10:10PM'
	// var content = element.html();
	// var min     = parseInt(content.substr(-4, 2));
	// var hr      = parseInt(content.substr(-7, 2));
	// var date    = content.split(" ").slice(0,2).join(" ");
	
	var min     = parseInt(element.data('min'));
	var hr      = parseInt(element.data('hr'));
	var date    = element.data('date');

	return show_clock(hr, min, date);
}

function show_clock(hours, mins, date){
	var hdegree = hours * 30 + (mins / 2);
	var mdegree = mins * 6;
	return "<div class=\"clock\">\
				<li style=\"transform: rotate(" + hdegree + "deg);\" class=\"hour\"></li>\
				<li style=\"transform: rotate(" + mdegree + "deg);\" class=\"min\"></li>\
				<li class=\"date\">" + date + "</li>\
			</div>";
}