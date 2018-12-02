
$('.carousel').carousel({
    interval: false,
    pause: true
})

$(document).ready(function () {
    // on document ready
    checkitem();
    $('.publish-btn').addClass('hide');
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
    $(".add-an-event-link").click(function(){
        $('.submit-btn').addClass('hide');
        $('.publish-btn').removeClass('hide');
    });

    $(".event-conducting-btn").click(function(){
        $('.submit-btn').removeClass('hide');
        $('.publish-btn').addClass('hide');
    });

    $(".event-description").keyup(function(){
        $(".event-description-length").text((200 - $(this).val().length));
    });
    $(".share-description").keyup(function(){
        $(".share-description-length").text((200 - $(this).val().length));
    });
    $('.event-date-time-picker,.event-date-picker').datetimepicker({
        format:'DD/MM/YYYY h:mm a',
        formatTime:'h:mm a',
        formatDate:'DD/MM/YYYY'
      });

      $.datetimepicker.setDateFormatter('moment');
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