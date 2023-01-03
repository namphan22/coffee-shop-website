import { navbarHidden,hiddenElement,showMore_btn,cardsMenu } from "./main.js";
export default class Animation{
    //  scroll secction
    hiddenElm() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });
        hiddenElement.forEach((el) => observer.observe(el));
    }
    // active item navbar
    navbarActive() {
        navbarHidden.forEach((button) => {
            button.addEventListener("click", () => {
                this.removeClass();
                button.classList.add("active");
            });
        });
    }
    // active item navbar
    removeClass() {
    navbarHidden.forEach((button) => {
        button.classList.remove("active");
    });
    }
    // btn show more
    showMoreCard() {
    showMore_btn.addEventListener("click", () => {
      //  console.log(showMore_btn);
        cardsMenu.classList.toggle("show1");
    });
    }

}