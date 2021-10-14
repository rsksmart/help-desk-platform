
//slide user content
jQuery(function() {
    jQuery('.showSingle').click(function() {
        $(this).toggleClass('active');
        $('.showSingle').not(this).removeClass('active');
        var index = $(this).index(),
            newTarget = jQuery('.userContent').eq(index);
        jQuery('.userContent').not(newTarget).slideUp('slow')
        newTarget.delay('fast').slideToggle('slow')
        return false;
    })
});


