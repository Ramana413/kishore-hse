$(document).ready(function () {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" PNVM KISHORE", "HSE PROFESSIONAL"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["HSE MANAGER"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,  
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });
     // experience auto update script
        $( document ).ready(function() {
        var startYear=parseInt($('.exp').attr("data-start"));
        var currentYear=parseInt(new Date().getFullYear());
        var difference=currentYear-startYear;
        $('.exp').text(difference);
        });


    // portfolio script
    const button = document.querySelectorAll('.portfolio-item');
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.querySelector('.overlay-inner img');
    
    function open(e){
        overlay.classList.add('open');
        const src = e.currentTarget.querySelector('img').src;
        overlayImage.src = src;
    }

    function close(){
        overlay.classList.remove('open');
    }

        button.forEach(button => button.addEventListener('click', open));
        overlay.addEventListener('click', close);
});





