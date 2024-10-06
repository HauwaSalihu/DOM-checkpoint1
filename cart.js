// Helper function to update total price
function updateTotal() {
  const items = document.querySelectorAll(".cart-item");
  let total = 0;

  items.forEach((item) => {
    const price = parseInt(item.querySelector(".amount").innerHTML);
    const quantity = parseInt(item.querySelector(".quantity").innerHTML);
    total += price * quantity;
  });

  document.getElementById("total").innerHTML = "N" + total.toLocaleString();
}

// Add event listeners to the plus and minus buttons
document.querySelectorAll(".plus-btn").forEach((plusBtn) => {
  plusBtn.addEventListener("click", function () {
    const quantityElem = this.closest(".cart-item").querySelector(".quantity");
    let quantity = parseInt(quantityElem.innerHTML);
    quantity += 1;
    quantityElem.innerHTML = quantity.toString();
    updateTotal();
  });
});

document.querySelectorAll(".minus-btn").forEach((minusBtn) => {
  minusBtn.addEventListener("click", function () {
    const quantityElem = this.closest(".cart-item").querySelector(".quantity");
    let quantity = parseInt(quantityElem.innerHTML);
    if (quantity > 1) {
      quantity -= 1;
      quantityElem.innerHTML = quantity.toString();
      updateTotal();
    }
  });
});

// Add event listeners for the delete buttons
document.querySelectorAll(".delete-btn").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function () {
    const cartItem = this.closest(".cart-item");
    cartItem.remove();
    updateTotal();
  });
});

// Add event listeners for like buttons
document.querySelectorAll(".like-btn").forEach((likeBtn) => {
  likeBtn.addEventListener("click", function () {
    this.classList.toggle("text-red-500");
  });
});

// Initial calculation of the total price
updateTotal();
