function increment() {
  const qty = document.getElementById('qty');
  let val = parseInt(qty.innerHTML) + 1;
  console.log(val);
  qty.innerHTML = val;
}

function decrement() {
  const qty = document.getElementById('qty');
  let val = parseInt(qty.innerHTML) - 1;
  if (val < 1) {
    val = 1;
  }
  console.log(val);
  qty.innerHTML = val;
}

function addToCart(img,price,name) {
  let data = [{name,img,price}];
  const storedData = sessionStorage.getItem("cartItems");
  if (storedData) {
    const temp = JSON.parse(storedData);
    data = [...data, ...temp];
    console.log(data);
  }
  sessionStorage.setItem("cartItems",JSON.stringify(data));
}


function goToCart() {
  window.location = "./cart.html";
}