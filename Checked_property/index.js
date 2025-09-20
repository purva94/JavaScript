const mycheckbox = document.getElementById("mycheckbox");
const Visa = document.getElementById("Visa");
const Mastercard = document.getElementById("Mastercard");
const Paypal = document.getElementById("Paypal");
const Mybtn = document.getElementById("Mybtn");
const Subdetails = document.getElementById("Subdetails");
const Paymentdetails = document.getElementById("Paymentdetails");

Mybtn.onclick = function () {
  if (mycheckbox.checked) {
    Subdetails.textContent = `you are subscribed`;
  } else {
    Subdetails.textContent = `you are not subscribed`;
  }
  if (Visa.checked) {
    Paymentdetails.textContent = `you are paying by visa`;
  } else if (Mastercard.checked) {
    Paymentdetails.textContent = `you are paying by matercard`;
  } else if (Paypal.checked) {
    Paymentdetails.textContent = `you are paying by paypal`;
  } else {
    Paymentdetails.textContent = `kindly select the payment details first `;
  }
};
