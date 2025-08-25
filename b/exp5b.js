const rates = {
    USD: { INR: 83.3, EUR: 0.92, GBP: 0.78, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, INR: 1 },
    EUR: { USD: 1.09, INR: 90.2, GBP: 0.85, EUR: 1 },
    GBP: { USD: 1.28, INR: 106.5, EUR: 1.18, GBP: 1 }
};

document.getElementById("convertBtn").addEventListener("click", function () {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    let rate = rates[from][to];
    let converted = (amount * rate).toFixed(2);

    document.getElementById("result").textContent =
        `Converted Amount: ${converted} ${to}`;
});
