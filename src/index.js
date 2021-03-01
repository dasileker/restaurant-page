import { Navigation } from "./navigation";
import { initPage } from "./pages/mainpage";
import { homePage } from "./pages/home";
import { aboutPage } from "./pages/about";
import { menuPage } from "./pages/menu";
import { contactPage } from "./pages/contact";
import favicon from "/src/assets/burger-favicon.png";
// import "./main.css";

(function () {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = favicon;
  document.getElementsByTagName("head")[0].appendChild(link);
})();

const content = document.querySelector(".content");
content.append(initPage());

const mainContent = document.querySelector(".main-content");
mainContent.append(homePage());
mainContent.append(aboutPage());
mainContent.append(menuPage());
mainContent.append(contactPage());

const nav = new Navigation();
const pages = document.querySelectorAll(".pages");
for (let i = 1; i < pages.length; i++) {
  pages[i].classList.add("hide");
}

const hidePages = () => {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.add("hide");
  }
};

const ctaBtn = document.querySelector(".cta-btn");
ctaBtn.addEventListener("click", function () {
  const menu = document.querySelector(".menu-page");
  hidePages();
  menu.classList.remove("hide");
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  const home = document.querySelector(".home-page");
  hidePages();
  home.classList.remove("hide");
});

nav.onClick((e) => {
  if (e.target.id === "home") {
    const home = document.querySelector(".home-page");
    hidePages();
    home.classList.remove("hide");
  }

  if (e.target.id === "about") {
    const about = document.querySelector(".about-page");
    hidePages();
    about.classList.remove("hide");
  }

  if (e.target.id === "menu") {
    const menu = document.querySelector(".menu-page");
    hidePages();
    menu.classList.remove("hide");
  }

  if (e.target.id === "contact") {
    const contact = document.querySelector(".contact-page");
    hidePages();
    contact.classList.remove("hide");
  }
});
