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