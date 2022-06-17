let addressData = JSON.parse(localStorage.getItem("shippingAddress"));
let user = JSON.parse(localStorage.getItem("user"));
console.log(addressData, user);
let { address, pincode, aptNo, city } = addressData;
let addressTag = document.getElementById("shipmentAddress");
addressTag.innerHTML = `${address},${city},${pincode}`;
let emailAdd = document.getElementById("userEmail");
if (user === null) {
  emailAdd.innerText = "demo@xyz.com";
} else {
  emailAdd.innerHTML = `${user.email} `;
}

document.getElementById("submit").addEventListener("click", () => {
  location.replace("payment.html");
});
