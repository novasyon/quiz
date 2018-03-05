/*!
 * sg developer PB Library v1.11.3
 * Copyright 2016,2020 sg webdeveloper
 * Released under the pbwebsgdeveloper
 *
 * Date: 16-1-2016 
 */

/*---------------------------------------------------------------------------------
                           window load
----------------------------------------------------------------------------------------------*/  
	
  $(document).ready(function(e) {
       
	    $('a').on('dragstart', function(event) { event.preventDefault(); });
		$('img').on('dragstart', function(event) { event.preventDefault(); });
		  
	   

		 leftmenuopenclose();
		 optionopenclose();
		
});

/*---------------------------------------------------------------------------------
                          menuuuside
----------------------------------------------------------------------------------------------*/  

  
  
 function leftmenuopenclose()
 {
    	 $('.hd_menu').click(function(e) {
              /*  $('.leftmenup').toggle('slow');
				$('.hd_menu').toggleClass('hd_back');*/
				$('.leftmenup').animate({width:'toggle'});
   				 //$('.hd_menu').toggleClass('hd_back');
				//$('.container_inner').toggleClass('ocity');
          });
        
    	 	
 }
 function optionopenclose()
 {
    	  $('.hd_opt_menu').click(function(e) {
                $('.optmenup').toggle('slow'); 
				
				
          });
 }
 


  
  








