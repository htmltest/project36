(function($) {

    $(document).ready(function() {

        if ($('html').hasClass('tablet')) {
            $('meta[name="viewport"]').attr('content', 'width=768');
        }

        if ($('html').hasClass('mobile')) {
            $('meta[name="viewport"]').attr('content', 'width=320');
        }

        $('.radio-item input:checked').parent().addClass('checked');
        $('.radio-item').click(function() {
            var curName = $(this).find('input').attr('name');
            $('.radio-item input[name="' + curName + '"]').parent().removeClass('checked');
            $(this).find('span').addClass('checked');
            $(this).find('input').prop('checked', true).trigger('change');
        });

        $('.checkbox input:checked').parent().addClass('checked');
        $('.checkbox span').click(function() {
            $(this).toggleClass('checked');
            $(this).find('input').prop('checked', $(this).hasClass('checked')).trigger('change');
        });

        if ($('html').hasClass('mobile') || $(window).width() <= 700) {
            $('.input input').each(function() {
                if ($(this).val() == '') {
                    $(this).parent().find('span').css({'display': 'block'});
                }
            });

            $('.input input').focus(function() {
                $(this).parent().find('span').css({'display': 'none'});
            });

            $('.input input').blur(function() {
                if ($(this).val() == '') {
                    $(this).parent().find('span').css({'display': 'block'});
                }
            });

            $('.input span').click(function() {
                $(this).parent().find('input').focus();
            });
        }

        $.extend($.validator.messages, {
            required: 'Не введен текст',
            email: 'Введен некорректный e-mail'
        });

        $('form').validate({
            rules: {
                repassword: {
                    equalTo: "#password"
                }
            }
        });

    });

})(jQuery);