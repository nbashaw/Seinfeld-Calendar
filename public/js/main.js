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
	
	// Homepage read less

	
	
	// Homepage screenshot hover
//	$('img').hover(
//		function(){
//			$('h1').replaceWith("<h1>Let's Go!</h1>")
//		},
//		function(){
//			$('h1').replaceWith("<h1>Track Your Progress</h1>")
//		}
//		);
	
	
	// Homepage screenshot signup fancybox
	$('#signup').fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
		
	});
	
});

