$(function(){
	
	// Make Calendar Marks
	$('td.day').click(function(){
		$(this).toggleClass('done');
	});
	
	// Fancybox iFrame on home page
	$("#lifehacker").fancybox({
					'width'				: '75%',
					'height'			: '75%',
					'autoScale'			: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
	});
	
	
	// Homepage screenshot hover
	$('img').hover(
		function(){
			$('h1').replaceWith("<h1>Let's Go!</h1>")
		},
		function(){
			$('h1').replaceWith("<h1>Track Your Progress</h1>")
		}
		);
	
	
	// Homepage screenshot fancybox
	$('#signup').fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
		
	});
	
});

