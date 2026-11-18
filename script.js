function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateTotalPayableAmount(principal, interestAmount) {
    return principal + interestAmount;
}

function calculate() {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');

    if (!principalInput || !rateInput || !timeInput) return;

    const p = parseFloat(principalInput.value);
    const r = parseFloat(rateInput.value);
    const t = parseFloat(timeInput.value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        alert("Please enter valid numeric values.");
        return;
    }

    const simpleInterest = calculateSimpleInterest(p, r, t);
    const totalAmount = calculateTotalPayableAmount(p, simpleInterest);

    document.getElementById('simple-interest').innerText = simpleInterest.toFixed(2);
    document.getElementById('total-payable').innerText = totalAmount.toFixed(2);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}
