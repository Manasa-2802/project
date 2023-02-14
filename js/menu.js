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