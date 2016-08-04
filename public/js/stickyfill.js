$(document).ready(function() {
    var top = document.getElementById('sticky').offsetTop;

    window.onscroll = function() {
        var y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (y >= top) {
            sticky.className = 'stuck';
        }
        else {
            sticky.className = 'kss-nav';
        }
    };
});
