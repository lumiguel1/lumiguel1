$(document).ready(function(e) {
    $('#nav a').click(function(e) {
        e.preventDefault();

        var id = $(this).attr('href');
        targetOffset = $(id).position().top;
        var targetOffset = targetOffset - 165;
        console.log(targetOffset);

        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    });
})

function profile(x) {
    let target = document.querySelector("#navPerfil");
    let slid = target.animate([
        {
            transform: 'translate(0,0)'
        },
        {
            transform: 'translate(200px,0)'
        }
    ], 500)
    slid.addEventListener('finish', function() {
        target.style.transform = 'translate(200px, 0)'
    });
}

function openSkills(x) {
    $('.main-profile').animate({height: '80vh'});

    let element = document.querySelector('.cards-active');
    element.setAttribute("display", "flex");
}

function closeNav(x) {
    let target = document.querySelector("#navPerfil");
    let slid = target.animate([
        {
            transform: 'translate(200px,0)'
        },
        {
            transform: 'translate(0,0)'
        }
    ], 500)
    slid.addEventListener('finish', function() {
        target.style.transform = 'translate(0, 0)'
    });
}