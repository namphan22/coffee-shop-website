const authors = document.querySelector(".testimonial__author-list");
const cards = document.querySelector(".popular__card-list");
const cardsMenu = document.querySelector(".popular__card-list2");
const btngiohang = document.querySelector(".homepage__giohang");
const addgiohang = document.querySelector("#giohang");
const hiddenElement = document.querySelectorAll(".hidden");
const navbarHidden = document.querySelectorAll(".navbar__link");
const btnshop = document.querySelector(".navbar__cart");
const btnYourCoffee = document.querySelector(".about__content--btn-get");
const showMore_btn = document.querySelector(".popular__btn-showmore");
const backdrop = document.querySelector('.container__backdrop');
const btnClose = document.querySelector('.giohang--header__btnclose');
const plusElement = document.querySelector('.plus');
const negativeElement = document.querySelector('.negative');
const totalItemInCart = document.querySelector('#cart-amount');

const totalPriceInCart = document.querySelector('.homepage__giohang--total');
const modal = document.querySelector('.container__modal');
let cart =[];
class UI{
    setUpApp(){
        cart = Storage.getCart();
        console.log(cart[0]);
        this.setTotalItem(cart);
        this.intialItem(cart);
    }
    // this method for render data from database(localStorage);
    intialItem(cart){
        cart.forEach((item)=>this.getBestCoffeeId(item));
    }
    renderCoffeeBest(){
        fetch("https://6395b17e90ac47c680711c2c.mockapi.io/coffee-special")
        .then((res) => res.json())
        .then((data) => {
            cards.innerHTML = data
                .map(
                    (
                        obj
                    ) => ` <div class="popular__card-best" >
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
            <div class="popular__card--cost"><span>đ</span>${obj.cost}.000</div>
        </div>
        <div class="popular__card--decribe">
            <div class="popular__card--btn">Hot</div>
            <button class="popular__card--buy1" card-idBest="${obj.id}">
            Add cart
            </button>
        </div>
    </div>`
                )
                .slice(0, 3)
                .join("");
           this.muahangBestCoffee();
           Storage.saveBestProducts(data);
        });
       

    }
    // https://639071e065ff41831113c6ea.mockapi.io/coffee-product
    renderCoffee(){
        fetch("https://639071e065ff41831113c6ea.mockapi.io/coffee-product-v1")
        .then((res) => res.json())
        .then((data) => {
            cardsMenu.innerHTML = data
                .map(
                    (obj) => ` <div class="popular__card" >
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
                        <div class="popular__card--cost"><span>đ</span>${obj.cost}.000</div>
                    </div>
                    <div class="popular__card--decribe">
                    <div class="popular__card--subline">
                        ${obj.feedback}
                    </div>
                        <button class="popular__card--buy2" card-id="${obj.id}" >
                          Add cart
                        </button>
                    </div>
                    </div>`
                )
                .join("");

            this.muahang();
        });
      

    }
    
    muahangBestCoffee() {
        const btncard = document.querySelectorAll(".popular__card--buy1");
        btncard.forEach((btn) => {
           // console.log(btn.getAttribute("card-idBest"));
            btn.addEventListener("click", () => {
                const idCard = btn.getAttribute("card-idBest");
                // let getBestCoffee = new buyProduct();
                // getBestCoffee.getBestCoffeeId(idCard);

                let inCartCheck = cart.find(item => item.id ===idCard);
                if(inCartCheck){
                    // alert('Bạn đã thêm món hàng này vào giỏ hàng');
                    
                    this.modalCheckItemInCart();
                    modal.classList.remove('hidden-modal');
                    setTimeout(()=>{
                        modal.classList.add('hidden-modal');
                    },5000)
                    

                }
                else{
                let cartItem = {...Storage.getBestProduct(idCard),amount:1};
                
                cart =[...cart,cartItem];
                console.log(cartItem);
                Storage.saveCart(cart);
                this.setTotalItem(cart);
                this.getBestCoffeeId(cartItem);
               // console.log(cart);
             //   btn.target.disabled =true;
                }
//               
                btnshop.classList.add("active");
                setTimeout(() => {
                    btnshop.classList.remove("active");
                }, 2000);
            });
        });

    }
    muahang() {
        const btncard = document.querySelectorAll(".popular__card--buy2");
        btncard.forEach((btn) => {
            btn.addEventListener("click", () => {
                const idCard = btn.getAttribute("card-id");
                // let getAllCoffee = new buyProduct();
                
                // getAllCoffee.getCoffeeId(idCard);
                btnshop.classList.add("active");
                setTimeout(() => {
                    btnshop.classList.remove("active");
                }, 2000);
            });
        });
    }
    setTotalItem(cart){
        let totalItem =0;
        let totalPrice = 0;
        cart.forEach(item => {
            totalItem += item.amount;
            totalPrice+=item.amount*item.cost;

        });
        totalItemInCart.textContent = totalItem;
        totalPriceInCart.textContent = totalPrice;
       
    }
    getBestCoffeeId(cardItem) {
//        fetch(`https://6395b17e90ac47c680711c2c.mockapi.io/coffee-product-special-v1/${id}`)
//            .then((res) => res.json())
//            .then((obj) => {
               // console.log();
                const div = document.createElement("div");
                div.classList.add("homepage__giohang--sanpham");
                div.innerHTML =`
               
                  <div class="homepage__giohang--image">
                    <img src=${cardItem.img} alt="" />
                  </div>
                  <div class="homepage__giohang--middle">
                    <div class="homepage__giohang--name">${cardItem.name}</div>
                    <div class="homepage__giohang--cost">$ ${cardItem.cost}</div>
                    <div class="homepage__giohang--x" data-id="${cardItem.id}">Remove</div>
                  </div>
                  <div class="homepage__giohang--end">
                    <i class="fas fa-chevron-up" data-id=${cardItem.id}>
                    </i>
                    <p class="item-amount">
                       ${cardItem.amount}
                    </p>
                    <i class="fas fa-chevron-down" data-id=${cardItem.id}></i>
                 </div>
                `
                addgiohang.appendChild(div);
                this.removeItemGioHang();

//            });
    }
    // method for check item in card inserted
    modalCheckItemInCart(){
        // const divNode = document.createElement("div");
        // divNode.classList.add("modal__content");
        // divNode.innerHTML =
        const text=
        `<div class="modal__content">
           <button class="modal__close">&times;</button>
           <div class="content">Bạn đã chọn món này rồi</div>
        </div>
        `
      // console.log(text);
        modal.innerHTML = text;
        
    }
    removeItemGioHang() {
        const timesItems = document.querySelectorAll(".homepage__giohang--x");
        timesItems.forEach(
            (timesItem, index) =>
                (timesItem.onclick = () => {
                    const getid = timesItem.getAttribute("data-id"); 
                    cart = cart.filter((item)=> item.id!=getid);
                    addgiohang.removeChild(timesItem.parentElement.parentElement);
                    this.setTotalItem(cart);
                    Storage.saveCart(cart);
                    
                })
        );
    }
   
    
    
    

}
class Users{
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

class buyProduct {
    getBestCoffeeId(id) {
        fetch(`https://6395b17e90ac47c680711c2c.mockapi.io/coffee-product-special-v1/${id}`)
            .then((res) => res.json())
            .then((data) => {
//                console.log(data);
//                addCardInShop(data);
                this.addCardInShop(data);
            });
    }
    getCoffeeId(id) {
        fetch(`https://639071e065ff41831113c6ea.mockapi.io/coffee-product-v1/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.addCardInShop(data);
            });
    }
    addCardInShop(obj) {
        let checkItem = false;
        if(this.checkIsItemAvailable(obj)){
            checkItem =true;
        }
        else{
        // console.log(checkIsItemAvailable(obj));
        arrGioHang.push(obj);
        addgiohang.innerHTML = arrGioHang
            .map(
                (obj) => `
        <div class="homepage__giohang--sanpham">
            <div class="homepage__giohang--image">
                <img src=${obj.img} alt="" />
            </div>
            <h2 class="homepage__giohang--name">${obj.name}</h2>
            <div class="homepage__giohang--cost">${obj.cost} K</div>
            <div class="homepage__giohang--x">              
                <img src="./assests/img/rubbish-bin.png" alt="bin" />
             </div>
        </div>
        `
            )
            .join("");
        this.removeItemGioHang();
    }
    }
    checkIsItemAvailable({img,name,cost,feedback,id}){
        console.log(id);
        return arrGioHang.some((element)=>element.id===id);
     
    }
    removeItemGioHang() {
        const timesItems = document.querySelectorAll(".homepage__giohang--x");
        timesItems.forEach(
            (timesItem, index) =>
                (timesItem.onclick = () => {
                    arrGioHang.splice(arrGioHang.indexOf(arrGioHang[index]), 1);
                    timesItem.parentElement.remove();
                })
        );
    }
}

function giohang() {
    btnshop.addEventListener("click", (e) => {
        e.preventDefault();
//        console.log(btngiohang);
        btngiohang.classList.toggle("disable");
        backdrop.classList.remove('hidden-backdrop');
    });
    btnYourCoffee.addEventListener("click", (e) => {
        e.preventDefault();
        btngiohang.classList.toggle("disable");
    });
    
}

//  scroll secction
function hiddenElm() {
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
function navbarActive() {
    navbarHidden.forEach((button) => {
        button.addEventListener("click", () => {
            removeClass();
            button.classList.add("active");
        });
    });
}
// active item navbar
function removeClass() {
    navbarHidden.forEach((button) => {
        button.classList.remove("active");
    });
}

// btn show more
function showMoreCard() {
    showMore_btn.addEventListener("click", () => {
        console.log(showMore_btn);
        cardsMenu.classList.toggle("show1");
    });
}
const closeShoppingCart =function(){
    btngiohang.classList.toggle('disable');
    backdrop.classList.toggle('hidden-backdrop');
}
btnClose.addEventListener('click',closeShoppingCart);





class Storage{
    static saveBestProducts(bestProduct){
        localStorage.setItem("bestProduct",JSON.stringify(bestProduct));
    }
    static getBestProduct(id){
        let bestProduct = JSON.parse(localStorage.getItem("bestProduct"));
        return bestProduct.find((item)=>item.id ===id);
    }
    static saveCart(cart){
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem("cart")?
        JSON.parse(localStorage.getItem("cart")):[];
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    navbarActive();
    let render1 = new UI();
    render1.renderCoffeeBest();
    render1.renderCoffee();
    let render2 = new Users();
    render2.renderUser();
    render1.setUpApp();
    
    giohang();
    // render1.handleLogicCart();
    
    hiddenElm();
    showMoreCard();

});
