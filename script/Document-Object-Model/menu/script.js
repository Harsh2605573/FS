const order = document.querySelectorAll('input[type="checkbox"]');
const totalBillElement = document.getElementById('totalBill');
let totalBill = 0;

function Bill() {
    totalBill = 0;
    order.forEach(checkbox => {
        if (checkbox.checked) {
            totalBill += parseFloat(checkbox.value);
        }
    });
    totalBillElement.textContent = totalBill;
}
order.forEach(checkbox => {
    checkbox.addEventListener(`change`, updateTotalBill)
});