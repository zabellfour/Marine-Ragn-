import HP from './modules/helpers';

(function($) {


    $('.acc-body').hover(function() {
        $(this).find('.grayscale').toggleClass('grayscale-off');
    });
    // When DOM is ready
    $(function() {
        HP.random(10, 20);
    });

}(jQuery));
