$('.invisible').css('visibility','hidden')
$('.onOff').onclick(function () {
    $('dd').toggleClass('invisible')
})

$('dt').hover(
    function() {
        $(this).css('background-color', 'yellow');
    },
    function() {
        $(this).css('background-color', 'none');
    }
);
