// "use strict"
// window.onload = function(){

//     if(localStorage.getItem("basket") === null){
//         localStorage.setItem("basket", JSON.stringify([]));
//     }


//     const addToCart = document.getElementsByClassName("addtocart");
//     const span = document.getElementById("basket");
//     const basket = JSON.parse(localStorage.getItem("basket"));
//       UpdateCart(basket);

//     addToCart.onclick = function(e){
//             e.preventDefault(); 
//             console.log("acaca")

//             const proId = addToCart.getAttribute("proId");

//             const basketParsed = JSON.parse(localStorage.getItem("basket"));
//             basketParsed.push(proId);
//                 UpdateCart(basketParsed);
//             localStorage.setItem("basket", JSON.stringify(basketParsed));


//     }


//     function UpdateCart(basket)
// {
//   span.innerText =  basket.length;
// }

// }