(function($){
    $('.feature, .exit').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('class');

        if(target == 'feature'){
            $('.overlay').addClass('active');
        }
        if(target == 'exit'){
            $('.overlay').removeClass('active');
        }
    });
})(jQuery);