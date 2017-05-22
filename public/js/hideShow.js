$(document).ready(function() {

    $('.show-hide-js').each(function(){
       	var $dis = $(this),
    		originalbuttontext= $dis.text();

		$dis.attr('data-original-value', originalbuttontext);
    });

    $('.show-hide-js').each(function(index, el) {
		var $dis = $(this);

        $dis.on('click', function() {

        	if($dis.hasClass('open')){
	        	$dis.removeClass('open');
        		$dis.html($dis.attr('data-original-value'));
        	}else {
	        	$dis.addClass('open');
        		$dis.html($dis.attr('data-alt-value'));
        	}

            $(this).next().toggle();
        });

    });
});