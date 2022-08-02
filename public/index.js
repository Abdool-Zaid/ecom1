// console.log('active')

fetch("http://localhost:6969/products", {
        method: "get",
        Headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjE2LCJmdWxsX25hbWUiOiJtYWRkaXNvbiBqYWNvYnMiLCJlbWFpbCI6Im1hZGRpc29uLmphY29iczQ3QGV0aGVyZWFsLmVtYWlsIiwidXNlcl90eXBlIjoiYWRtaW4iLCJwaG9uZSI6InllcyIsImNvdW50cnkiOiJtYWNoaW5lIHdvcmxkIiwiYmlsbGluZ19hZGRyZXNzIjoiZmlyc3QgdHJlZSBvbiB0aGUgbGVmdCIsImRlZmF1bHRfc2hpcHBpbmdfYWRkcmVzcyI6ImJlaGluZCB5b3UifSwiaWF0IjoxNjU5NDI2MzM3LCJleHAiOjE2OTA5NjIzMzd9.Bo68hVUhuPVPusBM_RODjKk5EHBM35Yb68s-M0jntQY",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let products = [];
        products = data;
            console.log(products);

       

          products.forEach((product) => {
            document.querySelector("#target").innerHTML += `
    <div class="Item"  onclick='BuyNow()'  >
    <h1>${product.name}</h1>
    <h4 dir="rtl"> ${product.descriptions}</h4>
    <p class="subInfo" dir="rtl"> R${product.price}</p>
    <p class="subInfo" dir="rtl">amount available ${product.stock}</p>
    <p class="subInfo" dir="rtl"> mass ${product.weight}</p>
    </div>
    `;
          });
        });