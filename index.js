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

function onCheckBox(x) {
   var a = document.querySelector("#checc").checked;
   console.log(a);
   if(a == false) {
        console.log("desativado")
        document.getElementById("navPerfil").setAttribute("class", "profile-panel");
   } else {
        document.getElementById("navPerfil").setAttribute("class", "nav-active");
   }
}

function closeNav(x) {
    let className = document.querySelector("#navPerfil").className;
    if(className = "nav-active"){
        let c = document.querySelector("#checc").checked = false;
        onCheckBox();
    }
}