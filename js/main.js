

let menu = document.querySelector(".menu-icon")
let nav = document.querySelector("nav")
let btnclose = document.querySelector(".close")
menu.onclick = function (){
    nav.classList.add("open")
}
btnclose.onclick = function () {
    this.parentElement.classList.remove("open")
    // console.log(this.parentElement);
}
document.onkeyup = function (e) {
    // console.log(e);
    if(e.key === "Enter"){
        nav.classList.remove("open")
    }
}

// Start Slider


// Get Slider Items | Array.from [Es6 Feature] 
const sliderImages = Array.from(document.querySelectorAll(".slider-container img"))
// console.table(sliderImages)

// Get Number Of Slider 
const slidesCount = sliderImages.length;
// console.log(slidesCount);

// Set Currnt Slide
var currntSlide = 1;

// Slid Number Element
const slideNumberElement = document.getElementById("slider-number")
// console.log(slideNumberElement); 

// Previous And Next Buttons

const nextButtons = document.getElementById("next")
const prevButtons = document.getElementById("prev")
// console.log(nextButtons,prevButtons);

// Handle Click On Previous And Next Buttons
nextButtons.onclick = nextSlider;
prevButtons.onclick = prevSlider;


// Create The Main Ul Element

const paginationElemnet = document.createElement("ul");

paginationElemnet.setAttribute("id",'paginationElemnet-ul')
// console.log(paginationElemnet);
// Create List Items
for(var i = 1; i <= slidesCount; i++){

    var paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i)
    paginationItem.appendChild(document.createTextNode(i))

    paginationElemnet.appendChild(paginationItem)
}
document.getElementById("indicators").appendChild(paginationElemnet)



const paginationCreateUl = document.getElementById('paginationElemnet-ul')



const paginationBullets = Array.from(document.querySelectorAll("#paginationElemnet-ul li"))
// console.log(paginationBullets);

for(var i = 0; i<paginationBullets.length; i++){
    paginationBullets[i].onclick=function (){
        currntSlide = parseInt(this.getAttribute("data-index"))
        theChecker()
    }
}

theChecker()
// Next Slide Function 
function nextSlider(){
    if(nextButtons.classList.contains("disabled")){
        return false
    }
    else{
        currntSlide++;
        theChecker()
    }
}
// Previous Slide Function 
function prevSlider(){
    if(prevButtons.classList.contains("disabled")){
        return false
    }
    else{
        currntSlide--;
        theChecker()
    }
}

// Create Checker Function
theChecker()
function theChecker(){
    removeAllActive()
    slideNumberElement.textContent = 'Slider #' + (currntSlide) + " of " + (slidesCount)
    
    sliderImages[currntSlide - 1].classList.add("active")
    // console.log(sliderImages);
    paginationCreateUl.children[currntSlide - 1].classList.add("active")
    // console.log(paginationCreateUl.children[0]);
    if(currntSlide === 1 ){
        prevButtons.classList.add("disabled")
    }else{
        prevButtons.classList.remove("disabled")
    }
    if(currntSlide === slidesCount ){
        nextButtons.classList.add("disabled")
    }else{
        nextButtons.classList.remove("disabled")
    }
}


function removeAllActive(){
    sliderImages.forEach(function(img){
        img.classList.remove("active")
    })
    paginationBullets.forEach(function  (bullet) {
        bullet.classList.remove("active")
    })
}

// End Slider

// Start Scroll To Top


let up = document.querySelector(".up")
// console.log(up);

window.onscroll = ()=>{
    // console.log(this.scrollY);
    // if(this.scrollY >= 100){
    //     up.classList.add("show")
    // }else{
    //     up.classList.remove("show")
    // }
    this.scrollY >= 100 ? up.classList.add("show") : up.classList.remove("show")
}

up.onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


// End Scroll To Top