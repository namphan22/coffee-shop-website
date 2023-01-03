import { btngiohang,backdrop } from "./main.js";
export const closeShoppingCart =function(){
    btngiohang.classList.toggle('disable');
    backdrop.classList.toggle('hidden-backdrop');
}