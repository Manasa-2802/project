function changeHandler(ev) {
	var div = document.getElementById("payment-details");
	let val = ev.target.value;
	if (val == "cod") {
		div.style.display = "none";
	}
	if (val == "card") {
		div.style.display = "block";
	}
}
