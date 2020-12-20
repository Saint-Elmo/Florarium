$(document).ready(() => {
    new WOW({
        animateClass: 'animate__animated'
    }).init();
    $('.popup').magnificPopup({
        type: 'image',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'products'
    });


    $('.plant-item').click((e) => {
        let currentElement = $(e.target)
        $('.plants-menu').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.plant-item').removeClass('active');
        $(currentElement).addClass('active');
    });

    $('#reviews-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '#reviews-nav',
        responsive: [
            {
                breakpoint: 1079,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }


            },
            {
                breakpoint: 652,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }


            }
        ]
    });
    $(' #reviews-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '#reviews-container',
        arrows: false,
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('.checkout').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('.reservation-cancel, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    })

    $('.reservation-success-cancel, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-success-close' || e.target.id === 'btn-success') {
            $('#reservation-container').hide();
        }
    })
    $('#reserve-button > button').click(() => {
        let name = $('#name')
        let number = $('#number')
        let text = $('#text')


        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            return;
        } else {

            name.css('border-color', '#273c11');
        }
        if (!number.val()) {
            number.siblings('.error-input').show();
            number.css('border-color', 'red');
            return;
        } else {
            number.css('border-color', '#273c11');
        }
        if (!text.val()) {
            text.siblings('.error-input').show();
            text.css('border-color', 'red');
            return;
        } else {

            text.css('border-color', '#273c11');
        }
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: 'name=' + name.val() + '&number=' + number.val() + '&text=' + text.val(),
            success: () => {
                $('#reservation-success').show();
                $('#reservation').hide();
            },
            error: () => {
                $('#reservation-container').hide();
                alert('Ошибка бронирования. Свяжитесь , пожалуйста, по номеру телефона.')
            }
        });
    });

    $('.action-call-me').click(() => {
        $('#call-me-container').css('display', 'flex');
    });

    $('.reservation-call-me-cancel, #call-me-container').click((e) => {
        if (e.target.id === 'call-me-container' || e.target.id === 'reservation-call-me-close') {
            $('#call-me-container').hide();
        }
    })
    $('.reservation-call-me-success, #call-me-container').click((e) => {
        if (e.target.id === 'call-me-container' || e.target.id === 'reservation-call-me-success-close') {
            $('#call-me-container').hide();
        }
    })

    $('#call-me-btn > button').click(() => {

        $('.error-input').hide();

        let myNumber = $('#my-number')
        let haSError = false;

        if (myNumber.val()) {
            $.ajax({
                type: 'post',
                url: 'call.php',
                data: 'number=' + myNumber.val(),
                success: () => {
                    $('#call-me-success').show();
                    $('#call-me').hide();
                },
                error: () => {
                    $('#call-me-container').hide();
                    alert('Ошибка бронирования. Свяжитесь , пожалуйста, по номеру телефона.')
                }
            });
        } else {
            myNumber.siblings('.error-input').show();
            myNumber.css('border-color', 'red');
        }

    });

    $('#burger').click(() => {
        $('#menu').addClass('open');
    });
    document.querySelectorAll('#menu > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }

    })

    $('#menu-cancel').click((e) => {
        if (e.target.id === 'menu-close') {
            $('#reservation-container').removeClass('open');
        }
    })
})