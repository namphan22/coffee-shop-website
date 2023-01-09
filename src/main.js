import Storage from "./storage.js";
import Animation from "./animation.js";
import Users from "./users.js";
import {closeShoppingCart} from "./closeCart.js"
export const authors = document.querySelector(".testimonial__author-list");
const cards = document.querySelector(".popular__card-list");
export const cardsMenu = document.querySelector(".popular__card-list2");
export const btngiohang = document.querySelector(".homepage__giohang");
const addgiohang = document.querySelector("#giohang");
export const hiddenElement = document.querySelectorAll(".hidden");
export const navbarHidden = document.querySelectorAll(".navbar__link");
const btnshop = document.querySelector(".navbar__cart");
const btnYourCoffee = document.querySelector(".about__content--btn-get");
export const showMore_btn = document.querySelector(".popular__btn-showmore");
export const backdrop = document.querySelector('.container__backdrop');
const btnClose = document.querySelector('.giohang--header__btnclose');
// const plusElement = document.querySelector('.plus');
const negativeElement = document.querySelector('.negative');
const totalItemInCart = document.querySelector('#cart-amount');

const totalPriceInCart = document.querySelector('.homepage__giohang--total');
const modal = document.querySelector('.container__modal');

let cart =[];//  store item in cart 
class UI{
    setUpApp(){
        cart = Storage.getCart();
       // console.log(cart[0]);
        this.setTotalItem(cart);
        this.intialItem(cart);
    }
    // this method for render data from (localStorage);
    intialItem(cart){
        cart.forEach((item)=>{
        if(item.id>=16){
            this.getBestCoffeeId(item)
        }
        else{
            this.getAllCoffeeId(item);
        }
        });
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
           this.buyBestCoffee();
           Storage.saveBestProducts(data);
        });
       

    }
    
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

            this.buyAllCoffees();
            Storage.saveAllProducts(data);
        });
      

    }
    
    buyBestCoffee() {
        const btncard = document.querySelectorAll(".popular__card--buy1");
        btncard.forEach((btn) => {
          
            btn.addEventListener("click", () => {
                const idCard = btn.getAttribute("card-idBest");
                let inCartCheck = cart.find(item => item.id ===idCard);
                if(inCartCheck){
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
             
                }
               
                btnshop.classList.add("active");
                setTimeout(() => {
                    btnshop.classList.remove("active");
                }, 2000);
            });
        });

    }
    buyAllCoffees() {
        const btncard = document.querySelectorAll(".popular__card--buy2");
        btncard.forEach((btn) => {
            btn.addEventListener("click", () => {
                const idCard = btn.getAttribute("card-id");
                let inCartCheck = cart.find(item => item.id ===idCard);
                if(inCartCheck){
                    this.modalCheckItemInCart();
                    modal.classList.remove('hidden-modal');
                    setTimeout(()=>{
                        modal.classList.add('hidden-modal');
                    },5000)
                    
                }
                else{
                let cartItem = {...Storage.getAllProducts(idCard),amount:1};
                
                cart =[...cart,cartItem];
                console.log(cartItem);
                Storage.saveCart(cart);
                this.setTotalItem(cart);
                this.getAllCoffeeId(cartItem);
             
                }
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
                const div = document.createElement("div");
                div.classList.add("homepage__giohang--sanpham");
                div.innerHTML =`
               
                  <div class="homepage__giohang--image">
                    <img src=${cardItem.img} alt="" />
                  </div>
                  <div class="homepage__giohang--middle">
                    <div class="homepage__giohang--name">${cardItem.name}</div>
                    <div class="homepage__giohang--cost">$ ${cardItem.cost}</div>

                    <div class="quantity"style="display:flex; align-items: center;gap:8px;">
                    <ion-icon class="quantity__btn quantity__plus" name="add-outline"data-id="${cardItem.id}"></ion-icon>
                    
                    <p class="item-amount" data-id="${cardItem.id}">
                       ${cardItem.amount}
                    </p>
                    
                    <ion-icon class=" quantity__btn quantity__minus"name="remove-outline" data-id="${cardItem.id}"></ion-icon>
                    </div>
                  </div>
                  <div class="homepage__giohang--end">
                  
                
                    <div class="homepage__giohang--x" data-id="${cardItem.id}">Remove</div>
                    
                 </div>
                `
                addgiohang.appendChild(div);
                this.removeItemGioHang();

//            });
    }
    getAllCoffeeId(cardItem){
        const div = document.createElement("div");
        div.classList.add("homepage__giohang--sanpham");
        div.innerHTML =`
       
            <div class="homepage__giohang--image">
                <img src=${cardItem.img} alt="" />
            </div>
            <div class="homepage__giohang--middle">
               <div class="homepage__giohang--name">${cardItem.name}</div>
               <div class="homepage__giohang--cost">$ ${cardItem.cost}</div>

               <div style="display:flex; align-items: center;gap:8px;">
                  <ion-icon  class="quantity__btn quantity__plus"name="add-outline"data-id="${cardItem.id}"></ion-icon>
        
                  <p class="item-amount" data-id="${cardItem.id}">
                    ${cardItem.amount}
                  </p>
        
                 <ion-icon class="quantity__btn quantity__minus"name="remove-outline" data-id="${cardItem.id}"></ion-icon>
               </div>
            </div>
            <div class="homepage__giohang--end">
      
    
             <div class="homepage__giohang--x" data-id="${cardItem.id}">Remove</div>
            </div>
        `
        addgiohang.appendChild(div);
        this.removeItemGioHang();

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
    cart() {
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
        btnClose.addEventListener('click',closeShoppingCart);
        this.cartLogic();
        this.clearCart();
        
    }
    cartLogic(){
        const itemAmounts = document.querySelectorAll('.item-amount');
        const plusquantitys = document.querySelectorAll('.quantity__btn.quantity__plus');
        const minusquantitys = document.querySelectorAll('.quantity__btn.quantity__minus');
    //    console.log(plusquantitys);
        plusquantitys.forEach((plusElement)=>{
            plusElement.addEventListener('click',()=>{
                let idPlus = plusElement.getAttribute("data-id");
                console.log(idPlus);
                let idplusEle = cart.findIndex((item)=>item.id===idPlus);
            //    console.log(plusElement);
            // console.log(idplusEle);
                cart[idplusEle].amount = cart[idplusEle].amount+1;
            //    console.log(amountTemp);
             
 
                Storage.saveCart(cart);
                
                plusElement.nextElementSibling.innerText =  cart[idplusEle].amount ;
                this.setTotalItem(cart);
                
                
                
                
            })
        })

        minusquantitys.forEach((minusElement)=>{
            minusElement.addEventListener('click',()=>{
                let idminus = minusElement.getAttribute("data-id");
               
                let idminusEle = cart.findIndex((item)=>item.id===idminus);
                console.log(idminusEle);
               
               cart[idminusEle].amount =  cart[idminusEle].amount-1;
               
                if( cart[idminusEle].amount>0){
                    Storage.saveCart(cart);
                
                    minusElement.previousElementSibling.innerText =  cart[idminusEle].amount;
                    this.setTotalItem(cart);

                }
                else{
                   alert('Ban da xoa nhieu lan qua roi');


                }
                
                
                
            })
        })


    }
    clearCart(){
        const clearCart = document.querySelector('.homepage__giohang--clear-cart');
        clearCart.addEventListener('click',()=>{
            cart =[];
            Storage.saveCart(cart);
            this.setTotalItem(cart);
            while(addgiohang.children.length>0){
                addgiohang.removeChild(addgiohang.children[0]);

            }
        })
    }
    
    
    

}

document.addEventListener('DOMContentLoaded',()=>{
    
    let animation = new Animation();
    animation.navbarActive();
    
    let render1 = new UI();
    render1.renderCoffeeBest();
    render1.renderCoffee();
    let render2 = new Users();
    render2.renderUser();
    render1.setUpApp();
    render1.cart();
 //   render1.cartLogic();
    animation.hiddenElm();
    animation.showMoreCard();
    animation.scrollfunction();
    

});
