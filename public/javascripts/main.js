$(document).ready(function () {
    /* service ranking*/
    $('#ranks ul li').hide().filter(':lt(7)').show();
    $('#full-list').click(function () {
        $('#ranks ul').find('li:last').siblings(':gt(5)').next().toggle();
    });
    /* service main content */
    $('.album-of-month-data').hide().filter(':eq(0)').show();
    $('.box').click(function (e) {
        if ($(e.target).hasClass('more-info')) return false;
        let id = $(this).data("id");
        $('.album-of-month-data').hide().filter(':eq(' + id + ')').show();
    })
    /* service boxes */
    $('.more-info').click(function () {
        $('.album-description').hide();
        $(this).closest('.box').find('.album-description').show().css('display', 'flex');
    });
});