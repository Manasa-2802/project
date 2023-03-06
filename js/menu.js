var cartVal = 0;
var cart = document.getElementById("cart-value");

function increment(id) {
  const qty = document.getElementById(id);
  let val = parseInt(qty.innerHTML) + 1;
  console.log(val);
  qty.innerHTML = val;
}

function decrement(id) {
  const qty = document.getElementById(id);
  let val = parseInt(qty.innerHTML) - 1;
  if (val < 1) {
    val = 1;
  }
  console.log(val);
  qty.innerHTML = val;
}

function addToCart(img,price,name,qtyID) {
  const qty = parseInt(document.getElementById(qtyID).innerText);
  let data = [{name,img,price,qty}];
  const storedData = sessionStorage.getItem("cartItems");
  if (storedData) {
    const temp = JSON.parse(storedData);
    data = [...data, ...temp];
    console.log(data);
  }
  sessionStorage.setItem("cartItems",JSON.stringify(data));
  cartVal++;
  cart.innerText = cartVal;
}


function goToCart() {
  window.location = "./cart.html";
}