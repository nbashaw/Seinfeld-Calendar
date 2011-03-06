$(function(){
	
	// Make Calendar Marks
	$('td.day').click(function(){
		$(this).toggleClass('done');
	});
	
	// Homepage read more
	$('span#read_more').click(function(){
	  $('span#read_more').hide();
		$('p#more_story').slideToggle('slow', function(){
			// done
		});
	});
	
});

