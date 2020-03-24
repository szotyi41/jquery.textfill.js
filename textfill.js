(function($) {
    $.fn.textfill = function(options = { minFontSize: 8, maxFontSize: 30, setLineHeight: false, lineHeightGap: 0, disableWordWrap: false, debug: false, firstElement: 'div' }) {

        return this.each(function() {

            var container = $(this);
            var text = $(container).find(options.firstElement);
            var fontSize = parseInt(options.maxFontSize);
            var textWidth;
            var textHeight;
            var containerWidth = container.width();
            var containerHeight = container.height();
            
            // Word wrap
            if (options.disableWordWrap === true) {
                $(container).css({'white-space': 'nowrap'});
            }

            do {
                textWidth = text.width();
                textHeight = text.height();

                // Increase font size
                fontSize = fontSize - 1;

                // Log status
                if (options.debug === true) {
                    console.log(
                        containerWidth, textWidth, containerWidth > textWidth, 
                        containerHeight, textHeight, containerHeight > textHeight,
                        fontSize,
                        text.text()
                    );
                }

                // Set font size
                $(text).css({
                    'display': 'inline',
                    'font-size': fontSize + 'px'
                });

                // Set line height too
                if (options.setLineHeight) {
                    $(container).css({'line-height': (fontSize + options.lineHeightGap) + 'px'});
                }
                

            } while (

                // Fill to container horizontally
                ((textWidth >= containerWidth) || (textHeight >= containerHeight)) &&
                
                // Minimum font size
                (fontSize > options.minFontSize) && 

                // Maximum font size
                (fontSize < options.maxFontSize)
            );

        });

    }
})(jQuery);
