
let user = document.querySelector(".nav-user-icon");
let settings=document.querySelector(".settings-menu")

user.addEventListener("click",()=>{
    settings.classList.toggle("hide-settings");
});


let dark=document.querySelector("#dark-btn");

dark.addEventListener("click",()=>{
    dark.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
})

if(localStorage.getItem("theme")=="light"){
    dark.classList.remove("dark-mode");
    document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme")=="dark"){
    dark.classList.add("dark-mode");
    document.body.classList.add("dark-theme");
} else{
    localStorage.setItem("theme","light");
}

