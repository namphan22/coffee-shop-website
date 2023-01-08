export default class Storage{
    static saveBestProducts(bestProduct){
        localStorage.setItem("bestProduct",JSON.stringify(bestProduct));
    }
    static getBestProduct(id){
        let bestProduct = JSON.parse(localStorage.getItem("bestProduct"));
        return bestProduct.find((item)=>item.id ===id);
    }
    static saveAllProducts(AllProducts){
        localStorage.setItem("products",JSON.stringify(AllProducts));
    }
    static getAllProducts(id){
        let allProducts = JSON.parse(localStorage.getItem("products"));
        return allProducts.find((item)=>item.id ===id);
    }
    static saveCart(cart){
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem("cart")?
        JSON.parse(localStorage.getItem("cart")):[];
    }
    static displayQuantity(id){
        let amountPropeties=JSON.parse(localStorage.getItem("cart"))
        .find((item)=>item.id ===id);
        return amountPropeties.amount;

    }
}