(function ($) {
  Drupal.behaviors.myFirstBehavior = {
    attach: function (context, settings) {
     var selects_elem = $("select *");
			
	selects_elem.each(function () { 
		
		$(this).selectmenu();
	});	
    }
  };
})(jQuery);
