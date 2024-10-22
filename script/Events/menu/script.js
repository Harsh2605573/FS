const order = document.querySelectorAll('input[type="checkbox"]');
const totalBillElement = document.getElementById('totalBill');
let totalBill = 0;

// function Bill() {
//     totalBill = 0;
//     order.forEach(checkbox => {
//         if (checkbox.checked) {
//             totalBill += parseFloat(checkbox.value);
//         }
//     });
//     totalBillElement.textContent = totalBill;
// }
// order.forEach(checkbox => {
//     checkbox.addEventListener(`change`, updateTotalBill)
// });
let div=document.getElementById('totalBill');
let dis = document.getElementById('dis');
function change() {
    let sum=0;
    dis.innerHTML=""

    for (let index = 0; index < order.length; index++) {
        
        if(order[index].checked){
            dis.innerHTML  += `<tr>
            <td>${order[index].name}</td>
            <td>${order[index].value}</td>
            </tr>`

        sum = sum + parseInt(order[index].value);
            div.innerHTML = `${sum}`;
        }
    }



}