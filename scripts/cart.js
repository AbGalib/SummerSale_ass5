
// Initialize total price and discount variables
let totalPrice = 0;
let discount = 0;

// Get the apply coupon button and coupon input field by their IDs
const applyCouponButton = document.getElementById('cupon');
const couponInput = document.getElementById('sell');

// Get the purchase button by its ID
const purchaseButton = document.getElementById('btn-purchase');

// Get references to modal elements
const modalBackdrop = document.getElementById('modalBackdrop');
const modalDialog = document.getElementById('modalDialog');

// Initially disable the apply coupon button 
applyCouponButton.disabled = true;


// Initially disable the purchase button
purchaseButton.disabled = true;




// Add event listeners to each card
document.querySelectorAll('.item').forEach(function (item) {
    item.addEventListener('click', function (event) {
        // Check if the click event originated from the rating stars
        if (!event.target.classList.contains('mask-star-2')) {
            // Extract the title and price of the clicked card
            const title = item.querySelector('.card-title').textContent;
            const price = parseFloat(item.querySelector('.total-price').textContent);

            // Add the item to the cart list
            addToCart(title);

            // Update the total price
            updateTotalPrice(price);
        }
    });
});


// Event listener for purchase button click
purchaseButton.addEventListener('click', function () {
    // Show the modal
    showModal();
});

// Event listener for "Go Home" button click
const goHomeButton = document.getElementById('goHomeButton');
goHomeButton.addEventListener('click', function () {
    // Redirect to the index.html page
    window.location.href = "index.html";
    // Refresh the page after 1 second (1000 milliseconds)
    setTimeout(function () {
        window.location.reload();
    }, 1000);
});


// Function to show the modal
function showModal() {
    // Show the modal backdrop and dialog
    modalBackdrop.classList.remove('hidden');
    modalDialog.classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    // Hide the modal backdrop and dialog
    modalBackdrop.classList.add('hidden');
    modalDialog.classList.add('hidden');
}


// Apply Coupon Button Click Event Listener
applyCouponButton.addEventListener('click', function () {
    // Check if the entered coupon code is valid
    if (couponInput.value === "SELL200") {
        // Calculate discount
        discount = totalPrice * 0.20;

        // Update the discount element
        document.getElementById('discount').textContent = "Discount: " + discount.toFixed(2);

        // Calculate total amount after discount
        const totalAfterDiscount = totalPrice - discount;

        // Update the total amount element
        document.getElementById('total').textContent = "Total: " + totalAfterDiscount.toFixed(2);

        // Enable or disable the purchase button based on total price
        togglePurchaseButton(totalAfterDiscount);
    } else {
        // If coupon code is invalid, display an alert
        alert("Invalid coupon code!");
    }
});