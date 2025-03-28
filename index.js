var icon = document.getElementById("icon");


icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }else{
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
}