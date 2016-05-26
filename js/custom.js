$( document ).ready(function() {
	var bg_height = $('.bg').height();
	var bgW_height = $('.bg-white').height();
	var vCenter = (bg_height - bgW_height) / 2 - 10;
	$('.bg-white').css('top', vCenter + 'px');
	console.log(vCenter);
	$('.fading').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
		}
	);

	$("#event_search").click(function(e) {
		e.preventDefault();
		console.log('search');
		console.log($('#event_type').val());
		var event_type 		= $('#event_type').val();
		var event_month		= $('#event_month').val();
		var event_province	= $('#event_province').val();
		var data 			= 'event_type='+event_type+'&event_mont='+event_month+'&event_province='+event_province;
		$.ajax({
                type: "POST",
                url: "do_search.php",
                data: data,
                beforeSend: function(html) { 
                
                },
                success: function(html) { 
                    $("#results").show();
                    $("#results").append(html);
              }
        });
	});
});