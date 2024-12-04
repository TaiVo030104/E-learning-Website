function openNav() {
    document.getElementById("Sidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
}
function logout() {
    localStorage.removeItem("cart");
}
// Load cart from localStorage
let carts = [];
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
        carts = JSON.parse(cartData);
    }
    const cartCount = document
        .querySelectorAll("#cart-count")
        .forEach((element) => {
            if (element) {
                element.innerText = carts.length;
            } else {
                console.error("Element with ID 'cart-count' not found.");
            }
        });
}
window.addEventListener("DOMContentLoaded", loadCartFromLocalStorage);
