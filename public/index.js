// console.log = 0;
// console.log('active')

fetch("https://ecom-oneazt.herokuapp.com/products", {
  method: "get",
  Headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjE2LCJmdWxsX25hbWUiOiJtYWRkaXNvbiBqYWNvYnMiLCJlbWFpbCI6Im1hZGRpc29uLmphY29iczQ3QGV0aGVyZWFsLmVtYWlsIiwidXNlcl90eXBlIjoiYWRtaW4iLCJwaG9uZSI6InllcyIsImNvdW50cnkiOiJtYWNoaW5lIHdvcmxkIiwiYmlsbGluZ19hZGRyZXNzIjoiZmlyc3QgdHJlZSBvbiB0aGUgbGVmdCIsImRlZmF1bHRfc2hpcHBpbmdfYWRkcmVzcyI6ImJlaGluZCB5b3UifSwiaWF0IjoxNjU5NDI2MzM3LCJleHAiOjE2OTA5NjIzMzd9.Bo68hVUhuPVPusBM_RODjKk5EHBM35Yb68s-M0jntQY",
  },
  //  mode:'no-cors'
})
  .then((response) => response.json())
  .then((data) => {
    let products = []
    products = data;

    products.forEach((product) => {
      document.querySelector("#target").innerHTML += `
    <div class="Item"  onclick='showItem(this.id)' id="${product.product_id}" >
    <h1>${product.name}</h1>
    <h4 dir="rtl"> ${product.descriptions}</h4>
    <p class="subInfo" dir="rtl"> R${product.price}</p>
    <p class="subInfo" dir="rtl">amount available: ${product.stock}</p>
    <p class="subInfo" dir="rtl"> mass ${product.weight}</p>
    </div>
    `;
    });
  });
let route = () => {
  //   alert("active");
};

// let LoginRoute = () => {
//   fetch("https://ecom-oneazt.herokuapp.com/users");
// };

// let email = document.querySelector("#email").value;
// async function UserLogin(e) {
//   e.preventDefault();
//   const response = await fetch("https://ecom-oneazt.herokuapp.com/users/login", {
//     method: "POST",
//     body: JSON.stringify({
//       email: document.querySelector("#email").value,
//       password: document.querySelector("#password").value,
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

async function showItem(id) {
  const response = await fetch(
    "https://ecom-oneazt.herokuapp.com/products/"+`${id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  let cartArray= []
  let data = await response.json();
  let product= data;
  localStorage.setItem("product", JSON.stringify(product.pop()));
  // alert(localStorage.product)
  
  cartArray.push(JSON.parse(localStorage.product))
  console.log(cartArray)
  cartArray.forEach((product) => {
    Basket.innerHTML+=`
    <div class="productName">
    <h1>
    ${product.name}
    </h1>
    </div>
    <div class="productContent">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.descriptions}</h3>
    <p>R${product.price}</p>
    </div>
    `
    localStorage.setItem('cart',JSON.stringify(cartArray))
})



}
// }
