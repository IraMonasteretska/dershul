
$(document).ready(function () {
    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('scrollheader');
        } else {
            $('.header').removeClass('scrollheader');
        }
    });

    if ($(this).scrollTop() > 20) {
        $('.header').addClass('scrollheader');
    } else {
        $('.header').removeClass('scrollheader');
    }

    // scroll
    $("header.header nav ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $("footer ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    $('.mobmenu').click(function () {
        $('.mobmenusect').addClass('showmenu');
    })

    $('.closemenu').click(function () {
        $('.mobmenusect').removeClass('showmenu');
    })

});

