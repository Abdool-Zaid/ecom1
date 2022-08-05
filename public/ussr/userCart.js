diplayBasket=()=>{
    Basket.classList.toggle('active')
}
let showProduct=()=>{
   
}
let Basket =document.querySelector('#userCart')
if(!localStorage.getItem('product')){
    console.log('cart empty')
}
else{
    window.addEventListener('click',diplayBasket())
}
// document.querySelectorAll('.Item').addEventListener('click',showProduct())

let ResetData = () => {
    localStorage.clear();
  };
