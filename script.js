const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });

}
// Back to Top Button

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

}
// Hamburger Menu

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuToggle){

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuToggle.innerHTML="✖";
    }else{
        menuToggle.innerHTML="☰";
    }

});

document.querySelectorAll("nav ul li a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");
        menuToggle.innerHTML="☰";

    });

});

}

// Form Validation

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const message=document.getElementById("message").value.trim();

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern=/^[0-9]{10}$/;

if(name===""){
alert("Please enter your name.");
return;
}

if(!emailPattern.test(email)){
alert("Please enter a valid email.");
return;
}

if(!phonePattern.test(phone)){
alert("Please enter a valid 10-digit phone number.");
return;
}

if(message.length<10){
alert("Message should be at least 10 characters.");
return;
}

alert("Message Sent Successfully! ✅");

form.reset();

});

}
// Image Slider

const slider = document.getElementById("slider");

const images = [
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
];

let currentSlide = 0;

function showSlide(index){
    slider.src = images[index];
}

function nextSlide(){
    currentSlide++;

    if(currentSlide >= images.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide--;

    if(currentSlide < 0){
        currentSlide = images.length - 1;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide,3000);
// Animated Counter

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            if (count < target) {
                count += increment;

                if (count > target) {
                    count = target;
                }

                counter.innerText = count;

                setTimeout(updateCounter, 20);

            } else {
                counter.innerText = target;
            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        startCounters();
        observer.disconnect();
    }

});

if(statsSection){
    observer.observe(statsSection);
}
// Modal Popup

const modal=document.getElementById("modal");
const openModal=document.getElementById("openModal");
const closeModal=document.getElementById("closeModal");

if(openModal){

openModal.addEventListener("click",()=>{

modal.style.display="flex";

});

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.style.display="none";

}

});

}
