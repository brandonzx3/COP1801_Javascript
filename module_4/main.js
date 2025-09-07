function validateServiceQuality(quality) {
    return (quality === "great" || quality === "ok" || quality === "poor") ? quality : null;
}

function validateServiceAmount(amount) {
    return (!isNaN(amount) && amount >= 5 && amount <= 500) ? amount : null;
}

function calculateTip(amount, quality) {
    let tipRate = { great: 0.20, ok: 0.15, poor: 0.10 }[quality];
    return amount * tipRate;
}

// Event listener for button
document.getElementById("calcBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const quality = document.getElementById("quality").value;
    const resultBox = document.getElementById("result");

    const validAmount = validateServiceAmount(amount);
    const validQuality = validateServiceQuality(quality);

    if (validAmount === null) {
    resultBox.textContent = "Please enter a valid service amount between $5 and $500.";
    resultBox.style.color = "red";
    return;
    }
    if (validQuality === null) {
    resultBox.textContent = "Please select a valid service quality.";
    resultBox.style.color = "red";
    return;
    }

    const tip = calculateTip(validAmount, validQuality);
    resultBox.style.color = "black";
    resultBox.innerHTML = `
    For a service amount of <b>$${validAmount.toFixed(2)}</b>,<br>
    with <b>${validQuality}</b> service, the recommended tip is 
    <b>$${tip.toFixed(2)}</b>.
    `;
});