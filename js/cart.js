
const products = sessionStorage.getItem('cartItems');
const productsDiv = document.getElementById("products-div");
let totalAmount = 0;

if (products) {
    const prodArray = JSON.parse(products);
    var uniqueArray = prodArray.filter((object, index, self) =>
        index === self.findIndex((obj) => obj.img === object.img)
    );
    renderUI(uniqueArray);
}

function renderUI(cartListingProduct) {
    productsDiv.innerHTML = null;
    totalAmount = 0;
    cartListingProduct.forEach(prod => {
        const product = document.createElement("div");
        product.classList.add("product");

        const img = document.createElement("img");
        img.src = prod.img;
        product.appendChild(img);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productName = document.createElement("h3");
        productName.classList.add("product-name")
        productName.innerText = prod.name;
        productInfo.appendChild(productName);

        const productPrice = document.createElement("h4");
        productPrice.classList.add("product-price")
        productPrice.innerText = `₹${prod.price}`;
        productInfo.appendChild(productPrice);

        const productQuantity = document.createElement("p");
        productQuantity.classList.add("product-quantity");
        productQuantity.innerHTML = `Qnt: <input value="1" name="">`;
        productInfo.appendChild(productQuantity);

        const productRemove = document.createElement("p");
        productRemove.classList.add("product-remove");
        productRemove.addEventListener("click",() => removeProd(prod));

        const icon = document.createElement("i");
        icon.classList.add("fa","fa-trash")
        productRemove.appendChild(icon);

        productInfo.appendChild(productRemove);

        product.appendChild(productInfo);

        productsDiv.appendChild(product);
        totalAmount += prod.price;
    });

    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = `₹${totalAmount}`

    const totalProduct = document.getElementById("total-product");
    totalProduct.innerText = uniqueArray.length;
    
}

function removeProd(prod) {
    uniqueArray = uniqueArray.filter((product) => product.img != prod.img);
    if (!uniqueArray.length) {
        sessionStorage.clear();
        const cartTotalContainer = document.getElementById("cart-total");
        cartTotalContainer.innerHTML = `
            <h2>No Products !!</h2>
            <a href='./menu2.html'>Go To Menu</a>
        `
    }
    renderUI(uniqueArray);
}

function checkout() {
    window.location = `./payment.html?totalamount=${totalAmount}`;
}






