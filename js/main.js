let priceText = document.querySelector(".price__range-text");
let priceTextValue = document.querySelector(".price__svg-p");
let priceInput = document.querySelector("#range");
let pricePlan = document.querySelectorAll(".price__plan-item");


priceInput.oninput = (()=>{
    let value = priceInput.value;
    priceTextValue.textContent = "$" + value;
    priceText.style.left = (value * 100 / 210 - 4) + "%";

    if (priceInput.value < 130) {
        pricePlan[0].classList.add("active");
        pricePlan[1].classList.remove("active");
        pricePlan[2].classList.remove("active");
    }else if(priceInput.value >= 130 && priceInput.value < 210) {
        pricePlan[0].classList.remove("active");
        pricePlan[1].classList.add("active");
        pricePlan[2].classList.remove("active");
    }else if(priceInput.value == 210) {
        pricePlan[0].classList.remove("active");
        pricePlan[1].classList.remove("active");
        pricePlan[2].classList.add("active");
    }
});


let burger = document.querySelector(".header__burger");
let burgerWindow = document.querySelector(".header__burger-window");
let burgerLines = document.querySelectorAll(".header__burger-line");

burger.addEventListener("click", function(){
    burgerWindow.classList.toggle("active");
    for (let i of burgerLines) {
        i.classList.toggle("active");
    }
})