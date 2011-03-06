(function($){
	$.fn.goalsaver = function(prefix){
		var storage = localStorage; // or sessionStorage
		var $this = $(this);
		
		if(!prefix){ prefix = $this.attr('id'); }
		prefix += ">"; // separate prefix from input name
		
		function save(){
			
		}
		
		function restore(){
			
		}
		
		function clear(){
			
		}
		
		$this.change(save);
		$this.submit(clear);
		
		restore();
	}
})(jQuery);