(function($) {
    $(function() {
        var jcarousel = $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        var setup = function(data) {

            var html = '<ul>';

            $(data).each(function() {
                html += '<li>';
                html += this.outerHTML;
                html += '</li>';
            });

            html += '</ul>';
            console.log(data);

            // Append items
            jcarousel
                .html(html);

            // Reload carousel
            jcarousel
                .jcarousel('reload');
        };

        $.get('/items/', setup);
    });
})(jQuery);
