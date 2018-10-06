let menuMov = document.getElementById("menu");
let contentMain = document.getElementById("content-main");
let titleMenuMov = menuMov.getAttribute("title")

window.onload = function() {
    document.getElementById("menu-ico").addEventListener("click", show);
}

function show (){
    switch (titleMenuMov){
        case("closed"):
        contentMain.style.display = "none";
        menuMov.style.display = "initial";
        titleMenuMov = "open";
        document.getElementById("menu-ico").addEventListener("click", show);
        console.log("se cambia a open");
        console.log(titleMenuMov);
        break;
        case("open"):
        contentMain.style.display = "initial";
        titleMenuMov = "closed";
        menuMov.style.display = "none";
        document.getElementById("menu-ico").addEventListener("click", show);
        console.log("se cambia a closed");
        break;
    }
}