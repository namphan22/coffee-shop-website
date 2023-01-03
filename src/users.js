import { authors } from "./main.js";
export default class Users{
    renderUser() {
        fetch("https://639071e065ff41831113c6ea.mockapi.io/users")
            .then((res) => res.json())
            .then((data) => {
                authors.innerHTML = data
                    .map(
                        (obj) => `<div class="testimonial__author">
                        <div class="testimonial__author--avt">
                            <img src="${obj.avt}" alt="" />
                        </div>
                        <div class="testimonial__author--info">
                            <div class="testimonial__author--name">
                                ${obj.name}
                            </div>
                            <div class="testimonial__author--title">
                                I really love the cappucino, the coffee
                                was very smooth
                            </div>
                        </div>
                    </div>`
                    )
                    .slice(0, 3)
                    .join("");
            });
    }

}