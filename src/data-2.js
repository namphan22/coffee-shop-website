const data=[
    {
       "img":"./assests/img/Vanilla-latte.png",
       "name":"Vanilla latte",
       "cost":21,
       "feedback":"quit",
       "id":"1"
    },
    {
      "img":"./assests/img/Vanilla-latte.png",
      "name":"Vanilla latte",
      "cost":21,
      "feedback":"quit",
      "id":"1"
   },
    {
       "img":"./assests/img/espresso.png",
       "name":"Espresso",
       "cost":12,
       "feedback":"quit",
       "id":"2"
    },
    {
       "img":"./assests/img/hazelnut-latte.png",
       "name":"Hazelnut latte",
       "cost":23,
       "feedback":"quit",
       "id":"3"
    }
 ]
//  console.log(data);
 function checkIsItemAvailable({img,name,cost,feedback,id}){
   console.log(id);
   return data.some((element)=>element.id===id);

}
// for(const {img,name,cost,feedback ,id} of data){
//    console.log(id);
// }
console.log(checkIsItemAvailable(data[0]));
