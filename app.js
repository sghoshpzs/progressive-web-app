document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const cake = document.getElementById("cakeType").value;
  const quantity = document.getElementById("quantity").value;
  const address = document.getElementById("address").value;

  const pricePerCake = 500;
  const totalAmount = quantity * pricePerCake;

  const upiID = "yourupiid@upi"; // 🔴 Replace with your UPI ID
  const merchantName = "Cake Shop";

  const upiURL = `upi://pay?pa=${upiID}&pn=${merchantName}&am=${totalAmount}&cu=INR`;

  alert(`Order Summary:
Cake: ${cake}
Quantity: ${quantity}
Total: ₹${totalAmount}
Address: ${address}`);

  window.location.href = upiURL;
});
