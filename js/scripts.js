jQuery(document).ready(function () {

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /**
     * A recursive function that fades the page logo to 10% visibility 
     * and back to 100%
     */
    function blinkLogo(){
        $('.branding').fadeTo(300, 0.1).fadeTo(300, 1, blinkLogo);
    }

    blinkLogo(); // call the function for the first time

    $('[data-type="mineralwater"]').css('background', 'green');
    $('[data-type="proteinbar"]').css('background', 'blue');

    function printThisPage(){
        window.print();
    }

    $('.print-page-btn').click(printThisPage);

    function weatherAPI() {
        window.open('//api.openweathermap.org/data/2.5/weather?q=helsinki&appid=28e21cb6ea06ad686f32403a592b8398');
    };

    $('.weatherAPI-btn').click(weatherAPI); 
    
    $.ajax({
        url: '//api.openweathermap.org/data/2.5/weather?q=helsinki&APIKEY=28e21cb6ea06ad686f32403a592b8398',
        }).done(function(resp) {
            $('.weatherAPI-btn').text(`helsinki today is ${resp.main.temp} and it's feels like ${resp.main.feels_like}`);
            // alert(resp);

            // console.log(resp);
    });

    // console.log(resp.main.temp);
    

    

    $('.person-card p').each(function() {
        var html = $(this).html();
        var word = html.substr(0, html.indexOf(' '));
        var rest = html.substr(html.indexOf(' '));
        $(this).html(rest).prepend($('<strong/>').html(word)); 
    });
    
    $('.person-card:contains(Michael Lewiston)').prependTo('.people-cards');

    $('.navbar li a:contains(people)').text('Personnel');
    $('#people .headline').text('Personnel');
});