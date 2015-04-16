(function($) {

    $(document).ready(function() {

        if ($('html').hasClass('tablet')) {
            $('meta[name="viewport"]').attr('content', 'width=768');
        }

        if ($('html').hasClass('mobile')) {
            $('meta[name="viewport"]').attr('content', 'width=320');
        }

        $('input[type="text"], textarea').each(function() {
            $(this).val('');
            $(this).parent().find('span').css({'display': 'block'});
        });

        $('input[type="text"], textarea').keyup(function(e) {
            var curInput = $(this);
            var curVal = curInput.val();
            if (curVal == '') {
                curInput.parent().find('span').css({'display': 'block'});
            } else {
                curInput.parent().find('span').css({'display': 'none'});
            }
        });

        $('.step-1 .top-link').click(function() {
            $('.step-1').hide();
            $('.step-1-hint').show();
        });

        $('.step-1 input[type="text"]').keyup(function(e) {
            var curInput = $(this);
            var curVal = curInput.val();
            if (curVal != '') {
                $('.step-1 .next').addClass('active');
            } else {
                $('.step-1 .next').removeClass('active');
            }
        });

        $('.step-1-hint .top-link').click(function() {
            $('.step-1-hint').hide();
            $('.step-1').show();
        });

        $('.next').click(function() {
            if ($(this).hasClass('active')) {
                $('.next-btn').click();
            }
        });

        $('.step-2 .top-link').click(function() {
            $('.step-2').hide();
            $('.step-2-hint').show();
        });

        $('.step-2-hint .top-link').click(function() {
            $('.step-2-hint').hide();
            $('.step-2').show();
        });

        $('.step-2 input[type="text"]').keyup(function(e) {
            var curInput = $(this);
            var curVal = curInput.val();
            if (curVal != '') {
                $('.step-2 .next').addClass('active');
            } else {
                $('.step-2 .next').removeClass('active');
            }
        });

        $('.step-3 .top-link').click(function() {
            $('.step-3').hide();
            $('.step-3-hint').show();
        });

        $('.step-3-hint .top-link').click(function() {
            $('.step-3-hint').hide();
            $('.step-3').show();
        });

        $('.step-3 input[type="text"]').keyup(function(e) {
            var curInput = $(this);
            var curVal = curInput.val();
            if (curVal != '') {
                $('.step-3 .next').addClass('active');
            } else {
                $('.step-3 .next').removeClass('active');
            }
        });

        $('.step-3_5 .next').click(function() {
            $('.step-3_5').hide();
            $('body').removeClass('body-step-3_5');
            $('body').addClass('body-step-4');
            $('.step-4').show();
        });

        $('.step-4 textarea').keyup(function(e) {
            var curInput = $(this);
            var curVal = curInput.val();
            if (curVal != '') {
                $('.step-4 .next').addClass('active');
            } else {
                $('.step-4 .next').removeClass('active');
            }
        });

    });

})(jQuery);