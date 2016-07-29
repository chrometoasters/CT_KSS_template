(function() {

    var resizeWrappers = document.getElementsByClassName('kss-resizable');
    console.log('run')

    var addEvents = function(currentItem) {
        var currentWrapper = currentItem;

        var resizer = document.createElement('div');
        var resizerWidth = document.createElement('div');
        resizer.className = 'kss-resizer';
        resizerWidth.className = 'kss-resizer-width';
        currentWrapper.appendChild(resizer);
        resizer.appendChild(resizerWidth);

        resizerWidth.innerHTML = parseInt(document.defaultView.getComputedStyle(currentWrapper).width, 10) + 'px';

        resizer.addEventListener('mousedown', initDrag, false);

        var startX, startY, startWidth, startHeight;

        function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(currentWrapper).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(currentWrapper).height, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDrag(e) {
            currentWrapper.style.width = (startWidth + e.clientX - startX) + 'px';
            resizerWidth.innerHTML = (startWidth + e.clientX - startX) + 'px';
        }

        function stopDrag(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
    }

    for(var i = 0; i < resizeWrappers.length; i++) {
        addEvents(resizeWrappers.item(i));
    }

})();
