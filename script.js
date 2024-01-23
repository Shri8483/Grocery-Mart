// Define an array to store items in the cart
let cartItems = [];

// Function to add items to the cart
function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

// Function to update the cart
function updateCart() {
  let cartElement = document.getElementById("cart-items");
  let total = 0;
  cartElement.innerHTML = "";
  cartItems.forEach(function (item) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.name + " - $" + item.price));
    cartElement.appendChild(li);
    total += item.price;
  });
  document.getElementById("cart-total").textContent = "$" + total;
}
