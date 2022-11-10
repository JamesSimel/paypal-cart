// JS
const addToCart = document.getElementById("add");
const addToWish = document.querySelector(".add-to-wish");

const wishCount = document.querySelector("#lblWishCount");
const cartCount = document.querySelector("#lblCartCount");

const addToCartEvent = () => {
    cartCount.innerHTML ++;
}
const addToWishEvent = () => {
    wishCount.innerHTML ++;
}

addToWish.addEventListener("click", addToWishEvent);
addToCart.addEventListener("click", addToCartEvent);

