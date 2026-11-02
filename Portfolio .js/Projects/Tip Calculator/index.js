const btnEI = document.getElementByld("calculate")
const billInput = document.getElementByld("bill")
const tipInput = document.getElementByld("tip")
const totalSpan = document.getElementByld("total")

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * ( 1+ tipValue / 100)
    totalSpan.innerText = totalValue.toFixed(2)
}


btnEI.addEventListeer("click",calculateTotal);