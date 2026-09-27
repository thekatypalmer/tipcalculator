const billInput = document.getElementById('bill');
const tipSelect = document.getElementById('tip');
const calculateButton = document.getElementById('calculate');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

calculateButton.addEventListener('click', () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);

  if (bill <= 0) {
    tipAmount.textContent = '$0.00';
    totalAmount.textContent = '$0.00';
    return;
  }

  // TROUBLESHOOTING ISSUE #3 (JavaScript): the percent is used as a whole number instead of a decimal.
  const tip = bill * tipPercent;
  const total = bill + tip;

  tipAmount.textContent = `$${tip.toFixed(2)}`;
  totalAmount.textContent = `$${total.toFixed(2)}`;
});
