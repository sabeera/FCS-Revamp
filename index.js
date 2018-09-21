
$('.carousel').carousel({
    interval: false,
    pause: true
})

$(document).ready(function () {
    // on document ready
    checkitem();
    $("#myCarousel").on("slid.bs.carousel", "", checkitem);
    // Storing orginal data
    $('#truncate-text').data('content', $('#truncate-text').html()+'');
    //setTimeout(() => {
        // Applying truncation plugin
        $clamp(document.getElementById('truncate-text'), { clamp: 2, useNativeClamp: false});
    //}, 10);

    $(".show-more").click(function () {
        $('.show-less').removeClass('hide');
        $('.show-more').addClass('hide');
        $('.flex-container').addClass('set-height');
        // Reading Orginal content from data and adding it back
        $('#truncate-text').html($('#truncate-text').data('content'));
    });
    $(".show-less").click(function () {
        $('.show-less').addClass('hide');
        $('.show-more').removeClass('hide');
        $('.flex-container').removeClass('set-height');
        $clamp(document.getElementById('truncate-text'), { clamp: 3, useNativeClamp: false});
    });
});

// check function
function checkitem() {
    var $this = $('#myCarousel');
    if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        // Hide left arrow
        $this.children('.carousel-control-prev').hide();
        // But show right arrow
        $this.children('.carousel-control-next').show();
    } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        // Hide right arrow
        $this.children('.carousel-control-next').hide();
        // But show left arrow
        $this.children('.carousel-control-prev').show();
    } else {
        $this.children('.carousel-control-prev').show();
        $this.children('.carousel-control-next').show();
    }
}