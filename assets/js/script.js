'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * Countdown function
 */
let days = 15;
let hours = 21;
let minutes = 46;
let seconds = 8;

const countdownElements = document.querySelectorAll('.time');

function updateCountdown() {
    countdownElements[0].textContent = formatTime(days);
    countdownElements[1].textContent = formatTime(hours);
    countdownElements[2].textContent = formatTime(minutes);
    countdownElements[3].textContent = formatTime(seconds);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    clearInterval(countdownInterval);
                }
            }
        }
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

const countdownInterval = setInterval(updateCountdown, 1000);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
        sections[i].classList.add("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);