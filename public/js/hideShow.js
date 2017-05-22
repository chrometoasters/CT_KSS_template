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

    // add a show/hide button to all sections within .main

    $('.kss-section').each(function(){
        var $dis = $(this),
        $firstheading = $dis.find('h2:first');

        if($('.show-hide-content').length){
            $('<button class="show_hide-content-button" value="+"/>').insertAfter($firstheading);
        }
    });


    // show hide content

    $('.kss-section .show_hide-content-button').on('click', function(e){
        var $dis = $(this),
        $dissection = $dis.parents('.kss-section:first'),
        $container = $dissection.find('.show-hide-content:first'),
        containerinitialheight;


        if($dissection.hasClass('open')){
            containerinitialheight = $container.height();

            $container.attr('data-height', containerinitialheight);

            $dissection.removeClass('open');
            $container.css({'height': '0px'});
        }else{
            $dissection.addClass('open');
            $container.css({'height': 'auto'})
        }

        e.preventDefault();
    });
});