const balanceElement = document.getElementById("balance");
const amountElement = document.getElementById("amount");
const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const transactionHistory = document.getElementById("transaction-history");

let balance = 1000;
let transactions = [];

function updateBalance() {
    balanceElement.textContent = `$${balance.toFixed(2)}`;
}

function updateTransactionHistory() {
    transactionHistory.innerHTML = "";
    transactions.forEach((transaction, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Transaction ${index + 1}: ${transaction.toFixed(2)}`;
        transactionHistory.appendChild(listItem);
    });
}

updateBalance();
updateTransactionHistory();

depositButton.addEventListener("click", () => {
    const depositAmount = parseFloat(amountElement.value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        transactions.push(depositAmount);
        updateBalance();
        updateTransactionHistory();
    }
    amountElement.value = "";
});

withdrawButton.addEventListener("click", () => {
    const withdrawAmount = parseFloat(amountElement.value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && balance >= withdrawAmount) {
        balance -= withdrawAmount;
        transactions.push(-withdrawAmount);
        updateBalance();
        updateTransactionHistory();
    }
    amountElement.value = "";
});
