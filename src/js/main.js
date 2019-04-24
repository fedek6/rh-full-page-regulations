jQuery(document).ready(function ($) {
    // say hello
    console.log('%cHello, Want to hire me? Go to: http://realhe.ro', 'color: Red');

    // Main regulations object
    var $regulations = $('#rh-full-page-regulations');
    var $textContainer = $regulations.find('.rh-text');
    var $btnAccept = $regulations.find('.accept').prop('disabled', true);
    var read = false;

    // Check acceptance state
    if(sessionStorage.getItem('rh-regulations-accepted') === 'true') {
        $regulations.remove();
        $($regulations.data('controls')).removeClass('not-active');
    } else {
        $regulations.attr('aria-hidden', 'false');
    }

    /**
     * Accept action
     */
    $btnAccept.click(function(e) {
        console.log('INFO: User accepted agreement.');

        // Handle message
        $($regulations.data('controls')).removeClass('not-active');

        $regulations
            .one('transitionend webkitTransitionEnd oTransitionEnd', function() {
                $regulations.remove();
            })
            .attr('aria-hidden', 'true');

        // Set session storage
        sessionStorage.setItem('rh-regulations-accepted', 'true');
    });

    $regulations
        .find('.rh-inner-container')
        .bind('scroll', function(e) {
            var $elem = $(e.currentTarget);

            if( read ) return;
            
            /**
             * Check if scrolled to bottom
             */
            if( ( $textContainer.outerHeight() - $elem.height() ) - $elem.scrollTop() < 100  ) {
                console.log('INFO: User scrolled to the bottom. Now we can unlock Acppet button.');
                read = true;
                $btnAccept.prop('disabled', false);
            }
        });
});