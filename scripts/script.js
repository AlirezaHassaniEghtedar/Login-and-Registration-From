const icon = document.querySelector(".darkModeBtn");

icon.addEventListener('click' , () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "./img/sun.png"
    } else {
        icon.src = "./img/moon.png"
    }
})