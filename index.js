let user = document.querySelector(".nav-user-icon");
let settings=document.querySelector(".settings-menu")

user.addEventListener("click",()=>{
    settings.classList.toggle("hide-settings");
});

let events = document.querySelector(".events-see-all");

events.addEventListener("click" ,()=>{
    let hiddenevents = document.querySelectorAll(".hiddenevents");
    if(events.innerHTML=="See All"){
        for(e of hiddenevents){
            e.classList.remove("hide-events");
        }
        events.innerHTML="See Less";
    }
    else{
        document.querySelector(".hiddenevents").classList.add("hide-events");
        events.innerHTML="See All";
        for(e of hiddenevents){
            e.classList.add("hide-events");
        }
    }
});

let ad=document.querySelector(".ad-close");

ad.addEventListener("click",()=>{
    if(ad.innerHTML=="close"){
        document.querySelector(".advertisement").classList.add("close-ad");
        ad.innerHTML="See";
    } else {
        document.querySelector(".advertisement").classList.remove("close-ad");
        ad.innerHTML="close";
    }
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

