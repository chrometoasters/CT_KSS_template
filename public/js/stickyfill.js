(function() {
    var top = document.getElementById('sticky').offsetTop;

    window.onscroll = function() {
        console.log(top)
        var y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (y >= top) {
            sticky.className = 'stuck';
        }
        else {
            sticky.className = 'kss-nav';
        }
    };
})();
