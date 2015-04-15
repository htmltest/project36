(function($) {

    $(document).ready(function() {
        setInterval(function() {
            $('iframe').each(function() {
                $(this).height($(this).contents().find('body').height());
            });
        }, 500);
    });

})(jQuery);