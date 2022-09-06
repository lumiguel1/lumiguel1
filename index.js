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
    $('.main-profile').animate({height: '85vh'});

    let element = document.querySelector(".cards-desactive");
    element.classList.add("cards-active");
    element.classList.remove("cards-desactive");

    console.log("OOOOOOOOOOOOOOi");
}

function openTitules(x) {
    let element = document.querySelector(".container-links");
    element.classList.add("container-links-small");
    element.classList.remove("container-links");

    $('.container-links-small').animate({height: '130px'});
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

$(document).ready(function () {
    $(".toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 800);
    });
});

document.addEventListener('scroll', (event) => {
    $('.container-links-small').animate({height: '0px'});

    let element = document.querySelector(".container-links-small");
    element.classList.add("container-links");
    element.classList.remove("container-links-small");  
})