function changeHandler(ev) {
	var div = document.getElementById("payment-details");
	var payButton = document.getElementById("pay-btn");
	let val = ev.target.value;
	if (val == "cod") {
		div.style.display = "none";
		payButton.innerText = "Order";
	}
	if (val == "card") {
		div.style.display = "block";
	}
}

const finalAmount = document.getElementById("final-amount");
const queryParams = new URLSearchParams(window.location.search);
const paramValue = queryParams.get("totalamount");

console.log(paramValue); 
finalAmount.value = paramValue;


function order() {
	window.location = `./final.html`;
}
