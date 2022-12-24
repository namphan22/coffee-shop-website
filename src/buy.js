import { arrGioHang ,addgiohang} from "/src/index.js";
export class buyProduct {
    getBestCoffeeId(id) {
        fetch(`https://6395b17e90ac47c680711c2c.mockapi.io/coffee-product-special-v1/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
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
            <div class="homepage__giohang--name">${obj.name}</div>
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