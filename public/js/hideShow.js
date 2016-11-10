$(document).ready(function() {
    $('.show-hide-js').each(function(index, el) {
        $(this).on('click', function() {
            $(this).next().toggle();
        });
    });
});