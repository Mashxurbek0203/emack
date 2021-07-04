let burgerBtn = document.querySelector('.burger')
let btnsContainer = document.querySelector('.header__btns-wrapper')
let burgerSpan = document.querySelector('.burger__span')
let nav = document.querySelector('.header__nav')
let body = document.querySelector('.site-body')
burgerBtn.addEventListener("click", function() {
    burgerBtn.classList.toggle("burger--active")
    burgerSpan.classList.toggle("burger__span--active")
    btnsContainer.classList.toggle("header__btns-wrapper--active")
    nav.classList.toggle('header__nav--active')
    body.classList.toggle('site-body--active')
})

// if ()