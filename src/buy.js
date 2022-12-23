class buyProduct {
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