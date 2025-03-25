const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttributeNS(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
);
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttributeNS("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
};

ScrollReveal().reveal(".header_image img", {
    duration: 1000,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header_content .socials", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".popular_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover_card img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".discover_card:nth-child(2) img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".discover_card_content h4", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".discover_card_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".discover_card_content h3", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".discover_card_btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".banner_content .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".banner_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".banner_card", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});

ScrollReveal().reveal(".subscribe_content .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".subscribe_content_form", {
    ...scrollRevealOption,
    delay: 1000,
});