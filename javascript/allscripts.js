let meuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "50vh";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

