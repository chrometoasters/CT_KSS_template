jqKss(document).ready(function() {
    var $ = jqKss;

    // add a show/hide button to all nav levels that have sub navigation

    $('.kss-nav__menu-item').each(function(){
        var $dis = $(this);

        if($dis.find('ul').length){
            $dis.addClass('hassubnav');
            $('<button class="show_hide-content-button" value="+"/>').insertAfter($dis.find('a:first'));
        }
    });


    // show hide subnavigation

    $('.kss-nav .show_hide-content-button').on('click', function(e){
        var $dis = $(this),
        $aparently = $dis.parents('li:first');

        $aparently.toggleClass('open');

        e.preventDefault();
    });
});
