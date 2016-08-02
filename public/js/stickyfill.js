(function() {
    var sticky = document.querySelector('.sticky-item');
    var menuPosition = sticky.getBoundingClientRect();
    var placeholder = document.createElement('div');
    placeholder.style.width = menuPosition.width + 'px';
    placeholder.style.height = menuPosition.height + 'px';
    var isAdded = false;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= menuPosition.top && !isAdded) {
            sticky.classList.add('sticky');
            sticky.parentNode.insertBefore(placeholder, sticky);
            isAdded = true;
        } else if (window.pageYOffset < menuPosition.top && isAdded) {
            sticky.classList.remove('sticky');
            sticky.parentNode.removeChild(placeholder);
            isAdded = false;
        }
    });

})();