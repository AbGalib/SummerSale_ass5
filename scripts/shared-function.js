// Function to add item to cart list
function addToCart(productName) {
    const dynamicCart = document.getElementById('dynamic-cart');

    // Create new list item
    const newItem = document.createElement('li');
    
    // Incremental counter for numbering
    const itemCount = dynamicCart.getElementsByTagName('li').length + 1;
    
    // Set the text content of the new item with numbering
    newItem.textContent = itemCount + '. ' + productName;

    // Append new item to dynamic cart
    dynamicCart.appendChild(newItem);
}



// Function to update total price
function updateTotalPrice(price) {
    // Add the price of the clicked item to the total
    totalPrice += price;

    // Get the total price element
    const totalPriceElement = document.getElementById('total-price');

    // Update the total price element with the new total, including the label
    totalPriceElement.textContent = "Total Price: " + totalPrice.toFixed(2);

    // Enable or disable the apply coupon button based on total price
    toggleApplyCouponButton();

    // Enable or disable the purchase button based on total price
    togglePurchaseButton(totalPrice);
}


// Function to toggle purchase button based on total price
function togglePurchaseButton(totalPrice) {
    if (totalPrice > 0) {
        // If total price is greater than 0, enable the purchase button
        purchaseButton.disabled = false;

    } else {
        // If total price is 0 or less, disable the purchase button
        purchaseButton.disabled = true;

    }
}


// Function to toggle apply coupon button based on total price
function toggleApplyCouponButton() {
    if (totalPrice >= 200) {
        // If total price is 200 or more, enable the apply coupon button
        applyCouponButton.disabled = false;

    } else {
        // If total price is less than 200, disable the apply coupon button
        applyCouponButton.disabled = true;

    }
}

