$(function(){
	
	// Make Calendar Marks
	$('td.day').click(function(){
		$(this).toggleClass('done');
	});
	
	// Homepage read more
	$('span#read_more').click(function(){
		$('p#more_story').slideToggle('slow', function(){
			// change text to read less.
		});
	});
		
	// Homepage screenshot signup fancybox
	$('#signup').fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
		
	});
	
	$('#submit').click(function(){
		var goal = $('#goal').val();
		localStorage.setItem('goal', goal);
	});
	
});

