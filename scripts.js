// Declare a variable to store the cart items and cart count
let cart = [];

// Function to add products to the cart
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartCount();
}

// Function to update the cart count displayed in the header
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Function to display the cart items in a simple alert (you can customize this)
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let cartDetails = "Your Cart:\n";
        let total = 0;

        cart.forEach((item, index) => {
            cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
            total += item.price;
        });

        cartDetails += `\nTotal: $${total.toFixed(2)}`;
        alert(cartDetails);
    }
}

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false; // prevent form submission
    }

    alert("Message Sent! We'll get back to you soon.");
    return true; // allow form submission
}
