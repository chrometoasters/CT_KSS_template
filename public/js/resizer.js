(function() {

    var resizeWrappers = document.getElementsByClassName('kss-resizable');

    // Taken from Chrome responsive tool
    var standardDimensions = [320,375,425,768,1024,1200,1440],
        reversed = [1440,1200,1024,768,425,375,320];

    // for covering up the iframe when dragging
    var tarp = document.createElement('div');
    tarp.className = 'kss-tarp';

    var addEvents = function(currentItem) {
        var currentWrapper = currentItem;

        var $currentWrapper = $(currentItem);

        var resizerHoriz = document.createElement('div');
        var resizerHorizWidth = document.createElement('div');

        var resizerVert = document.createElement('div');
        var resizerVertWidth = document.createElement('div');

        var $widthCounter = $currentWrapper.find('.kss-width'),
            $heightCounter = $currentWrapper.find('.kss-height');

        var $incrementorButton = $currentWrapper.find('.kss-resize-next'),
            $decrementorButton = $currentWrapper.find('.kss-resize-prev');

        // Create horiz
        resizerHoriz.className = 'kss-resizerHoriz';
        resizerHorizWidth.className = 'kss-resizerHoriz-width';
        currentWrapper.appendChild(resizerHoriz);
        resizerHoriz.appendChild(resizerHorizWidth);

        // Create vert
        resizerVert.className = 'kss-resizerVert';
        currentWrapper.appendChild(resizerVert);

        // dimensions
        $widthCounter.val(parseInt(document.defaultView.getComputedStyle(currentWrapper).width, 10));
        $heightCounter.val(parseInt(document.defaultView.getComputedStyle(currentWrapper).height, 10));

        // add resizer events
        resizerHoriz.addEventListener('mousedown', initDragHoriz, false);

        resizerVert.addEventListener('mousedown', initDragVert, false);

        var startX, startY, startWidth, startHeight;

        // handle change event
        $widthCounter.on('change', function() {
            currentWrapper.style.width = $widthCounter.val() + 'px';
        });

        $heightCounter.on('change', function() {
            currentWrapper.style.height = $heightCounter.val() + 'px';
        });


        // incrmemetor events
        $incrementorButton.on('click', function() {
            $.each(standardDimensions, function( index, value ) {
                var currentWidth = $widthCounter.val();
                if (value > currentWidth) {
                    $widthCounter.val(value);
                    $widthCounter.trigger('change');
                    return false;
                }
            });
        })

        $decrementorButton.on('click', function() {
            $.each(reversed, function( index, value ) {
                var currentWidth = $widthCounter.val();
                if (value < currentWidth) {
                    $widthCounter.val(value);
                    $widthCounter.trigger('change');
                    return false;
                }
            });
        })

        function initDragHoriz(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(currentWrapper).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(currentWrapper).height, 10);
            document.documentElement.addEventListener('mousemove', doDragHoriz, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function initDragVert(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(currentWrapper).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(currentWrapper).height, 10);
            document.documentElement.addEventListener('mousemove', doDragVert, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDragHoriz(e) {
            currentWrapper.appendChild(tarp);
            currentWrapper.style.width = (startWidth + e.clientX - startX) + 'px';
            $widthCounter.val(startWidth + e.clientX - startX);
        }

        function doDragVert(e) {
            currentWrapper.appendChild(tarp);
            currentWrapper.style.height = (startHeight + e.clientY - startY) + 'px';
            $heightCounter.val(startHeight + e.clientY - startY);
        }

        function stopDrag(e) {
            currentWrapper.removeChild(tarp);
            document.documentElement.removeEventListener('mousemove', doDragHoriz, false);
            document.documentElement.removeEventListener('mouseup', doDragHoriz, false);
            document.documentElement.removeEventListener('mousemove', doDragVert, false);
            document.documentElement.removeEventListener('mouseup', doDragVert, false);
        }
    }

    for(var i = 0; i < resizeWrappers.length; i++) {
        addEvents(resizeWrappers.item(i));
    }

    $('iframe').load(function(){
        console.log('loaded')
        var $iframes = $('iframe');
        $iframes.each(function(index, el) {
            var $iframe = $(this);
            console.log('blah')

            var $wrapper = $iframe.closest('.kss-resizable');
            var $heightCounter = $wrapper.find('.kss-height');
            $wrapper.css({
                height: $iframe.contents().find("body").height() + 20
            });
            $heightCounter.val($iframe.contents().find("body").height() + 20);
        });
    });

    // $('iframe').load(function() {
    //     var $iframe = $currentWrapper.find('iframe');

    //     console.log($iframe);

    //     $currentWrapper.css({
    //         height: $iframe.contents().find("body").height() + 20
    //     });
    //     $heightCounter.val($iframe.contents().find("body").height() + 20);
    // });

    // $('iframe').load(function() {
    //     console.log($(this).contents().find("body") );
    // });
    // $iframe.each(function(index, el) {
    //     console.log($(this).contents().height());
    // });

    // $('iframe').load(function() {
    //     console.log(this.contentWindow.document.body.offsetHeight + 'px');
    // });

})();
