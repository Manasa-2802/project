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
