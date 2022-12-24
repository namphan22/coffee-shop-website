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

let basket = JSON.parse(localStorage.getItem("data"))||[];
export {authors};
export {cards,cardsMenu,btnshop};
export {arrGioHang,addgiohang} ;
import { Users } from "./user.js";
import {renderProduct} from "/src/render.js";


// function renderCoffeeBest() {
//     fetch("https://6395b17e90ac47c680711c2c.mockapi.io/coffee-special")
//         .then((res) => res.json())
//         .then((data) => {
//             cards.innerHTML = data
//                 .map(
//                     (
//                         obj
//                     ) => ` <div class="popular__card-best" card-idBest="${obj.id}" >
//         <div class="popular__rating">
//             <img
//                 src="./assests/img/rating_product.png"
//                 alt=""
//             />
//         </div>
//         <div class="popular__card--img">
//             <img
//                 src=${obj.img}
//                 alt=""
//             />
//         </div>
//         <div class="popular__card--info">
//             <div class="popular__card--name">
//                 ${obj.name}
//             </div>
//             <div class="popular__card--cost">$${obj.cost}</div>
//         </div>
//         <div class="popular__card--decribe">
//             <div class="popular__card--btn">Hot</div>
//             <div class="popular__card--btn">Cold</div>
            
//             <div class="popular__card--buy">
//                 <img
//                     src="./assests/img/card.png"
//                     alt=""
//                 />
//             </div>
//         </div>
//     </div>`
//                 )
//                 .slice(0, 3)
//                 .join("");
//             muahangBestCoffee();
//         });
// }


// function renderCoffee() {
//     fetch("https://639071e065ff41831113c6ea.mockapi.io/coffee-product")
//         .then((res) => res.json())
//         .then((data) => {
//             cardsMenu.innerHTML = data
//                 .map(
//                     (obj) => ` <div class="popular__card " card-id="${obj.id}" >
//                     <div class="popular__rating">
//                         <img
//                             src="./assests/img/rating_product.png"
//                             alt=""
//                         />
//                     </div>
//                     <div class="popular__card--img">
//                         <img
//                             src=${obj.img}
//                             alt=""
//                         />
//                     </div>
//                     <div class="popular__card--info">
//                         <div class="popular__card--name">
//                             ${obj.name}
//                         </div>
//                         <div class="popular__card--cost">${obj.cost} K</div>
//                     </div>
//                     <div class="popular__card--decribe">
//                     <div class="popular__card--subline">
//                         ${obj.feedback}
//                     </div>
//                         <div class="popular__card--buy">
//                             <img
//                                 src="./assests/img/card.png"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     </div>`
//                 )
//                 .join("");

//             muahang();
//         });
// }


// function renderUser() {
//     fetch("https://639071e065ff41831113c6ea.mockapi.io/users")
//         .then((res) => res.json())
//         .then((data) => {
//             authors.innerHTML = data
//                 .map(
//                     (obj) => `<div class="testimonial__author">
//                     <div class="testimonial__author--avt">
//                         <img src="${obj.avt}" alt="" />
//                     </div>
//                     <div class="testimonial__author--info">
//                         <div class="testimonial__author--name">
//                             ${obj.name}
//                         </div>
//                         <div class="testimonial__author--title">
//                             I really love the cappucino, the coffee
//                             was very smooth
//                         </div>
//                     </div>
//                 </div>`
//                 )
//                 .slice(0, 3)
//                 .join("");
//         });
// }

// function muahang() {
//     const btncard = document.querySelectorAll(".popular__card");
//     btncard.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             const idCard = btn.getAttribute("card-id");
//             getCoffeeId(idCard);
//             btnshop.classList.add("active");
//             setTimeout(() => {
//                 btnshop.classList.remove("active");
//             }, 2000);
//         });
//     });
// }

// function muahangBestCoffee() {
//     const btncard = document.querySelectorAll(".popular__card-best");
//     btncard.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             const idCard = btn.getAttribute("card-idBest");
//             getBestCoffeeId(idCard);
//             btnshop.classList.add("active");
//             setTimeout(() => {
//                 btnshop.classList.remove("active");
//             }, 2000);
//         });
//     });
// }
// get id all of coffees 



// function getCoffeeId(id) {
//     fetch(`https://639071e065ff41831113c6ea.mockapi.io/coffee-product-v1/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             addCardInShop(data);
//         });
// }

// function getBestCoffeeId(id) {
//     fetch(`https://6395b17e90ac47c680711c2c.mockapi.io/coffee-product-special-v1/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             addCardInShop(data);
//         });
// }
//  check items in the shop are added  yet
// function checkIsItemAvailable({img,name,cost,feedback,id}){
//     console.log(id);
//     return arrGioHang.some((element)=>element.id===id);
 
// }
//  add card in shop
const arrGioHang = [];
// function addCardInShop(obj) {
//     let checkItem = false;
//     if(checkIsItemAvailable(obj)){
//         checkItem =true;
//     }
//     else{
//     // console.log(checkIsItemAvailable(obj));
//     arrGioHang.push(obj);
//     addgiohang.innerHTML = arrGioHang
//         .map(
//             (obj) => `
//     <div class="homepage__giohang--sanpham">
//         <div class="homepage__giohang--image">
//             <img src=${obj.img} alt="" />
//         </div>
//         <div class="homepage__giohang--name">${obj.name}</div>
//         <div class="homepage__giohang--cost">${obj.cost} K</div>
//         <div class="homepage__giohang--x">              
//             <img src="./assests/img/rubbish-bin.png" alt="bin" />
//          </div>
//     </div>
//     `
//         )
//         .join("");
//     removeItemGioHang();
// }
// }

// move to cart icon

function giohang() {
    btnshop.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(btngiohang);
        btngiohang.classList.toggle("disable");
        backdrop.classList.remove('hidden-backdrop');
    });
    btnYourCoffee.addEventListener("click", (e) => {
        e.preventDefault();
        btngiohang.classList.toggle("disable");
    });
}
// remove ItemGioHang

// function removeItemGioHang() {
//     const timesItems = document.querySelectorAll(".homepage__giohang--x");
//     timesItems.forEach(
//         (timesItem, index) =>
//             (timesItem.onclick = () => {
//                 arrGioHang.splice(arrGioHang.indexOf(arrGioHang[index]), 1);
//                 timesItem.parentElement.remove();
//             })
//     );
// }




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



function increment(id){
    let selectedItemId =id;
    console.log(id);
    let search = undefined;
    if(search===undefined){
        basket.push({
            id:selectedItemId,
            itemNum:1

        })
    }
    

}
function homepage() {

    
    navbarActive();
    let render1 = new renderProduct();
    render1.renderCoffeeBest();
    render1.renderCoffee();
    let render2 = new Users();
    render2.renderUser();
    
    giohang();
    hiddenElm();
    showMoreCard();

    
    
}

homepage();
