export class renderProduct{
    renderCoffeeBest(){
        fetch("https://6395b17e90ac47c680711c2c.mockapi.io/coffee-special")
        .then((res) => res.json())
        .then((data) => {
            cards.innerHTML = data
                .map(
                    (
                        obj
                    ) => ` <div class="popular__card-best" card-idBest="${obj.id}" >
        <div class="popular__rating">
            <img
                src="./assests/img/rating_product.png"
                alt=""
            />
        </div>
        <div class="popular__card--img">
            <img
                src=${obj.img}
                alt=""
            />
        </div>
        <div class="popular__card--info">
            <div class="popular__card--name">
                ${obj.name}
            </div>
            <div class="popular__card--cost">$${obj.cost}</div>
        </div>
        <div class="popular__card--decribe">
            <div class="popular__card--btn">Hot</div>
            <div class="popular__card--btn">Cold</div>
            
            <div class="popular__card--buy">
                <img
                    src="./assests/img/card.png"
                    alt=""
                />
            </div>
        </div>
    </div>`
                )
                .slice(0, 3)
                .join("");
            this.muahangBestCoffee();
        });

    }
    renderCoffee(){
        fetch("https://639071e065ff41831113c6ea.mockapi.io/coffee-product")
        .then((res) => res.json())
        .then((data) => {
            cardsMenu.innerHTML = data
                .map(
                    (obj) => ` <div class="popular__card " card-id="${obj.id}" >
                    <div class="popular__rating">
                        <img
                            src="./assests/img/rating_product.png"
                            alt=""
                        />
                    </div>
                    <div class="popular__card--img">
                        <img
                            src=${obj.img}
                            alt=""
                        />
                    </div>
                    <div class="popular__card--info">
                        <div class="popular__card--name">
                            ${obj.name}
                        </div>
                        <div class="popular__card--cost">${obj.cost} K</div>
                    </div>
                    <div class="popular__card--decribe">
                    <div class="popular__card--subline">
                        ${obj.feedback}
                    </div>
                        <div class="popular__card--buy">
                            <img
                                src="./assests/img/card.png"
                                alt=""
                            />
                        </div>
                    </div>
                    </div>`
                )
                .join("");

            this.muahang();
        });

    }
    
    muahangBestCoffee() {
        const btncard = document.querySelectorAll(".popular__card-best");
        btncard.forEach((btn) => {
            btn.addEventListener("click", () => {
                const idCard = btn.getAttribute("card-idBest");
                getBestCoffeeId(idCard);
                btnshop.classList.add("active");
                setTimeout(() => {
                    btnshop.classList.remove("active");
                }, 2000);
            });
        });

    }
    muahang() {
        const btncard = document.querySelectorAll(".popular__card");
        btncard.forEach((btn) => {
            btn.addEventListener("click", () => {
                const idCard = btn.getAttribute("card-id");
                getCoffeeId(idCard);
                btnshop.classList.add("active");
                setTimeout(() => {
                    btnshop.classList.remove("active");
                }, 2000);
            });
        });
    }
    
    

}